import * as React from 'react'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteFilesAction } from '../redux/actions/files'
import { useAppDispatch } from '../hooks/redux-hooks'


export default function DeleteFileConfirmDialog(props) {
    const dispatch = useAppDispatch()

    const { row } = props

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = () => {
        dispatch(deleteFilesAction(row))
        setOpen(false)
    }
    
    return (
        <>
            <Button
                variant="contained"
                color="error"
                sx={{ mx: 1 }}
                onClick={handleClickOpen}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete {row.file_name}</DialogTitle>
                <DialogContent>
                <Box width="300px">
                    <DialogContentText>
                        Are you sure ?
                    </DialogContentText>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="error" onClick={handleDelete}>OK</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
