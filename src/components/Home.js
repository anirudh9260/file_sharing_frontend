import React from 'react'

import MuiTypography from './MUItutorials/MuiTypography'
import MuiButton from './MUItutorials/MuiButton'
import MuiTextField from './MUItutorials/MuiTextField'
import MuiSelect from './MUItutorials/MuiSelect'
import ProjectBar from './ProjectBar'

import Container from '@mui/material/Container'
import EnhancedTable from './EnhancedTable'
import EnhancedTableContainer from './EnhancedTableContainer'
import FileBar from './FileBar'

import { useState, useEffect } from 'react'

const Home = () => {
    const [selectedProject, setSelectedProject] = useState()

    return (
        <>
            <Container maxWidth="xl">
                {/* <MuiTypography></MuiTypography>
                <MuiButton></MuiButton>
                <MuiTextField></MuiTextField>
                <MuiSelect></MuiSelect> */}

                <ProjectBar
                    changeSelectedProject={setSelectedProject}
                ></ProjectBar>
                <FileBar project_name={selectedProject}></FileBar>
                {/* <EnhancedTable></EnhancedTable> */}
                <EnhancedTableContainer></EnhancedTableContainer>
            </Container>
        </>
    )
}

export default Home
