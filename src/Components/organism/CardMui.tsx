import Card from "@mui/material/Card";
import { CardMedia, Grid, Typography } from "@mui/material";
import More from "../atoms/More";
import customStyle from "../theme";
import {BookTitile} from "../atoms/BookTitile";
import {AuthourName} from "../atoms/AuthourName";
import ReadTime from "../molecules/ReadTime";
import { ClassNames } from "@emotion/react";

type Mui={
    details:{
        image:string,
        name:string,
        author:string,
        time:string
    }[];
}

const CardMui = (props: Mui) => {
    const classes = customStyle();
    const bookCards = props.details.map((e) => (
      <Grid item>
        <Card className={classes.cardStyle}>
          <CardMedia
            component="img"
            height="292px"
            width="294.1px"
            image={e.image}
            alt="Book"
          />
          <BookTitile bookName={e.name} />
          <AuthourName authName={e.author} />
          <ReadTime time={e.time} />
          <More />
          <Typography className={classes.examplefile}
          />
        </Card>
      </Grid>
    ));
  
    return <Grid justifyContent="center" width="1000px" columnSpacing='20px' container>{bookCards}</Grid>;
  };
  
  export default CardMui;