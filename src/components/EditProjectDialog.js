import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'

export default function EditProjectDialog(props) {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="contained" size="small" onClick={handleClickOpen}>
                Edit Project
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
                        defaultValue={props.project_name}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

EditProjectDialog.propTypes = {
    project_name: PropTypes.string.isRequired,
}

EditProjectDialog.defaultProp = {
    project_name: '',
}
