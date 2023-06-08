import React from 'react'
import EnhancedTable from './EnhancedTable'

import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'

function EnhancedTableContainer() {
    function createData(id, file_name, date_modified, type, size, uploaded_by) {
        return {
            id, 
            file_name,
            date_modified,
            type,
            size,
            uploaded_by,
        }
    }

    const files_data = useAppSelector(state => state.filesReducer)

    let row_data = []

    if (files_data.isLoading === false && files_data.files) {
        console.log("Files Data", files_data)
        for (let i = 0; i < files_data.files.length; i++) {
            row_data.push(
                createData(
                    files_data.files[i].id,
                    files_data.files[i].file_name,
                    files_data.files[i].created_at.toString("MMMM yyyy"),
                    files_data.files[i].extension,
                    files_data.files[i].size,
                    files_data.files[i].username,
                ),
            )
        }
        console.log('Row data:', row_data)
    }

    return <EnhancedTable rows={row_data} />
}

export default EnhancedTableContainer
