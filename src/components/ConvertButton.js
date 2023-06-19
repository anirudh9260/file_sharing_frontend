import { Button } from '@mui/material'
import React from 'react'
import { Stack, Box } from '@mui/material'
import { useAppDispatch } from '../hooks/redux-hooks'
import { convertFilesAction } from '../redux/actions/files'

function ConvertButton(props) {
    const { rows, rowIds } = props

    const dispatch = useAppDispatch()

    const handleConverttoCSV = () => {
        console.log(rowIds)
        for (const rowId of rowIds) {
            console.log(rowId)
            const formData = { id: rowId, from_ext: 'json', to_ext: 'csv' }
            dispatch(convertFilesAction(formData))
        }
    }
    const handleConverttoJSON = () => {
        console.log(rowIds)
        for (const rowId of rowIds) {
            console.log(rowId)
            const formData = { id: rowId, from_ext: 'csv', to_ext: 'json' }
            dispatch(convertFilesAction(formData))
        }
    }

    return (
        <Box textAlign="center">
            <Stack
                direction="row"
                sx={{ my: 5, mx: 1 }}
                justifyContent="space-evenly"
            >
                <Button
                    variant="contained"
                    sx={{ mx: 1 }}
                    onClick={handleConverttoJSON}
                >
                    Convert to Json
                </Button>
                <Button
                    variant="contained"
                    sx={{ mx: 1 }}
                    onClick={handleConverttoCSV}
                >
                    Convert to CSV
                </Button>
            </Stack>
        </Box>
    )
}

export default ConvertButton
