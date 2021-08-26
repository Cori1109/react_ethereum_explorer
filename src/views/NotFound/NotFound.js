import React from 'react';
import useStyles from './style';
import { Grid, Typography } from '@material-ui/core';


const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              404: Page Not Found
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
