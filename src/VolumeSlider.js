import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Typography } from '@mui/material';



export default function ContinuousSlider(props) {
  const [value, setValue] = React.useState(100);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.volumeSetter(newValue / 100)
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', marginTop: 3 }}>
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} color="secondary" />
        <VolumeUp />
      </Stack>
    </Box>
  );
}