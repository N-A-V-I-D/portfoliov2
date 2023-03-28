import React from 'react';
import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/navbar.css'
import {links} from '/Users/navid/Documents/NavidInc/portfoliov2/src/pages/navbarlinks.js'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import Button from "@material-ui/core/Button";
import Button from "@mui/material/Button"

function Sidebar() {
  return <div id='mySidebar' className='Sidebar'>
    <div id='links'>
    {links.map((link) => {
      return (
        <a id='link2' href={link.url} key={link.id}>{link.text}</a>
      )
    })}

    <Button id='profiles'
        variant="link"
        color=""
        startIcon={< LinkedInIcon style={{ fontSize: 40 }}/>}
        href="https://www.linkedin.com/in/navid-c/"
        target="_blank" rel="noopener noreferrer"
      />
      <Button id='profiles'
        variant="link"
        color=""
        startIcon={< GitHubIcon style={{ fontSize: 40 }}/>}
        href="https://github.com/N-A-V-I-D"
        target="_blank" rel="noopener noreferrer"
      />
    </div>
    
    
  </div>
}

export default Sidebar;