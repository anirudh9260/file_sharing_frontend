import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'
import {Box}  from '@mui/material'
import {useAppDispatch } from '../hooks/redux-hooks'
import { deleteProjectAction } from '../redux/actions/projects'

export default function DeleteProjectDialog(props) {

    const dispatch = useAppDispatch()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        dispatch(deleteProjectAction(props.projectId))
        setOpen(false)
    }

    return (
        <div>
            <Button variant="contained" size="large" onClick={handleClickOpen} sx={{my: 1}}> 
                Delete Project
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete Project</DialogTitle>
                <DialogContent> 
                  <Box width="300px">
                    <DialogContentText>
                        Are you Sure ?
                    </DialogContentText>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} color="error">OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

DeleteProjectDialog.propTypes = {
    projectId: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
}
