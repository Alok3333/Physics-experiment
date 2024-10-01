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

const Benzeneb1 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-1-2757-Benzene-removebg-preview.png";
const Spectrometer2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-1-2350-b2-removebg-preview.png";
const SpectrometerFill2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-1-2717-Benzene_fill-removebg-preview.png";
const Benzeneb1Tilled =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-1-2644-Benzene__1_-removebg-preview.png";
const SpectrometerFill22 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-1-2933-Benzene.gif";
const microwave =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-1-1210-NMRSpectro.png";
const solventBeakerImg =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-26-5233-solvent.png";

const SpectrometerDefault = Spectrometer2;

// Create a username and register no
const username = global1.name;
const registerNo = global1.regno;

const NuclearMagneticResosnance = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [apparatus, setApparatus] = useState({
    sampleBeaker: false,
    solventBeaker: false,
    mortar: false,
    irplate: false,
    desiccator: false,
  });
  const { sampleBeaker, mortar, desiccator } = apparatus;

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
        {level > 1 ? (
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
            Nuclear Magnetic Resosnance Spectrocopy and Evaulation of Simple 1H
            NMR Spectra of Select Organic Compounds
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
                  Click on the Benzene option in the Apparatus Menu to introduce
                  it into the workspace.
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
          <Typography variant="h6">Level - {level}</Typography>
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
                      <ListItemText primary="Benzene" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() =>
                        setApparatus((prev) => ({ ...prev, mortar: true }))
                      }
                    >
                      <ListItemText primary="NMR Tube" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() =>
                        setApparatus((prev) => ({ ...prev, desiccator: true }))
                      }
                    >
                      <ListItemText primary="NMR Spectrometer" />
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
                display: "flex",
              }}
            >
              <Grid container>
                <Grid item xs={8}>
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

                <Grid item xs={4}>
                  {desiccator && (
                    <img
                      src={microwave}
                      alt="microwave"
                      width="250px"
                      style={{
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
                  bottom: 55px; 
                }
                100% { 
                  transform: translateX(550px) scale(0.5); 
                  opacity: 0; 
                  position: relative; 
                  bottom: 55px; 
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
            onClick={handleNextBtn}
          >
            Next
          </Button>
        </Container>
      )}

      {level > 1 && (
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
            Preparation of Gels
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
        </Container>
      )}
    </Box>
  );
};

export default NuclearMagneticResosnance;
