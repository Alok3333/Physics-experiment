import React, { useState } from "react";
import { TextField, Button, Box, Snackbar, Typography } from "@mui/material";

const img1 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-24-240-mendel_1.jpg";
const img2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-24-2417-mendel_2.jpg";
const img3 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-24-2437-mendel_3.jpg";
const img4 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-24-2457-mendel_4.jpg";
const img5 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-24-2515-mendel_5.jpg";

const MendelsLaw = () => {
  const [mainVal, setMainVal] = useState("");
  const [ratios, setRatios] = useState({ r1: "", r2: "", r3: "", r4: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    const dropzone = ev.target;
    const draggedElement = document.getElementById(data);
    dropzone.appendChild(draggedElement);
  };

  const change1 = () => {
    if (mainVal === "RrYY") {
      setFirst(false);
      setSecond(true);
      setMainVal("");
    } else {
      setSnackbarMessage("Enter a correct value");
      setSnackbarOpen(true);
    }
  };

  const change2 = () => {
    if (mainVal === "RRYy") {
      setSecond(false);
      setThird(true);
      setMainVal("");
    } else {
      setSnackbarMessage("Enter a correct value");
      setSnackbarOpen(true);
    }
  };

  const change3 = () => {
    if (mainVal === "RrYy") {
      setThird(false);
      setFour(true);
      setMainVal("");
    } else {
      setSnackbarMessage("Enter a correct value");
      setSnackbarOpen(true);
    }
  };

  const change4 = () => {
    if (mainVal === "rryy") {
      setFour(false);
      setFive(true);
      setMainVal("");
    } else {
      setSnackbarMessage("Enter a correct value");
      setSnackbarOpen(true);
    }
  };

  const check = () => {
    const { r1, r2, r3, r4 } = ratios;
    if (r1 === "9" && r2 === "3" && r3 === "3" && r4 === "1") {
      setSnackbarMessage(
        "Phenotypic ratio is correct well tried to reach here. now back to home page to click top button"
      );
      setRatios({ r1: "", r2: "", r3: "", r4: "" });
    } else {
      setSnackbarMessage(
        "Enter a correct value, The Punnett square is completed. Now enter the phenotypic ratio of the dihybrid cross."
      );
    }
    setSnackbarOpen(true);
  };

  const handleClickStart = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFour(false);
    setFive(false);
  };

  return (
    <>
      <Typography textAlign="center" sx={{ marginTop: "10px" }}>
        <Button onClick={handleClickStart}>Click here to start</Button>
      </Typography>
      {first && (
        <Box
          sx={{
            width: "70%",
            height: "700px",
            backgroundImage: 'url("image/demos.jpg")',
            backgroundRepeat: "no-repeat",
            position: "relative",
            left: "15%",
            p: 4,
            border: "2px dashed #ccc",
          }}
        >
          <Typography textAlign="center" variant="h6">
            An incomplete Punnett square is shown. It illustrates a dilybrid
            cross between two heterozygous pea plants.
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: 164,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            RY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 251,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            Ry
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 337,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            rY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 418,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            ry
          </Box>
          <Box
            sx={{
              marginTop: "2%",
              marginLeft: "22%",
              marginRight: "22%",
              marginBottom: "2%",
            }}
          >
            <img
              id="drag2"
              src={img1}
              draggable="true"
              onDragStart={drag}
              alt="Drag me"
            />
          </Box>

          <Typography textAlign="center" variant="h6">
            Fill the empty squares by inserting correct gamete produced from the
            combination given below and click next.
          </Typography>

          <Box
            sx={{ marginLeft: "22%", marginRight: "22%", marginTop: "10px" }}
          >
            <TextField
              label="RY * rY"
              variant="outlined"
              value={mainVal}
              onChange={(e) => setMainVal(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={change1}
              sx={{ marginLeft: "20px", marginTop: "10px" }}
            >
              Next
            </Button>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </Box>
      )}

      {second && (
        <Box
          sx={{
            width: "70%",
            height: "700px",
            backgroundImage: 'url("image/demos.jpg")',
            backgroundRepeat: "no-repeat",
            position: "relative",
            left: "15%",
            p: 4,
            border: "2px dashed red",
          }}
        >
          <Typography textAlign="center" variant="h6">
            An incomplete Punnett square is shown. It illustrates a dilybrid
            cross between two heterozygous pea plants.
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: 164,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            RY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 251,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            Ry
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 337,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            rY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 418,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            ry
          </Box>
          <Box
            sx={{
              marginTop: "2%",
              marginLeft: "22%",
              marginRight: "22%",
              marginBottom: "2%",
            }}
          >
            <img
              id="drag2"
              src={img2}
              draggable="true"
              onDragStart={drag}
              alt="Drag me"
            />
          </Box>

          <Typography textAlign="center" variant="h6">
            Fill the empty squares by inserting correct gamete produced from the
            combination given below and click next.
          </Typography>

          <Box
            sx={{ marginLeft: "22%", marginRight: "22%", marginTop: "10px" }}
          >
            <TextField
              label="RY * rY"
              variant="outlined"
              value={mainVal}
              onChange={(e) => setMainVal(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={change2}
              sx={{ marginLeft: "20px", marginTop: "10px" }}
            >
              Next
            </Button>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </Box>
      )}

      {third && (
        <Box
          sx={{
            width: "70%",
            height: "700px",
            backgroundImage: 'url("image/demos.jpg")',
            backgroundRepeat: "no-repeat",
            position: "relative",
            left: "15%",
            p: 4,
            border: "2px dashed red",
          }}
        >
          <Typography textAlign="center" variant="h6">
            An incomplete Punnett square is shown. It illustrates a dilybrid
            cross between two heterozygous pea plants.
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: 164,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            RY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 251,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            Ry
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 337,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            rY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 418,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            ry
          </Box>
          <Box
            sx={{
              marginTop: "2%",
              marginLeft: "22%",
              marginRight: "22%",
              marginBottom: "2%",
            }}
          >
            <img
              id="drag2"
              src={img3}
              draggable="true"
              onDragStart={drag}
              alt="Drag me"
            />
          </Box>

          <Typography textAlign="center" variant="h6">
            Fill the empty squares by inserting correct gamete produced from the
            combination given below and click next.
          </Typography>

          <Box
            sx={{ marginLeft: "22%", marginRight: "22%", marginTop: "10px" }}
          >
            <TextField
              label="RY * rY"
              variant="outlined"
              value={mainVal}
              onChange={(e) => setMainVal(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={change3}
              sx={{ marginLeft: "20px", marginTop: "10px" }}
            >
              Next
            </Button>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </Box>
      )}

      {four && (
        <Box
          sx={{
            width: "70%",
            height: "700px",
            backgroundImage: 'url("image/demos.jpg")',
            backgroundRepeat: "no-repeat",
            position: "relative",
            left: "15%",
            p: 4,
            border: "2px dashed red",
          }}
        >
          <Typography textAlign="center" variant="h6">
            An incomplete Punnett square is shown. It illustrates a dilybrid
            cross between two heterozygous pea plants.
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: 164,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            RY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 251,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            Ry
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 337,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            rY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 418,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            ry
          </Box>
          <Box
            sx={{
              marginTop: "2%",
              marginLeft: "22%",
              marginRight: "22%",
              marginBottom: "2%",
            }}
          >
            <img
              id="drag2"
              src={img4}
              draggable="true"
              onDragStart={drag}
              alt="Drag me"
            />
          </Box>

          <Typography textAlign="center" variant="h6">
            Fill the empty squares by inserting correct gamete produced from the
            combination given below and click next.
          </Typography>

          <Box
            sx={{ marginLeft: "22%", marginRight: "22%", marginTop: "10px" }}
          >
            <TextField
              label="RY * rY"
              variant="outlined"
              value={mainVal}
              onChange={(e) => setMainVal(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={change4}
              sx={{ marginLeft: "20px", marginTop: "10px" }}
            >
              Next
            </Button>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </Box>
      )}

      {five && (
        <Box
          sx={{
            width: "70%",
            height: "700px",
            backgroundImage: 'url("image/demos.jpg")',
            backgroundRepeat: "no-repeat",
            position: "relative",
            left: "15%",
            p: 4,
            border: "2px dashed red",
          }}
        >
          <Typography textAlign="center" variant="h6">
            An incomplete Punnett square is shown. It illustrates a dilybrid
            cross between two heterozygous pea plants.
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: 164,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            RY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 251,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            Ry
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 337,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            rY
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 418,
              left: 300,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              border: "1px solid",
            }}
          >
            ry
          </Box>
          <Box
            sx={{
              marginTop: "2%",
              marginLeft: "22%",
              marginRight: "22%",
              marginBottom: "2%",
            }}
          >
            <img
              id="drag2"
              src={img5}
              draggable="true"
              onDragStart={drag}
              alt="Drag me"
            />
          </Box>

          <Box sx={{ position: "fixed", marginTop: "10px", marginLeft: "10%" }}>
            <Typography>Phenotypic ratio : </Typography>
            <TextField
              label="R1"
              variant="outlined"
              value={ratios.r1}
              onChange={(e) => setRatios({ ...ratios, r1: e.target.value })}
              //   sx={{ width: "20px" }}
            />
            <TextField
              label="R2"
              variant="outlined"
              value={ratios.r2}
              onChange={(e) => setRatios({ ...ratios, r2: e.target.value })}
              sx={{ marginLeft: "14px" }}
            />
            <TextField
              label="R3"
              variant="outlined"
              value={ratios.r3}
              onChange={(e) => setRatios({ ...ratios, r3: e.target.value })}
              sx={{ marginLeft: "15px" }}
            />
            <TextField
              label="R4"
              variant="outlined"
              value={ratios.r4}
              onChange={(e) => setRatios({ ...ratios, r4: e.target.value })}
              sx={{ marginLeft: "15px" }}
            />
            <Box textAlign="center" mt="20px">
              <Button variant="contained" onClick={check}>
                Check
              </Button>
            </Box>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </Box>
      )}
    </>
  );
};

export default MendelsLaw;
