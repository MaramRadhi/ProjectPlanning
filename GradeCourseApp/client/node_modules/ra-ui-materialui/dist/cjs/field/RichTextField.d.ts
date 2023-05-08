import { FC } from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { InjectedFieldProps, PublicFieldProps } from './types';
/**
 * Render an HTML string as rich text
 *
 * Note: This component leverages the `dangerouslySetInnerHTML` attribute,
 * but uses the DomPurify library to sanitize the HTML before rendering it.
 *
 * It means it is safe from Cross-Site Scripting (XSS) attacks - but it's still
 * a good practice to sanitize the value server-side.
 *
 * @example
 * <RichTextField source="description" />
 *
 * @example // remove all tags and output text only
 * <RichTextField source="description" stripTags />
 */
export declare const RichTextField: FC<RichTextFieldProps>;
export interface RichTextFieldProps extends PublicFieldProps, InjectedFieldProps, Omit<TypographyProps, 'textAlign'> {
    stripTags?: boolean;
}
export declare const removeTags: (input: string) => string;
//# sourceMappingURL=RichTextField.d.ts.map