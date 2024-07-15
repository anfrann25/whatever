// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// export default function SignInUp() {
//   return (
//     <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
//       <Box sx={{ position: 'absolute', right: 900, m: 2,top: 100, display: 'flex', gap: 1 }}>
//         <Button variant="text" color="primary">
//           Join Now
//         </Button>
//         <Button variant="outlined" color="primary">
//           Sign in
//         </Button>
//       </Box>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 20px',
  fontSize: '16px',
  color: 'white',
  '&.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '&.MuiButton-containedSecondary': {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function SignInUp() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '300px', p: 3, boxShadow: 3, borderRadius: 2 }}>
        <TextField 
          fullWidth 
          label="Email" 
          variant="outlined" 
          margin="normal" 
        />
        <TextField 
          fullWidth 
          label="Password" 
          variant="outlined" 
          type="password" 
          margin="normal" 
        />
        <StyledButton 
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </StyledButton>
        <StyledButton 
          variant="contained" 
          color= "primary" 
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign Up
        </StyledButton>
      </Box>
    </Box>
  );
}

