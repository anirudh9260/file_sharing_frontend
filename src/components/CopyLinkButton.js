import React from 'react'
import { Box, Button } from '@mui/material'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { useAppDispatch } from '../hooks/redux-hooks'
import { copyLinkAction } from '../redux/actions/files'


export default function CopyLinkButton(props) {
    const { row } = props

    const dispatch = useAppDispatch()
    const link =
        `${process.env.REACT_APP_API_URL}` +
        '/files/' +
        row.uid +
        '/' +
        row.file_name

    const handleCopyLink = () => {
        dispatch(copyLinkAction(link))
    }

    return (
 
            
            <Button
                variant="contained"
                color="success"
                onClick={handleCopyLink}
                startIcon={<ContentCopyIcon />}
                sx={{ mx: 1 }}
            >
                Copy Link
            </Button>
    )
}