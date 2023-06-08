import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'

export default function AddProjectDialog() {
    const dispatch = useAppDispatch()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAddNewProject = () => {
        console.log('ABCDE')
        // dispatch(getFiles())
    }

    return (
        <div>
            <Button variant="contained" size="small" onClick={handleClickOpen}>
                Add Project
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Provide a new name for the project
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Project Name"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddNewProject}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
