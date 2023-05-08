import * as React from 'react';
import PropTypes from 'prop-types';
import { LinkProps as RRLinkProps } from 'react-router-dom';
import { LinkProps as MuiLinkProps } from '@mui/material';
export declare const Link: {
    (props: LinkProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        to: PropTypes.Requireable<NonNullable<string | object>>;
    };
};
export declare const LinkClasses: {
    link: string;
};
export interface LinkProps extends MuiLinkProps<React.ElementType<any>, RRLinkProps> {
    className?: string;
}
//# sourceMappingURL=Link.d.ts.map