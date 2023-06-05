import React from 'react'
import {
    Stack,
    Button,
    IconButton,
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react'

export default function MuiButton() {
    const [formats, setformats] = useState([])
    console.log({ formats })
    const handleFormatChange = (_event, updatedFormats) => {
        setformats(updatedFormats)
    }

    return (
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="text" href="https:google.com">
                        Text
                    </Button>
                    <Button variant="contained">COntained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>

                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="contained" color="error">
                        Error
                    </Button>
                    <Button variant="contained" color="info">
                        Info
                    </Button>
                    <Button variant="contained" color="warning">
                        Warning
                    </Button>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                </Stack>

                <Stack display="block" spacing={2} direction="row">
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </Stack>

                <Stack spacing={2} direction="row">
                    <Button
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        disableRipple
                        onClick={() => alert('Clicked!!!')}
                    >
                        Upload
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<CloudUploadIcon />}
                        disableElevation
                    >
                        Upload
                    </Button>
                    <IconButton aria-label="send" color="success" size="small">
                        <CloudUploadIcon />
                    </IconButton>
                    <IconButton aria-label="send" color="error" size="large">
                        <CloudUploadIcon />
                    </IconButton>
                </Stack>

                <Stack direction="row">
                    <ButtonGroup variant="contained">
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction="row">
                    <ButtonGroup
                        variant="outlined"
                        orientation="vertical"
                        size="small"
                        color="secondary"
                        aria-label="alignment button group"
                    >
                        <Button>Left</Button>
                        <Button
                            onClick={() => {
                                alert(' Center Clicked!!!')
                            }}
                        >
                            Center
                        </Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction="row">
                    <ToggleButtonGroup
                        aria-label="text formatting"
                        value={formats}
                        onChange={handleFormatChange}
                        size="small"
                        color="success"
                        orientation="vertical"
                        exclusive
                    >
                        <ToggleButton value="bold">
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic">
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value="underlined">
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </div>
    )
}
