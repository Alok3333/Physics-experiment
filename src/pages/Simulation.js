import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";

const Simulation = () => {
  const [img1, setImg1] = useState("images/part 2 one main.jpg");
  const [img2, setImg2] = useState("images/part 2 two main.jpg");
  const [inputs, setInputs] = useState(Array(8).fill(""));

  const handleInputChange = (index) => (event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const check = () => {
    const [a, b, c, d, e, f, g, h] = inputs.map(Number);
    if (
      a === 11 &&
      b === 7 &&
      c === 7 &&
      d === 5 &&
      e === 11 &&
      f === 7 &&
      g === 7 &&
      h === 5
    ) {
      alert("Correct");
    } else {
      alert("Enter the values correctly");
    }
  };

  return (
    <Box sx={{ border: "2px dashed #ccc", height: "100%", padding: "2rem" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Box
            sx={{
              height: 501,
              width: 501,
              border: "1px solid #ccc",
              backgroundImage: `url(${img1})`,
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                top: "10px",
                left: "10px",
              }}
            >
              <Box
                onClick={() => setImg1("images/part 2 one d.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "red",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => setImg1("images/part 2 one c.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "red",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => setImg1("images/part 2 one b.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "red",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => setImg1("images/part 2 one a.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "red",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: 501,
              width: 501,
              border: "1px solid #ccc",
              backgroundImage: `url(${img2})`,
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                top: "10px",
                left: "10px",
              }}
            >
              <Box
                onClick={() => setImg2("images/part 2 two a.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => setImg2("images/part 2 two b.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => setImg2("images/part 2 two c.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => setImg2("images/part 2 two d.jpg")}
                sx={{
                  width: 18,
                  height: 18,
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4, textAlign: "center", color: "#000" }}>
        <Typography variant="h6">MAIN LINE FORMULA:</Typography>
        <Typography variant="body1">
          TYPE INTO THE BOXES AND CLICK SUBMIT:
        </Typography>
        <Grid container spacing={1} justifyContent="center" marginTop={2}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid item key={index}>
              <TextField
                variant="outlined"
                size="small"
                value={inputs[index]}
                onChange={handleInputChange(index)}
                inputProps={{ style: { height: 30, width: 30 } }}
              />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" onClick={check} sx={{ marginTop: 2 }}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default Simulation;
