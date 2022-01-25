import { Typography } from '@mui/material';
import React from 'react';

type BookTitleProps={
    bookName:string
}

export const BookTitile = (props:BookTitleProps) => {
  return (<>
        <Typography
        variant='subtitle1'
        sx={{
            fontStyle: "normal",
            fontSize: "18px",
            fontWeight: 700,
            marginLeft:"16px",
            marginTop:"23px",
        }}
        >
            {props.bookName}
        </Typography>
  </>);
};
