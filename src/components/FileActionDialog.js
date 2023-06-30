import React from 'react'
import { Button, Box } from '@mui/material'
import { Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useAppDispatch } from '../hooks/redux-hooks'
import ConvertCSVDialog from './ConvertCSVDialog'
import ConvertJSONDialog from './ConvertJSONDialog'

function FileActionDialog(props) {
    const { row } = props
    console.log("row:", row)

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // switch row.type
    
    const conversion = (row.type === ".csv") ? (
        <ConvertCSVDialog row ={row}></ConvertCSVDialog>
    ) :
    ( <ConvertCSVDialog row ={row}></ConvertCSVDialog>)
    

    return (
        <div>
            <Typography
                variant="p"
                align="center"
                fontFamily="roboto"
                onClick={handleClickOpen}
                sx={{ my: 2, flex: '1' }}
            >
                {row.file_name}
            </Typography>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>File Actions</DialogTitle>
                <DialogContent>
                    <Box width="300px">
                        <DialogContentText>Please select file action to perform</DialogContentText>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {conversion}
                    <Button color="error">Delete</Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FileActionDialog



{/* { rows.length > 0  && selected.length > 0 &&
                    (<ConvertJSONDialog
                        selectedProject={selectedProject}
                        rows={rows}
                        selected={selected}
                    ></ConvertJSONDialog> )}
                    { rows.length > 0  && selected.length > 0 &&
                    (<ConvertCSVDialog
                        selectedProject={selectedProject}
                        rows={rows}
                        selected={selected}
                    ></ConvertCSVDialog> )} */}