import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';


//Αρχική Σελίδα / Δίκτυο / Αγγελίες / Συζητήσεις / Ειδοποιήσεις / Προσωπικά Στοιχεία / Ρυθμίσεις

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'relative', width: 1700,top: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Αρχική Σελίδα" icon={<HomeIcon />} />
        <BottomNavigationAction label="Δίκτυο" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Jobs" icon={<WorkIcon />} />
        <BottomNavigationAction label="Συζητήσεις" icon={<ArticleIcon />} />
        <BottomNavigationAction label="Ειδοποιήσεις" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="Προσωπικά Στοιχεία" icon={<AccountBoxIcon />} />
        <BottomNavigationAction label="Ρυθμίσεις" icon={<SettingsIcon />} />
      </BottomNavigation>
      <Box sx={{ position: 'relative',top: -45, height: '40px', width: '1px', backgroundColor: 'grey', mx: 180 }} />
    </Box>
  );
}
