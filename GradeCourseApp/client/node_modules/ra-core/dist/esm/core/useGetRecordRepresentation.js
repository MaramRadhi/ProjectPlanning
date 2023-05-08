import * as React from 'react';
import { useCallback } from 'react';
import get from 'lodash/get';
import { useResourceDefinition } from './useResourceDefinition';
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
export var useGetRecordRepresentation = function (resource) {
    var recordRepresentation = useResourceDefinition({ resource: resource }).recordRepresentation;
    return useCallback(function (record) {
        if (!record)
            return '';
        if (typeof recordRepresentation === 'function') {
            return recordRepresentation(record);
        }
        if (typeof recordRepresentation === 'string') {
            return get(record, recordRepresentation);
        }
        if (React.isValidElement(recordRepresentation)) {
            return recordRepresentation;
        }
        return "#".concat(record.id);
    }, [recordRepresentation]);
};
//# sourceMappingURL=useGetRecordRepresentation.js.map