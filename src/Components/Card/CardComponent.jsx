import React, { useState } from "react";

import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import ButtonComponent from "../Button/ButtonComponent";

const CardComponent = ({ userinfo }) => {
  const [load, setLoad] = useState(false);
  const [disable, setdisable] = useState(false);
  const { name, image } = userinfo;
  return (
    <Box width="300px" height="350px">
      <Card>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container direction="column">
            <Grid item>
              <ButtonComponent
                label="Confirm"
                variant="contained"
                size="large"
                loading={load}
                handleClick={() => setLoad(!load)}
              />
            </Grid>
            <Grid item>
              <ButtonComponent
                label="Delete"
                variant="outlined"
                size="large"
                disabled={disable}
                handleClick={() => setdisable(!disable)}
              />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardComponent;
