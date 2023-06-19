import { Button } from '@mui/material'
import React from 'react'
import {Stack, Box} from '@mui/material'

function ConvertButton(props) {
    const { row } = props

    const handleConverttoCSV = () => {
        console.log(row)

    }

    return (
        <Box textAlign='center'>
        <Stack direction="row" sx={{ my: 5, mx: 1 }} justifyContent="space-evenly">
            <Button variant="contained" sx={{mx: 1 }}>Convert to Json</Button>
            <Button variant="contained" sx={{mx: 1 }} onClick={handleConverttoCSV}>Convert to CSV</Button>
        </Stack>
        </Box>
    )
}

export default ConvertButton
