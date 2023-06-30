import React from 'react'
import { Button, Box } from '@mui/material'
import { Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import ConvertCSVDialog from './ConvertCSVDialog'
import ConvertJSONDialog from './ConvertJSONDialog'
import DeleteFileConfirmDialog from './DeleteFileConfirmDialog'


function FileActionDialog(props) {
    const { row } = props
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const conversion =
        (row.type === '.csv' || row.type === ".json") ? (row.type === '.json') ? (
            <ConvertCSVDialog row={row}></ConvertCSVDialog>
        ) : (
            <ConvertJSONDialog row={row}></ConvertJSONDialog>
        ) : ''
    
    return (
        <div>
            <Typography
                variant="p"
                align="center"
                fontFamily="roboto"
                color="blue"
                fontWeight={500}
                onClick={handleClickOpen}
                // sx={{ my: 2, flex: '1' }}
            >
                {row.file_name}
            </Typography>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>File Actions</DialogTitle>
                <DialogContent>
                    <Box width="400px">
                        <DialogContentText>Please select a file action</DialogContentText>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ mx: 3 }}>Cancel</Button>
                    {conversion}
                    <DeleteFileConfirmDialog row={row}></DeleteFileConfirmDialog>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FileActionDialog