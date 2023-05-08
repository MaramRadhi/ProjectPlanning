import { ReactElement, ReactNode } from 'react';
import { ChoicesProps } from 'ra-core';
import { CommonInputProps } from './CommonInputProps';
import { SupportCreateSuggestionOptions } from './useSupportCreateSuggestion';
import { DatagridProps } from '../list/datagrid';
/**
 * WIP: This component is not yet ready to be used.
 *
 * An input for selecting items displayed in a datagrid
 *
 * @example
 * const membersFilters = [
 *     <TextInput label="Search" source="q" alwaysOn />,
 * ];
 * const TeamEdit = () => (
 *    <Edit>
 *        <SimpleForm>
 *            <TextInput source="name" />
 *            <ReferenceArrayInput
 *                source="members"
 *                reference="users"
 *                filter={{ is_retired: false }}
 *                perPage={50}
 *                sort={{ field: 'lastName', order: 'ASC' }}
 *            >
 *                <DatagridInput
 *                    filters={membersFilters}
 *                >
 *                    <TextField source="firstName" />
 *                    <TextField source="lastName" />
 *                </DatagridInput>
 *            </ReferenceArrayInput>
 *        </SimpleForm>
 *    </Edit>
 * );
 */
export declare const DatagridInput: (props: DatagridInputProps) => JSX.Element;
export declare type DatagridInputProps = Omit<CommonInputProps, 'source'> & ChoicesProps & Omit<SupportCreateSuggestionOptions, 'handleChange'> & DatagridProps & {
    children?: ReactNode;
    source?: string;
    filters?: ReactElement | ReactElement[];
    pagination?: ReactElement | false;
};
//# sourceMappingURL=DatagridInput.d.ts.map