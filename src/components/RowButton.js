import React from 'react'
import { Stack, Box, Button, ButtonGroup } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function RowButton() {
    return (
        <Box justifyContent="space-between">
            {/* <ShareIcon></ShareIcon> */}
            <Button variant="contained" sx={{mx: 1}} startIcon={<FileDownloadIcon />}>Download</Button>
            <Button variant="contained" color="success" startIcon={<ShareIcon />} sx={{ mx: 1}}>Copy Link</Button>
            <Button variant="contained" color="error" sx={{ mx: 1}} startIcon={<DeleteIcon />}>Delete</Button>
        </Box>
    )
}

export default RowButton
