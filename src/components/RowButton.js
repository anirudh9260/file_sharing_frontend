import React from 'react'
import { Box, Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { useAppDispatch } from '../hooks/redux-hooks'
import { deleteFilesAction, copyLinkAction } from '../redux/actions/files'
import DeleteFileConfirmDialog from './DeleteFileConfirmDialog'

function RowButton(props) {
    const { row } = props

    const dispatch = useAppDispatch()
    const link =
        `${process.env.REACT_APP_API_URL}` +
        '/files/' +
        row.uid +
        '/' +
        row.file_name

    const handleCopyLink = () => {
        dispatch(copyLinkAction(link))
    }

    const handleDelete = () => {
        dispatch(deleteFilesAction(row))
    }

    return (
        <Box>
            {/* <ShareIcon></ShareIcon> */}
            <a href={link} download target="_blank" rel="noopener noreferrer">
                <Button
                    variant="contained"
                    target=""
                    sx={{ mx: 1 }}
                    startIcon={<FileDownloadIcon />}
                >
                    Download
                </Button>
            </a>
            <Button
                variant="contained"
                color="success"
                onClick={handleCopyLink}
                startIcon={<ShareIcon />}
                sx={{ mx: 1 }}
            >
                Copy Link
            </Button>
            {/* <Button
                variant="contained"
                color="error"
                sx={{ mx: 1 }}
                onClick={handleDelete}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button> */}
            <DeleteFileConfirmDialog row = {row}></DeleteFileConfirmDialog>
        </Box>
    )
}

export default RowButton
