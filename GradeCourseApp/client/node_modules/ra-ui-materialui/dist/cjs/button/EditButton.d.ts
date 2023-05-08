import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { RaRecord } from 'ra-core';
import { ButtonProps } from './Button';
/**
 * Opens the Edit view for the current record.
 *
 * Reads the record and resource from the context.
 *
 * @example // basic usage
 * import { EditButton } from 'react-admin';
 *
 * const CommentEditButton = () => (
 *     <EditButton label="Edit comment" />
 * );
 */
export declare const EditButton: {
    <RecordType extends RaRecord = any>(props: EditButtonProps<RecordType>): JSX.Element;
    propTypes: {
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        scrollToTop: PropTypes.Requireable<boolean>;
    };
};
interface Props<RecordType extends RaRecord = any> {
    icon?: ReactElement;
    label?: string;
    record?: RecordType;
    resource?: string;
    scrollToTop?: boolean;
}
export declare type EditButtonProps<RecordType extends RaRecord = any> = Props<RecordType> & ButtonProps;
export declare const EditButtonClasses: {
    root: string;
};
export {};
//# sourceMappingURL=EditButton.d.ts.map