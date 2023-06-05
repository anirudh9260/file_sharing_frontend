import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'


export default function MuiSelect() {

    const [country, setcountry] = useState('')
    console.log(country)
    const handleChange = (event) => {
        setcountry(event.target.value)
    }
  return (
    <Box width="250px">
        <TextField label="Select country" select value={country} onChange={handleChange} fullWidth>
            <MenuItem value="in">India</MenuItem>
            <MenuItem value="us">USA</MenuItem>
            <MenuItem value="au">Australia</MenuItem>
            
        </TextField>
    </Box>
  )
}
