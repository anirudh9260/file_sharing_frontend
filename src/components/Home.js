import React from 'react'

import MuiTypography from './MUItutorials/MuiTypography'
import MuiButton from './MUItutorials/MuiButton'
import MuiTextField from './MUItutorials/MuiTextField'
import MuiSelect from './MUItutorials/MuiSelect'
import SelectProject from './SelectProject'

import Container from '@mui/material/Container'

import EnhancedTableContainer from './EnhancedTableContainer'
const Home = () => {
    return (
        <>
            <Container maxWidth="xl">
                {/* <MuiTypography></MuiTypography>
                <MuiButton></MuiButton>
                <MuiTextField></MuiTextField>
                <MuiSelect></MuiSelect> */}

                <SelectProject></SelectProject>
                <EnhancedTableContainer></EnhancedTableContainer>
            </Container>
        </>
    )
}

export default Home
