import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import { Box } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'
import { useAppDispatch } from '../hooks/redux-hooks'
import { editProjectsAction } from '../redux/actions/projects'

export default function EditProjectDialog(props) {
    const dispatch = useAppDispatch()
    const [newProject, setNewProject] = React.useState(props.projectName)
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const handleEdit = () => {
        let newProjectValues = {
            projectName: newProject,
            projectId: props.projectId,
        }

        props.setSelectedProject(newProjectValues)
        dispatch(
            editProjectsAction(props.projectId, { project_name: newProject }),
        )
        setOpen(false)
    }

    return (
        <div>
            <Button
                variant="contained"
                size="large"
                onClick={handleClickOpen}
                sx={{ my: 1 }}
            >
                Edit Project
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Project</DialogTitle>
                <DialogContent><Box width="350px">
                    <DialogContentText>
                        Provide a new name for the project
                    </DialogContentText>
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Project Name"
                        defaultValue={props.projectName}
                        fullWidth
                        variant="standard"
                        onChange={v => setNewProject(v.target.value)}
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

EditProjectDialog.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectId: PropTypes.number.isRequired,
}

EditProjectDialog.defaultProp = {
    projectName: '',
    projectId: '',
}
