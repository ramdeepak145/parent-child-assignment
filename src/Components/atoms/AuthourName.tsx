import { Typography } from '@mui/material';
import React from 'react';

type AuthorNameProps={
 authName:string   
}

export const AuthourName = (props:AuthorNameProps) => {
  return (<>
        <Typography
         variant='body1'
         sx={{
             fontStyle: "normal",
             fontSize: "16px",
             fontWeight: 500,
             margin: " 16px 0px 0px 16px",
             color:"#6D787E",
         }}
         >{props.authName}
         </Typography>
           
  </>);
};
