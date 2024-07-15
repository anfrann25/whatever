import './App.css';
import Logo from './components/Logo';
import SignInUp from './components/SingInUp';
import Box from '@mui/material/Box';




function App() {
  return (
    <div className="App">
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Logo/>
          <SignInUp />
      </Box>
    </div>
  );
}

export default App;
