import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import {Box} from '@mui/material'
import { Alert } from '@mui/material'
export default function SnackbarNotification(props) {
    const { message, onClose, severity } = props

    return (
        <div>
          <Box sx={{ minWidth: 400  }}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={true}
                autoHideDuration={6000}
                onClose={props.onClose}
            >
                <Alert
                    onClose={props.onClose}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
            </Box>
        </div>
    )
}
