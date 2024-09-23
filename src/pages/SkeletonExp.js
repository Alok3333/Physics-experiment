import React, { useState } from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";

import img12 from "../assets/humanskeleton.jpg";
import part1 from "../assets/skeleton_part-1.png";
import part2 from "../assets/skeleton_part-2.png";
import part3 from "../assets/skeleton_part-3.png";
import part4 from "../assets/skeleton_part-4.png";
import part5 from "../assets/skeleton_part-5.png";
import part6 from "../assets/skeleton_part--6.png";
import part7 from "../assets/skeleton_part-7.png";
import part8 from "../assets/skeleton_part--8.png";
import part9 from "../assets/skeleton_part-9.png";
import part10 from "../assets/skeleton_part-10.png";
import part11 from "../assets/skeleton_part-11.png";
import part12 from "../assets/skeleton_part-12.png";

const SkeletonExp = () => {
  const [stateTrue, setStateTrue] = useState(false);
  const [droppedImages, setDroppedImages] = useState(Array(12).fill(""));
  const [availableImages, setAvailableImages] = useState([
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    part7,
    part8,
    part9,
    part10,
    part11,
    part12,
  ]);

  const handleNext = () => {
    const allDroppedFilled = droppedImages.every((img) => img);
    if (allDroppedFilled) {
      alert("Correct!")
    } else {
      alert("Incorrect!");
    }
  };

  const handleDrop = (index) => (e) => {
    e.preventDefault();
    const image = e.dataTransfer.getData("text/plain");

    if (availableImages.includes(image) && !droppedImages.includes(image)) {
      const newDroppedImages = [...droppedImages];
      newDroppedImages[index] = image;
      setAvailableImages((prev) => prev.filter((img) => img !== image));
      setDroppedImages(newDroppedImages);
    }
  };

  const handleDragStart = (img) => (e) => {
    e.dataTransfer.setData("text/plain", img);
  };

  // Custom styles for each drop box
  const dropBoxStyles = [
    {
      width: "40px",
      height: "115px",
      top: "105px",
      left: "189px",
      transform: "rotate(-10deg)",
    },
    {
      width: "40px",
      height: "115px",
      top: "101px",
      left: "40px",
      transform: "rotate(10deg)",
    },
    {
      width: "45px",
      height: "66px",
      top: "254px",
      left: "110px",
      zIndex: 1,
    },
    {
      width: "35px",
      height: "55px",
      top: "209px",
      left: "115px",
    },
    {
      width: "40px",
      height: "130px",
      top: "190px",
      left: "219px",
      transform: "rotate(8deg)",
    },
    {
      width: "40px",
      height: "141px",
      top: "183px",
      left: "11px",
      transform: "rotate(-12deg)",
    },
    {
      width: "49px",
      height: "172px",
      top: "305px",
      left: "147px",
    },
    {
      width: "49px",
      height: "180px",
      top: "299px",
      left: "69px",
    },
    {
      width: "40px",
      height: "146px",
      top: "473px",
      left: "134px",
      transform: "rotate(-3deg)",
    },
    { width: "32px", height: "151px", top: "472px", left: "99px" },
    {
      width: "50px",
      height: "71px",
      top: "255px",
      left: "79px",
    },
    {
      width: "50px",
      height: "71px",
      top: "257px",
      left: "135px",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ border: "2px dashed #ccc", padding: "1rem", my: 2 }}>
        <Typography textAlign="center" my="10px" variant="h6">
          Skeleton - Assembling, Identification & Labeling
        </Typography>
        {!stateTrue && (
          <>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Box sx={{ position: "relative" }}>
                  <img src={img12} alt="Skeleton" width="300" height="700" />
                  {/* Drop boxes */}
                  {dropBoxStyles.map((style, index) => (
                    <Box
                      key={index}
                      onDrop={handleDrop(index)}
                      onDragOver={(e) => e.preventDefault()}
                      sx={{
                        ...style,
                        position: "absolute",
                        // border: "1px dashed #ccc",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 1,
                      }}
                    >
                      {droppedImages[index] && (
                        <img
                          src={droppedImages[index]}
                          alt={`Part ${index + 1}`}
                          //   width="100%"
                          height="100%"
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", flexWrap: "wrap", width: "300px" }}>
                  {availableImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="skeleton-part"
                      draggable
                      onDragStart={handleDragStart(img)}
                      style={{
                        width: "50px",
                        height: "50px",
                        margin: "5px",
                        cursor: "grab",
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ marginTop: 4, textAlign: "center", color: "#000" }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ marginTop: 2 }}
              >
                Submit
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default SkeletonExp;