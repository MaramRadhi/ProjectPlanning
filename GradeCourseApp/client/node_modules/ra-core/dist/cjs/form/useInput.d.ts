import { ReactElement } from 'react';
import { ControllerFieldState, ControllerRenderProps, UseControllerProps, UseControllerReturn, UseFormStateReturn } from 'react-hook-form';
import { Validator } from './validate';
export declare const useInput: (props: InputProps) => UseInputValue;
export declare type InputProps<ValueType = any> = Omit<UseControllerProps, 'name' | 'defaultValue' | 'rules'> & Partial<UseControllerReturn> & {
    alwaysOn?: any;
    defaultValue?: any;
    format?: (value: ValueType) => any;
    id?: string;
    isRequired?: boolean;
    label?: string | ReactElement | false;
    helperText?: string | ReactElement | false;
    name?: string;
    onBlur?: (...event: any[]) => void;
    onChange?: (...event: any[]) => void;
    parse?: (value: any) => ValueType;
    type?: string;
    resource?: string;
    source: string;
    validate?: Validator | Validator[];
};
export declare type UseInputValue = {
    id: string;
    isRequired: boolean;
    field: ControllerRenderProps;
    formState: UseFormStateReturn<Record<string, string>>;
    fieldState: ControllerFieldState;
};
//# sourceMappingURL=useInput.d.ts.map