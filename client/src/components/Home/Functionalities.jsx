import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styled, {keyframes} from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      'linear-gradient(to top, #773285 0%, #cfa321 100%, #a87a5b  100%)',
    paddingTop: '85px',
    paddingBottom: '70px',
  },
  greyText: {
    color: 'black',
  },
  body: {
    align: 'center',
    color: 'black',
    lineHeight: '1.3',
    paddingTop: '5px',
  },
  icon: {
    width: 'auto',
    height: '80px',
    marginBottom: '24px',
  },
}));

const float = keyframes`
    from { transform: translate(0,  -6px); }
    65%  { transform: translate(-3px, 6px); }
    to   { transform: translate(0, -6px); }
`;

const Float = styled.div`
  animation: ${float} 4.5s linear infinite;
`;

export default function Functionalities() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <br />
        <br />
        <br />
        <br />
        <Grid container justify="center" alignItems="center" align="center">
          <Grid item xs={12} sm={12}>
            <Typography variant="h2">How can Ouroad help you...</Typography>
            <Typography variant="h4">Access and Identification Solutions of the Future.</Typography>
            <br />
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid item xs={10} sm={8}>
              
              <Typography variant="h5" align="center">
                Documentation Solutions:
              </Typography>
              <Typography variant="body1" className={classes.body}>
                A hub for document consolidation where you store important document for commuting purposes.  
              </Typography>
            </Grid>
            <br />
            <br />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid item xs={10} sm={8}>
              
              <Typography variant="h5" align="center">
                Coverage Solutions:
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Insurance document is accessible anywhere, anytime, so that you can commute and live in peace.   
              </Typography>
            </Grid>
            <br />
            <br />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid item xs={10} sm={8}>
              
              <Typography variant="h5" align="center">
                Service Provider Solutions:
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Link your profile to your service provider of choice for contacts, document renewal, settlement or claims.  
              </Typography>
            </Grid>
            <br />
            <br />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid item xs={10} sm={8}>
              
              <Typography variant="h5" align="center">
                Access Passes Solutions
              </Typography>
              <Typography variant="body1" className={classes.body}>
                The document are logically structured, ready to be shown upon request by staff, authority or security.  
              </Typography>
            </Grid>
            <br />
            <br />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
