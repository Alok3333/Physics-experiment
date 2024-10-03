import React, { useState } from "react";
import global1 from "./global1";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

// import massSpectroImg from "../assets/Thermo_Scientific_1.jpg";
// import Benzeneb1 from "../assets/Benzene__2_-removebg-preview.png";
// import Benzeneb1Tilled from "../assets/BenzeneTilled-removebg-preview.png";
// import SpectrometerFill22 from "../assets/tube_fill.gif"
// import SpectrometerFill2 from "../assets/tube_fill_after-removebg-preview.png";

const men =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-3-3353-Avatar_S.png";
const observeImg =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-3-653-observe_rectangle.png";
const Benzeneb1 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-3-3254-Benzene__2_-removebg-preview.png";
const Spectrometer2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-1-2350-b2-removebg-preview.png";
const SpectrometerFill2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-3-4128-tube_fill_after-removebg-preview.png";
const Benzeneb1Tilled =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-3-3513-BenzeneTilled-removebg-preview.png";
const SpectrometerFill22 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-3-3917-tube_fill.gif";
const massSpectroImg =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-3-3232-Thermo_Scientific_1.jpg";

const SpectrometerDefault = Spectrometer2;

// Create a username and register no
const username = global1.name;
const registerNo = global1.regno;

const MassSpectrocopy = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [apparatus, setApparatus] = useState({
    sampleBeaker: false,
    solventBeaker: false,
    mortar: false,
    // desiccator: false,
    observe: false,
  });
  const { sampleBeaker, mortar, desiccator, observe } = apparatus;

  const [sampleBeakerRotation, setSampleBeakerRotation] = useState(0);
  const [currentBenzeneb1, setCurrentBenzeneb1] = useState(Benzeneb1);
  const [currentSpectrometer2, setCurrentSpectrometer2] =
    useState(SpectrometerDefault);
  const [isSampleBeakerClicked, setIsSampleBeakerClicked] = useState(false);
  const [animateMortar, setAnimateMortar] = useState(false);
  const [showMortarImages, setShowMortarImages] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  // Track if the actions have been completed
  const [sampleBeakerUsed, setSampleBeakerUsed] = useState(false);
  const [isMortarClicked, setIsMortarClicked] = useState(false);

  // State for final image
  const [getFinalImg, setGetFinalImg] = useState(false);

  const handleSampleBeakerClick = () => {
    if (!sampleBeakerUsed) {
      setSampleBeakerUsed(true);
      setSampleBeakerRotation(90);
      setCurrentBenzeneb1(Benzeneb1Tilled);
      setCurrentSpectrometer2(SpectrometerFill22);
      setIsSampleBeakerClicked(true);

      setTimeout(() => {
        setSampleBeakerRotation(0);
        setCurrentBenzeneb1(Benzeneb1);
        setCurrentSpectrometer2(SpectrometerDefault);
        setIsSampleBeakerClicked(false);
        setGetFinalImg(true);
      }, 2000);

      setScore((prev) => Math.min(prev + 30, 100));
    } else {
      alert("Don't touch again.");
    }
  };

  const handleMortarClick = () => {
    if (!getFinalImg) return;
    setAnimateMortar(true);
    setIsMortarClicked(true);
    setScore((prev) => Math.min(prev + 50, 100));
    setTimeout(() => {
      setShowMortarImages(false);
    }, 2000);
  };

  const handleNextBtn = () => {
    let randomNumber = Math.floor(Math.random() * 20);
    setScore(score + randomNumber);
    setLevel((prev) => prev + 1);
    if (score > 75) {
      setIsFinished(true);
    }
  };

  return (
    <Box p="40px 0px">
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "20px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Username: {username}
          <br />
          Register no: {registerNo}
        </Typography>
        {level > 2 ? (
          <Button variant="contained" onClick={() => window.print()}>
            Print result
          </Button>
        ) : (
          <Typography
            variant="h5"
            fontWeight="bold"
            bgcolor="#B0DAFF"
            color="#021526"
            padding="8px 14px"
            border="none"
            borderRadius="5px"
          >
            Score: {score}
          </Typography>
        )}
      </Container>

      {level === 0 && (
        <Container
          sx={{ border: "5px solid green", p: "10px 0px", borderRadius: "5px" }}
        >
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Mass Spectrometer
          </Typography>
          <Box>
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight="bold"
              mt="30px"
            >
              Task Instructions
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="justify"
              bgcolor="lightblue"
              fontSize="20px"
              fontWeight="300"
              width="80%"
              mx="auto"
              p="20px"
            >
              {/* Theory content here */}
              <ol style={{ marginLeft: "20px" }}>
                <li>
                  Click on the Sample option in the Apparatus Menu to introduce
                  it into the workspace.
                </li>
                <li>
                  Click on the Tube option in the Apparatus Menu to introduce it
                  into the workspace.
                </li>
                <li>
                  Click on the Mass Spectrometer option in the Apparatus Menu to
                  introduce it into the workspace.
                </li>
                <li>
                  Click on the Sample beaker to transfer some amount of the
                  sample into the Tube.
                </li>
                <li>
                  Click on the Tube to place it into the Mass Spectrometer.
                </li>
                <li>
                  Click on Observe button to observe what is happening inside
                  the Mass Spectrometer and choose video speed according to your
                  own liking.
                </li>
                <li>
                  <b>Observations:</b>
                </li>
                <li>
                  Now observe the image of Mass Spectromter. The sample is
                  introduced into the vaporisation chamber which is instantly
                  vapourised due to high vacuum and heat. Positively charged
                  radical ions are formed by bombardment of beam of high energy
                  electrons. The positively charged radical ions are accelerated
                  by perforated negative electrodes. The ions are sorted and
                  separated by the magnetic field according to their mass/charge
                  ratio.
                </li>
              </ol>
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              my: "30px",
            }}
            onClick={() => setLevel((prev) => prev + 1)}
          >
            Click to start
          </Button>
        </Container>
      )}

      {level === 1 && (
        <Container>
          <Typography
            variant="h6"
            marginBottom="10px"
            bgcolor="#FFFF00"
            textAlign="center"
            borderRadius="5px"
          >
            Level - {level}
          </Typography>
          <Box sx={{ display: "flex", margin: "40px 0px" }}>
            <Box sx={{ width: "20%" }}>
              <Box>
                <Typography variant="h6">Apparatus Menu</Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() =>
                        setApparatus((prev) => ({
                          ...prev,
                          sampleBeaker: true,
                        }))
                      }
                    >
                      <ListItemText primary="Sample" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() =>
                        setApparatus((prev) => ({ ...prev, mortar: true }))
                      }
                    >
                      <ListItemText primary="Tube" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() =>
                        setApparatus((prev) => ({ ...prev, desiccator: true }))
                      }
                    >
                      <ListItemText primary="Mass Spectrometer" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Box>
                  <img
                    src={men}
                    alt="..."
                    style={{
                      width: "215px",
                      height: "300px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                height: "500px",
                padding: "20px",
                border: "2px solid green",
                display: "flex",
              }}
            >
              <Grid container>
                <Grid item xs={4}>
                  <Grid container>
                    <Grid item xs={12}>
                      {sampleBeaker && (
                        <>
                          <img
                            src={currentBenzeneb1}
                            alt="sampleBeaker"
                            height={"200px"}
                            onClick={handleSampleBeakerClick}
                            style={{
                              transform: `rotate(${sampleBeakerRotation}deg)`,
                              transition: "transform 0.5s",
                              position: "relative",
                              cursor: "pointer",
                            }}
                          />
                          <Typography textAlign="center" width="266px">
                            Benzene
                          </Typography>
                        </>
                      )}
                    </Grid>
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {getFinalImg && showMortarImages ? (
                        <img
                          src={SpectrometerFill2}
                          alt="mortar"
                          onClick={handleMortarClick}
                          style={{
                            animation: animateMortar
                              ? "moveRight 2s forwards"
                              : "none",
                            cursor: "pointer",
                            transformOrigin: "center",
                            height: "225px",
                          }}
                        />
                      ) : (
                        mortar &&
                        showMortarImages && (
                          <img
                            src={currentSpectrometer2}
                            alt="mortar"
                            style={{ height: "225px" }}
                          />
                        )
                      )}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={8}>
                  {desiccator && (
                    <img
                      src={massSpectroImg}
                      alt="massSpectroImg"
                      style={{
                        width: "100%",
                        height: "450px",
                        objectFit: "cover",
                        cursor: "not-allowed",
                        marginTop: "0px",
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>

          <style>
            {`
              @keyframes moveRight {
                0% { 
                  transform: translateX(0) scale(1); 
                  opacity: 1;  
                  margin-bottom: 12%; 
                  position: relative; 
                  bottom: 0; 
                }
                99% { 
                  opacity: 1;  
                  margin-bottom: 12%; 
                  position: relative; 
                  bottom: 115px; 
                }
                100% { 
                  transform: translateX(300px) scale(0.2); 
                  opacity: 0; 
                  position: relative; 
                  bottom: 115px; 
                }
              }
            `}
          </style>

          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              my: "30px",
            }}
            onClick={() => setLevel((prev) => prev + 1)}
          >
            Next
          </Button>
        </Container>
      )}

      {level === 2 && (
        <Container>
          <Typography
            variant="h6"
            marginBottom="10px"
            bgcolor="#FFFF00"
            textAlign="center"
            borderRadius="5px"
          >
            Level - {level}
          </Typography>
          <Box sx={{ display: "flex", margin: "40px 0px" }}>
            <Box sx={{ width: "20%" }}>
              <Box>
                <Typography variant="h6">Control Menu</Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() =>
                        setApparatus((prev) => ({ ...prev, observe: true }))
                      }
                    >
                      Observe
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                height: "500px",
                padding: "20px",
                border: "2px solid green",
              }}
            >
              <Grid container sx={{ display: "grid", placeItems: "center" }}>
                <Grid item>
                  {observe && (
                    <img
                      src={observeImg}
                      alt="observeImg"
                      style={{
                        width: "100%",
                        height: "450px",
                        cursor: "not-allowed",
                        marginTop: "0px",
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              my: "30px",
            }}
            onClick={handleNextBtn}
          >
            Next
          </Button>
        </Container>
      )}

      {level > 2 && (
        <Container
          sx={{
            width: "100%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            mb={"30px"}
          >
            Mass Spectrometer
          </Typography>
          <Box
            sx={{
              width: "400px",
              height: "200px",
              bgcolor: isFinished ? "lightblue" : "#FF0000",
              color: !isFinished && "#FFFFFF",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Box>
              <Typography variant="h5">
                {isFinished ? `Well Done ${username} 🎉` : `${username} 😕`}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: "2rem" }}>
                Your total score is <br />
                {score} / 100
              </Typography>
              {!isFinished && (
                <Typography variant="subtitle1" sx={{ fontSize: "1rem" }}>
                  You haven't completed the task properly
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                my: "30px",
              }}
              onClick={() => window.location.reload()}
            >
              Restart
            </Button>
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default MassSpectrocopy;
