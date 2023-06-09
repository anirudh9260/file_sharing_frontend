import React from 'react'
import EnhancedTable from './EnhancedTable'

import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'

function EnhancedTableContainer() {


    const files_data = useAppSelector(state => state.filesReducer)


    if (files_data.isLoading === false && files_data.files) {
        console.log("Files Data", files_data.files)
    }

    return <EnhancedTable rows={files_data.files} />
}

export default EnhancedTableContainer
