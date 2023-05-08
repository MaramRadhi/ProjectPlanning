/// <reference types="react" />
import { RaRecord } from 'ra-core';
import { ListProps } from './List';
/**
 * List component rendering a <Datagrid> based on the result of the
 * dataProvider.getList() call.
 *
 * The result (choice and type of columns) isn't configurable, but the
 * <ListGuesser> outputs the <Datagrid> it has guessed to the console so that
 * developers can start from there.
 *
 * To be used as the list prop of a <Resource>.
 *
 * @example
 *
 * import { Admin, Resource, ListGuesser } from 'react-admin';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Admin>
 * );
 */
export declare const ListGuesser: <RecordType extends RaRecord = any>(props: Omit<ListProps, 'children'>) => JSX.Element;
//# sourceMappingURL=ListGuesser.d.ts.map