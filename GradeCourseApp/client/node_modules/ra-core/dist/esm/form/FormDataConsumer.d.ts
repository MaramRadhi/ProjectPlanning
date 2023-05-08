import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';
/**
 * Get the current (edited) value of the record from the form and pass it
 * to a child function
 *
 * @example
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm<FieldValues>>
 *             <BooleanInput source="hasEmail" />
 *             <FormDataConsumer>
 *                 {({ formData, ...rest }) => formData.hasEmail &&
 *                      <TextInput source="email" {...rest} />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 *
 * const OrderEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <SelectInput source="country" choices={countries} />
 *             <FormDataConsumer<FieldValues>>
 *                 {({ formData, ...rest }) =>
 *                      <SelectInput
 *                          source="city"
 *                          choices={getCitiesFor(formData.country)}
 *                          {...rest}
 *                      />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 */
declare const FormDataConsumer: <TFieldValues extends FieldValues = FieldValues>(props: ConnectedProps<TFieldValues>) => JSX.Element;
export declare const FormDataConsumerView: <TFieldValues extends FieldValues = FieldValues>(props: Props<TFieldValues>) => any;
export default FormDataConsumer;
export interface FormDataConsumerRenderParams<TFieldValues extends FieldValues = FieldValues> {
    formData: TFieldValues;
    scopedFormData?: any;
    getSource?: (source: string) => string;
}
export declare type FormDataConsumerRender<TFieldValues extends FieldValues = FieldValues> = (params: FormDataConsumerRenderParams<TFieldValues>) => ReactNode;
interface ConnectedProps<TFieldValues extends FieldValues = FieldValues> {
    children: FormDataConsumerRender<TFieldValues>;
    form?: string;
    record?: any;
    source?: string;
    [key: string]: any;
}
interface Props<TFieldValues extends FieldValues> extends ConnectedProps {
    formData: TFieldValues;
    index?: number;
}
//# sourceMappingURL=FormDataConsumer.d.ts.map