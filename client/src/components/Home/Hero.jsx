import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import heroImage from './heroImage.png';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      'linear-gradient(to top, #773285 0%, #cfa321 100%, #a87a5b  100%)',
    paddingTop: '85px',
    paddingBottom: '70px',
  },
  body: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '',
  },
  image: {
    maxWidth: '510px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '410px',
    },
  },
  bigHeader: {
    fontSize: '45px',
    fontWeight: '600',
    color: '#fff',
  },
  loginButton: {
    color: '#fff',
    backgroundColor: '#1C1B29',
    '&:hover': {
      backgroundColor: '#292841',
    },
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container justify="center" direction="row" alignItems="center">
          <Grow in timeout={1100}>
            <Grid item xs={12} md={6}>
              <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
              >
                <Typography>
                  <br />
                  <br />
                  <br />
                </Typography>
                <Grid item xs={8}>
                  <Typography
                    variant="h1"
                    align="center"
                    className={classes.bigHeader}
                  >
                   The path to digital living starts with solution provision
                  </Typography>
                </Grid>

                <Grid item xs={8}>
                  <Typography className={classes.body} variant="h5">
                    <br />
                     Ouroad aims to be the Digital License Assistant, Wallet of all Access Passes and ultimately Document Renewal Space of choice.   
                    <br />
                    <br />
                  </Typography>
                  <Grid container direction="row" justify="center" spacing={3}>
                    <Grid item xs={6}>
                      <Grid container justify="center">
                        <Button
                          component={Link}
                          to="/sign-up"
                          variant="outlined"
                          size="large"
                          fullWidth
                          style={{color: '#fff', borderColor: '#fff'}}
                        >
                          Get started
                        </Button>
                      </Grid>
                    </Grid>

                    <Grid item xs={6}>
                      <Grid container justify="center">
                        <Button
                          component={Link}
                          to="/sign-in"
                          variant="contained"
                          size="large"
                          fullWidth
                          className={classes.loginButton}
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grow>

          <Grid item xs={12} md={6}>
            <Typography variant="h1">
              <br />
            </Typography>
            <Grow in timeout={1300}>
              <Grid container justify="center" alignItems="flex-end">
                <img src={heroImage} className={classes.image} alt="heroImg" />
              </Grid>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
