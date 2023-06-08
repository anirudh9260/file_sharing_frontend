import React from 'react'
import Files from "./FileList"
import Project from './SelectProject'
import MuiTypography from './MuiTypography'
import MuiButton from './MuiButton'
import MuiTextField from './MuiTextField'
import MuiSelect from './MuiSelect'
import SelectProject from './SelectProject'
import Heading from './Heading'
import Container from '@mui/material/Container';
import EnhancedTable from './EnhancedTable'
import EnhancedTableContainer from './EnhancedTableContainer'
const Home = () => {
    return (
        <>
        <Container maxWidth="xl">
            {/* <Heading></Heading> */}
            {/* <Project></Project> */}
            {/* <MuiTypography></MuiTypography> */}
            {/* <MuiButton></MuiButton> */}
            {/* <MuiTextField></MuiTextField> */}
            {/* <MuiSelect></MuiSelect> */}

            <SelectProject></SelectProject>
            <EnhancedTableContainer></EnhancedTableContainer>
            </Container>
        </>
    )
}

export default Home
