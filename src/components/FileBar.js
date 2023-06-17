import { Stack } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import Typography from '@mui/material/Typography'
import UploadFile from './UploadFile'
import PropTypes from 'prop-types'

import FormUploadButton from './FormFields'

export default function FileBar(props) {
    // Shashank code

    // const benchmarkProductivityFile = useRef()
    // const handleChange = event => {
    //     console.log(event)
    //     // event.preventDefault()
    //     const fileObj = event.target.files && event.target.files[0]
    //     if (fileObj) {
    //         const context = {
    //             file: fileObj,
    //         }
    //         console.log(fileObj)
    //         dispatch(uploadProductivityFile(context, warehouseState.planning_warehouse?.id, fileObj.name))
    //         dispatch(getBenchmarkProductivityData(warehouseState.planning_warehouse?.id))
    //     }
    // }

    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ flex: '1 1 100%' }} variant="h5"> 
                {props.Project.projectName.length > 0 &&
                    props.Project.projectName + ' files'}
            </Typography>
            { props.Project.projectName && (
                <UploadFile Project={props.Project}></UploadFile>
            )}

            {/* <FormUploadButton
                id="benchmark-productivity-upload-btn"
                label="CHOOSE FILE"
                fileRef={benchmarkProductivityFile}
                loader={false}
                onChange={handleChange}
                disabled={false}
            /> */}
        </Stack>
    )
}

FileBar.propTypes = {
    Project: PropTypes.object,
}
