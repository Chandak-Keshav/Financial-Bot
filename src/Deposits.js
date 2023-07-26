import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './Deposits.css';
function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
    return (
        <Box>
          <Typography variant="h5" gutterBottom>
            Buy
          </Typography>
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