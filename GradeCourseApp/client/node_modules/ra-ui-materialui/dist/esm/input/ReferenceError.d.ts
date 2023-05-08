import { ReactElement } from 'react';
import PropTypes from 'prop-types';
export declare const ReferenceError: {
    ({ label, error, }: {
        label?: string | ReactElement | false;
        error: Error;
    }): JSX.Element;
    propTypes: {
        error: PropTypes.Validator<object>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
    };
};
//# sourceMappingURL=ReferenceError.d.ts.map