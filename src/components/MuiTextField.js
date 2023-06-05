import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'

export default function MuiTextField() {
    const [value, setvalue] = useState('')

    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="name" variant="outlined"></TextField>
                <TextField label="name" variant="filled"></TextField>
                <TextField label="name" variant="standard"></TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                    label="Small secondary"
                    size="small"
                    color="secondary"
                ></TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                    label="Form Input"
                    required
                    value={value}
                    onChange={e => setvalue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' : "Do not share your password"}
                ></TextField>
                <TextField
                    label="Form Input"
                    helperText="DOnt not share pass"
                ></TextField>
                <TextField
                    label="Password"
                    type="password"
                    helperText="Do not share your password with anyone"
                ></TextField>
                <TextField
                    label="Password"
                    type="password"
                    helperText="Do not share your password with anyone"
                    disabled
                ></TextField>
                <TextField
                    label="ReadOnly"
                    InputProps={{ readOnly: true }}
                ></TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField
                    label="Amount"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                        ),
                    }}
                ></TextField>
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">Kg</InputAdornment>
                        ),
                    }}
                ></TextField>
            </Stack>
        </Stack>
    )
}
