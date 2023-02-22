import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styled, {keyframes} from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import Appbar from '../Navigation/Appbar';
import aboutImg from '../About/about.png';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {CardContent} from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

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

export default function About() {
  const classes = useStyles();
const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  
  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);
  
  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
 <React.Fragment>
<Appbar />


    




<div className={classes.root}>
        <Container maxWidth="md">
          <Grid container spacing={4} className={classes.grid}>
           
            <Grid item xs={12} sm={12} md={6}>
              <Grow in timeout={1000}>
                <div>
                 <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input type="text" onChange={
            (e) => {setTemp(e.target.value)}}
            placeholder="Enter text to encode" />
          <button className="button" 
            onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="200" max="600"
           value={size} onChange={(e) => 
           {setSize(e.target.value)}} />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
                </div>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </div>
</React.Fragment>
  );
}
