import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment';
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { useAppDispatch } from '../hooks/redux-hooks'
import { convertFilesAction } from '../redux/actions/files'


export default function ConvertCSVDialog(props) {
    const dispatch = useAppDispatch()
    const { row } = props

    const [newFileName, setNewFileName] = React.useState(row.file_name.split(".")[0])
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleEdit = () => {
        const formData = { id: row.id, from_ext: 'json', to_ext: 'csv', output_file_name : newFileName}
        console.log(formData)
        dispatch(convertFilesAction(formData))
        setOpen(false)
    }

    return (
        <div>
            <Button
               variant="contained"
               size="medium"
                onClick={handleClickOpen}
                // sx={{ my: 1 }}
                sx={{ mx: 1 }}
            >
                Convert to CSV
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>File Name</DialogTitle>
                <DialogContent>
                <Box width="350px">
                    <DialogContentText>
                        Provide a new name for the CSV file
                    </DialogContentText>
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        // label="File Name"
                        defaultValue={newFileName}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">.csv</InputAdornment>,
                          }}
                        fullWidth
                        variant="standard"
                        onChange={e => setNewFileName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEdit}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
