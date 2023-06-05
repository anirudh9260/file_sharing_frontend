import React from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'

export default function FileItem({ file, onDelete }) {
    return (
        <div>
            <strong>{file}</strong>
            <Button variant="text">Link</Button>
            <Button variant="text">Download</Button>
            <Button variant="outlined" color="error" onClick={onDelete}>
                Delete
            </Button>
        </div>
    )
}

FileList.propTypes = { file: PropTypes.object, onDelete: PropTypes.func }
