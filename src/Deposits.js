import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './Deposits.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
    return (
        <Box>
          <Typography variant="h5" gutterBottom>
            Buy/Sell
          </Typography>
          <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="buy" control={<Radio />} label="Buy" />
        <FormControlLabel value="sell" control={<Radio />} label="Sell" />
      </RadioGroup>
    </FormControl>
          <TextField
            label="Search Candidate"
            placeholder="Enter candidate name..."
            margin="normal"
          />
          <TextField
            label="Price"
            placeholder="Enter price..."
            type="number"
            margin="normal"
          />
          <TextField
            label="Percentage of Sales"
            placeholder="Enter percentage..."
            type="number"
            margin="normal"
          />
         <button type="submit" className='button'>Submit</button>
        </Box>
      );
    
}