/// <reference types="react" />
import { SimpleListProps } from './SimpleList';
export declare const SimpleListConfigurable: {
    ({ preferenceKey, ...props }: SimpleListProps<any> & {
        preferenceKey?: string;
    }): JSX.Element;
    propTypes: {
        className: import("prop-types").Requireable<string>;
        leftAvatar: import("prop-types").Requireable<(...args: any[]) => any>;
        leftIcon: import("prop-types").Requireable<(...args: any[]) => any>;
        linkType: import("prop-types").Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        primaryText: import("prop-types").Requireable<NonNullable<string | import("prop-types").ReactElementLike | ((...args: any[]) => any)>>;
        rightAvatar: import("prop-types").Requireable<(...args: any[]) => any>;
        rightIcon: import("prop-types").Requireable<(...args: any[]) => any>;
        secondaryText: import("prop-types").Requireable<NonNullable<string | import("prop-types").ReactElementLike | ((...args: any[]) => any)>>;
        tertiaryText: import("prop-types").Requireable<NonNullable<string | import("prop-types").ReactElementLike | ((...args: any[]) => any)>>;
        rowStyle: import("prop-types").Requireable<(...args: any[]) => any>;
    };
};
//# sourceMappingURL=SimpleListConfigurable.d.ts.map