import React from 'react'
import EnhancedTable from './EnhancedTable'
import { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { getFilesForProject } from '../redux/actions/files'

function EnhancedTableContainer(props) {

    const { selectedProject } = props
    const dispatch = useAppDispatch()

    const filesState = useAppSelector(state => state.filesReducer)

    useEffect(() => {
        dispatch(getFilesForProject(selectedProject.projectId))
    }, [filesState.isDeleting, filesState.isUploading])

    if (filesState.isLoading === false && filesState.files) {
        return <EnhancedTable selectedProject={selectedProject} rows={filesState.files} />
    }
}

export default EnhancedTableContainer
