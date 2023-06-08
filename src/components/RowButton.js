import React from 'react'
import { Stack, Box, Button, ButtonGroup } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete';

function RowButton() {
    return (
        <Box justifyContent="space-between">
            {/* <ShareIcon></ShareIcon> */}
            <Button variant="contained" color="success" sx={{mx: 1}}>Download</Button>
            <Button variant="contained" sx={{ mx: 1}}>Link</Button>
            <Button variant="text" color="error" sx={{ mx: 1}} startIcon={<DeleteIcon />}>Delete</Button>
        </Box>
    )
}

export default RowButton
