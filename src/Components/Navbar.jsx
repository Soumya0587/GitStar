import React from 'react'
import {Box, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box 
    h="50px"
    display="flex" alignItems='center' justifyContent='space-around'
    bg="grey"
    position="sticky"
    top="0"
    left="0"
    zIndex="10"
    mb="10px"
    >
        <Link to="/"><Button>ALL</Button></Link>
        <Link to="/html"><Button>HTML</Button></Link>
        <Link to="/css"><Button>CSS</Button></Link>
        <Link to="javascript"><Button>JavaScript</Button></Link>
    </Box>
  )
}

export default Navbar