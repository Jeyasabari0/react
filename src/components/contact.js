import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact(){
    return(
        <div>
            <h1>Login</h1>
           <Box>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
           </Box>
           <Box>
            <TextField id="outlined-basic" label="Password" variant="outlined" />
           </Box>
        </div>
    )
}
export default Contact