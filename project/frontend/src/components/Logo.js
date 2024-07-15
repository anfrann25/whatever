import * as React from 'react';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blue } from '@mui/material/colors';

function LogoMake(props) {
    return (
      <LinkedInIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </LinkedInIcon>
    );
}

export default function LogoReturn(){
    return(
        <Box sx={{ position: 'absolute', top: -12, m: 30 }}>
            <LogoMake sx={{ color: blue[800], width: 100, height: 50}} />
        </Box>
    );
}
