import { useContext, useEffect, useRef } from 'react';
import { useFormState } from 'react-hook-form';
import { UNSAFE_NavigationContext, useLocation } from 'react-router-dom';
import { useTranslate } from '../i18n';
/**
 * Display a confirmation dialog if the form has unsaved changes.
 * - If the user confirms, the navigation continues and the changes are lost.
 * - If the user cancels, the navigation is cancelled and the changes are kept.
 */
export var useWarnWhenUnsavedChanges = function (enable, formRootPathname, control) {
    // react-router v6 does not yet provide a way to block navigation
    // This is planned for a future release
    // See https://github.com/remix-run/react-router/issues/8139
    var navigator = useContext(UNSAFE_NavigationContext).navigator;
    var location = useLocation();
    var translate = useTranslate();
    var _a = useFormState(control ? { control: control } : undefined), isSubmitSuccessful = _a.isSubmitSuccessful, isSubmitting = _a.isSubmitting, dirtyFields = _a.dirtyFields;
    var isDirty = Object.keys(dirtyFields).length > 0;
    var initialLocation = useRef(formRootPathname || location.pathname);
    useEffect(function () {
        if (!enable || !isDirty)
            return;
        if (!navigator.block) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn('warnWhenUnsavedChanged is not compatible with react-router >= 6.4. If you need this feature, please downgrade react-router to 6.3.0');
            }
            return;
        }
        var unblock = navigator.block(function (tx) {
            var newLocationIsInsideCurrentLocation = tx.location.pathname.startsWith(initialLocation.current);
            var newLocationIsShowView = tx.location.pathname.startsWith("".concat(initialLocation.current, "/show"));
            var newLocationIsInsideForm = newLocationIsInsideCurrentLocation && !newLocationIsShowView;
            if (!isSubmitting &&
                (newLocationIsInsideForm ||
                    isSubmitSuccessful ||
                    window.confirm(translate('ra.message.unsaved_changes')))) {
                unblock();
                tx.retry();
            }
        });
        return unblock;
    }, [
        enable,
        location,
        navigator,
        isDirty,
        isSubmitting,
        isSubmitSuccessful,
        translate,
    ]);
};
//# sourceMappingURL=useWarnWhenUnsavedChanges.js.map