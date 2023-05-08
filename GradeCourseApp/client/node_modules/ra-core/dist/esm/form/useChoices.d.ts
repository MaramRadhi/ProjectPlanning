import * as React from 'react';
import { ReactElement } from 'react';
import { RaRecord } from '../types';
export declare type OptionTextElement = ReactElement<{
    record: RaRecord;
}>;
export declare type OptionTextFunc = (choice: any) => React.ReactNode;
export declare type OptionText = OptionTextElement | OptionTextFunc | string;
export interface ChoicesProps {
    choices?: any[];
    isFetching?: boolean;
    isLoading?: boolean;
    optionValue?: string;
    optionText?: OptionText;
    translateChoice?: boolean;
}
export interface UseChoicesOptions {
    optionValue?: string;
    optionText?: OptionText;
    disableValue?: string;
    translateChoice?: boolean;
}
export declare const useChoices: ({ optionText, optionValue, disableValue, translateChoice, }: UseChoicesOptions) => {
    getChoiceText: (choice: any) => string | JSX.Element;
    getChoiceValue: (choice: any) => any;
    getDisableValue: (choice: any) => any;
};
//# sourceMappingURL=useChoices.d.ts.map