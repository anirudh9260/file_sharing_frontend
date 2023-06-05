import React from 'react'
import { Stack, Box, Button, ButtonGroup } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';

function RowButton() {
    return (
        <Stack direction="row">
            <Box display="flex" justifyContent="space-between">
                <ShareIcon></ShareIcon>
                <Button variant="contained">Download</Button>
                <Button variant="contained">CopyLink</Button>
                <Button variant="contained">Delete</Button>
           
            </Box>
        </Stack>
    )
}

export default RowButton
