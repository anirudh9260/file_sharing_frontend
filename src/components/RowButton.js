import React from 'react'
import { Box, Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { useAppDispatch } from '../hooks/redux-hooks'
import {
    deleteFilesAction,
    copyLinkAction,
    getFilesForProject,
} from '../redux/actions/files'

function RowButton(props) {
    const { row } = props

    const dispatch = useAppDispatch()
    const link =
        `${process.env.REACT_APP_API_URL}` +
        '/files/' +
        row.uid +
        '/' +
        row.file_name

    // const handleDownload = () => {
    //     console.log(row)
    //     // http://127.0.0.1:5000/files/09a3614028314cbe9aef04865613794a/abc.json
    // }

    const handleCopyLink = () => {
        // console.log(row)
        dispatch(copyLinkAction(link))
    }

    const handleDelete = () => {
        console.log(row)
        dispatch(deleteFilesAction(row))
        // dispatch(getFilesForProject())
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
            <Button
                variant="contained"
                color="error"
                sx={{ mx: 1 }}
                onClick={handleDelete}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
        </Box>
    )
}

export default RowButton
