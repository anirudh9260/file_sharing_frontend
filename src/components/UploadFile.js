import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { useState } from 'react'

function UploadFile(props) {
    const [file, setFile] = useState()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleFileChange = e => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const handleUploadClick = () => {
        if (!file) {
            return
        }

        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: file,
            // 👇 Set headers manually for single file upload
            headers: {
                'content-type': file.type,
                'content-length': `${file.size}`, // 👈 Headers need to be a string
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return (
        <div>
            <Button variant="contained" size="small" onClick={handleClickOpen}>
                Upload File
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Upload File</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        
                        {file && `${file.name} - ${file.type}`}
                        <span><input type="file" onChange={handleFileChange} /></span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{ mx: 1 }}
                        startIcon={<FileUploadIcon />}
                        onClick={handleUploadClick}
                    >
                        Upload
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UploadFile

UploadFile.propTypes = {
    project_name: PropTypes.string.isRequired,
}

UploadFile.defaultProp = {
    project_name: ''
}
