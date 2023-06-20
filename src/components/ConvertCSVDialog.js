import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { useAppDispatch } from '../hooks/redux-hooks'
import { convertFilesAction } from '../redux/actions/files'

export default function ConvertCSVDialog(props) {
    const dispatch = useAppDispatch()
    const { selectedProject, rows, selected } = props

    const index = rows.findIndex(x => x.id === selected[0]);

    const [newFileName, setNewFileName] = React.useState(rows[index].file_name.split(".")[0])
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const handleEdit = () => {
        for (const rowId of selected) {
            // console.log(rowId)
            const formData = { id: rowId, from_ext: 'json', to_ext: 'csv', project_id: selectedProject.projectId, output_file_name : newFileName}
            console.log(formData)
            dispatch(convertFilesAction(formData))
            setOpen(false)
        }
    };

    return (
        <div>
            <Button
                variant="contained"
                size="large"
                onClick={handleClickOpen}
                sx={{ my: 1 }}
            >
                Convert to CSV
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>File Name</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Provide a new name for the file
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="File Name"
                        defaultValue={newFileName + ".csv"}
                        fullWidth
                        variant="standard"
                        onChange={v => setNewFileName(v.target.value)}
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
