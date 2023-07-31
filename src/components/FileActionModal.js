import React from 'react'
import { Button, Box, Stack } from '@mui/material'
import { Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import CopyLinkButton from './CopyLinkButton';
import DeleteFileConfirmDialog from './DeleteFileConfirmDialog'
import ConvertTable from './ConvertTable';
import { useAppDispatch } from '../hooks/redux-hooks'
import { fileActionModalStatus } from '../redux/actions/files'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // height: 500,
    // width: 600,
    fullWidth: true,
    fullHeight: true,
    // maxHeight: "md",
    // maxWidth: "md",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function FileActionModal(props) {
    const dispatch = useAppDispatch()
    const { row } = props
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
        dispatch(fileActionModalStatus(true))
    }

    const handleClose = () => {
        setOpen(false)
        dispatch(fileActionModalStatus(false))
    }
    
    return (
        <div>
            <Typography
                variant="p"
                fontFamily="roboto"
                color="blue"
                fontWeight={500}
                onClick={handleClickOpen}
            >
                {row.file_name}
            </Typography>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                    spacing={4}
                    width={400}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={14}
                    >
                        <Typography variant="h5">{row.file_name}</Typography>
                        <CopyLinkButton
                            row={row}
                        ></CopyLinkButton>
                    </Stack>
                    <ConvertTable row={row} open={open}></ConvertTable>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={4}
                    >
                    <Button onClick={handleClose} sx={{ mx: 3 }}>
                        Close
                    </Button>
                    <DeleteFileConfirmDialog
                        row={row}
                    ></DeleteFileConfirmDialog>
                    </Stack>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default FileActionModal