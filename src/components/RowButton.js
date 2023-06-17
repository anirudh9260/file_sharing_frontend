import React from 'react'
import { Box, Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useAppDispatch } from '../hooks/redux-hooks'
import { deleteFilesAction, copyLinkAction } from '../redux/actions/files'

function RowButton(props) {
    const {row} = props

    const dispatch = useAppDispatch()
    
    const handleDownload = () => {
        console.log(row)
    }

    const handleCopyLink = () => {
        console.log(row)
        const link = `${process.env.REACT_APP_API_URL}` + "/" + row.uid + "/" + row.file_name
        dispatch(copyLinkAction(link))
    }

    const handleDelete = () => {
        console.log(row)
        dispatch(deleteFilesAction(row.id))
    }

    return (
        <Box justifyContent="space-between">
            {/* <ShareIcon></ShareIcon> */}
            <Button variant="contained" sx={{mx: 1}} onClick={handleDownload} startIcon={<FileDownloadIcon />}>Download</Button>
            <Button variant="contained" color="success" onClick={handleCopyLink} startIcon={<ShareIcon />} sx={{ mx: 1}}>Copy Link</Button>
            <Button variant="contained" color="error" sx={{ mx: 1}} onClick={handleDelete} startIcon={<DeleteIcon />}>Delete</Button>
        </Box>
    )
}

export default RowButton
