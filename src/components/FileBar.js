import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import UploadFile from './UploadFile'
import PropTypes from 'prop-types'

export default function FileBar(props) {

    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ flex: '1 1 100%' }} variant="h5">
                {props.project_name && props.project_name + ' files'}
            </Typography>
            {props.project_name && <UploadFile></UploadFile>}
        </Stack>
    )
}

FileBar.propTypes = {
    project_name: PropTypes.string,
}

FileBar.defaultProp = {
    project_name: '',
}
