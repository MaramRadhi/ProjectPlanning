import { ReactNode } from 'react';
import { CreateControllerProps } from './useCreateController';
import { RaRecord } from '../../types';
/**
 * Call useCreateController and put the value in a CreateContext
 *
 * Base class for <Create> components, without UI.
 *
 * Accepts any props accepted by useCreateController:
 * - id: The record identifier
 * - resource: The resource
 *
 * @example // Custom edit layout
 *
 * const PostCreate = props => (
 *     <CreateBase {...props}>
 *         <Grid container>
 *             <Grid item xs={8}>
 *                 <SimpleForm>
 *                     ...
 *                 </SimpleForm>
 *             </Grid>
 *             <Grid item xs={4}>
 *                 Create instructions...
 *             </Grid>
 *         </Grid>
 *         <div>
 *             Post related links...
 *         </div>
 *     </CreateBase>
 * );
 */
export declare const CreateBase: <RecordType extends RaRecord = any>({ children, ...props }: CreateControllerProps<RecordType, unknown> & {
    children: ReactNode;
}) => JSX.Element;
//# sourceMappingURL=CreateBase.d.ts.map