import { ReactNode } from 'react';
/**
 * Get default string representation of a record
 *
 * @example // No customization
 * const getRecordRepresentation = useGetRecordRepresentation('posts');
 * getRecordRepresentation({ id: 1, title: 'Hello' }); // => "#1"
 *
 * @example // With <Resource name="posts" recordRepresentation="title" />
 * const getRecordRepresentation = useGetRecordRepresentation('posts');
 * getRecordRepresentation({ id: 1, title: 'Hello' }); // => "Hello"
 */
export declare const useGetRecordRepresentation: (resource: string) => (record: any) => ReactNode;
//# sourceMappingURL=useGetRecordRepresentation.d.ts.map