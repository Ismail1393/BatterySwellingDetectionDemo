import './App.css';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Battery20Icon from '@mui/icons-material/Battery20';
import Battery30Icon from '@mui/icons-material/Battery30';
import Battery50Icon from '@mui/icons-material/Battery50';
import Battery60Icon from '@mui/icons-material/Battery60';
import Battery80Icon from '@mui/icons-material/Battery80';
import Battery90Icon from '@mui/icons-material/Battery90';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

function getBatteryIconColor(value) {
  if (value <= 20) return 'red';
  if (value <= 50) return 'yellow';
  return 'green';
}

function App() {

  const [value, setValue] = React.useState(30);
  const [value1, setValue1] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSliderChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const impedancechange = value1 / value ;

  return (
    <div className="main-container">
        <div className="left-container">
          <div className="title-container">
            <div className="title">Battery</div>
            <div className="subtitle">Swelling Prevention</div>
            <div className="name">By: Ismail Mustaali</div>
          </div>
          <div className="slider-container">
          <Box sx={{ width: 300 }}>
            <div className='impedance-initial'>
              Initial Impedance: {value} 
            </div>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              defaultValue={10}
              valueLabelDisplay="auto"
              shiftStep={30}
              step={10}
              marks
              min={10}
              max={100}
            />

            <div className='impedance-current'>
              Curent Impedance: {value1}
            </div>
            <Slider
              value1={typeof value1 === 'number' ? value1 : 0} 
              onChange={handleSliderChange1}
              valueLabelDisplay='auto'
              step={10} 
              marks 
              min={10} 
              max={100} />
              <div className='impedance-change'>
              Impedance Change: {impedancechange.toFixed(2)}x
            </div>
          </Box>
          </div>
        </div>
        <div className="right-container">
          <div className='battery-icon-container'>
            {impedancechange >= 9 && <Battery20Icon sx={{ color: 'red', fontSize: 600 }} /> }
            {impedancechange >= 8 && impedancechange < 9 && <Battery30Icon sx={{ color: 'red', fontSize: 600 }} />}
            {impedancechange >= 7 && impedancechange < 8 && <Battery50Icon sx={{ color: 'yellow', fontSize: 600 }} />}
            {impedancechange >= 6 && impedancechange < 7 && <Battery60Icon sx={{ color: 'yellow', fontSize: 600 }} />}
            {impedancechange >= 4 && impedancechange < 6 && <Battery80Icon sx={{ color: 'limegreen', fontSize: 600 }} />}
            {impedancechange > 1 && impedancechange < 4 && <Battery90Icon sx={{ color: 'limegreen', fontSize: 600 }} />}
            {impedancechange <= 1 && <BatteryFullIcon sx={{ color: 'limegreen', fontSize: 600 }} />}
          </div>
          <div className="battery-title">Full Charge Capacity</div>
        </div>
    </div>
  );
}

export default App;