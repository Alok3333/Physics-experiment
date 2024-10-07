// src/App.js
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import styles from "../virtuallabcss/FingerPrintPatterns.module.css";

const FingerPrintPatterns2 = () => {
  const [mainVal, setMainVal] = useState("Mongoloid");
  const [w, setW] = useState("");
  const [l, setL] = useState("");
  const [a, setA] = useState("");
  const [background, setBackground] = useState("");

  const checkResult = () => {
    const aNum = parseInt(w);
    const bNum = parseInt(l);
    const cNum = parseInt(a);

    if (
      aNum >= 40 &&
      aNum <= 50 &&
      bNum >= 50 &&
      bNum <= 60 &&
      cNum >= 1 &&
      cNum <= 2 &&
      mainVal === "Mongoloid"
    ) {
      alert("Correct");
    } else if (
      aNum >= 20 &&
      aNum <= 30 &&
      bNum >= 60 &&
      bNum <= 70 &&
      cNum >= 4 &&
      cNum <= 7 &&
      mainVal === "Caucasoid"
    ) {
      alert("Correct");
    } else if (
      aNum === 30 &&
      bNum >= 50 &&
      bNum <= 60 &&
      cNum >= 6 &&
      cNum <= 7 &&
      mainVal === "Negroid"
    ) {
      alert("Correct");
    } else {
      alert("Wrong");
    }
  };

  const handleDragOver = (ev) => {
    ev.preventDefault();
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    const targetDiv = ev.target.closest(".ddiv");
    if (targetDiv) {
      targetDiv.appendChild(document.getElementById(data));
    }
  };

  return (
    <Box
      className={styles.mainImg}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Box className={styles.uprow}>
        {Array.from({ length: 10 }, (_, i) => (
          <Box
            key={i}
            id={`drag${i + 1}`}
            className={styles.ddiv}
            draggable
            onDragStart={(ev) =>
              ev.dataTransfer.setData("text/plain", `drag${i + 1}`)
            }
            onMouseOver={() =>
              setBackground(
                `url(https://da-iitg.vlabs.ac.in/exp/fingerprint-patterns/simulation/image/f${
                  i + 1
                }.png)`
              )
            }
            onMouseOut={() => setBackground("")}
          />
        ))}
      </Box>

      <Box className={styles.fdiv}>
        <FormControl>
          <InputLabel>Main Value</InputLabel>
          <Select
            value={mainVal}
            onChange={(e) => setMainVal(e.target.value)}
            sx={{ width: 110 }}
          >
            <MenuItem value="Mongoloid">Mongoloid</MenuItem>
            <MenuItem value="Caucasoid">Caucasoid</MenuItem>
            <MenuItem value="Negroid">Negroid</MenuItem>
          </Select>
        </FormControl>
      </Box>
      

      <Box className={styles.textFields}>
        <TextField
          label="W"
          variant="outlined"
          value={w}
          onChange={(e) => setW(e.target.value)}
          sx={{ width: "60px" }}
        />
        <TextField
          label="L"
          variant="outlined"
          value={l}
          onChange={(e) => setL(e.target.value)}
          sx={{ width: "60px" }}
        />
        <TextField
          label="A"
          variant="outlined"
          value={a}
          onChange={(e) => setA(e.target.value)}
          sx={{ width: "60px" }}
        />
      </Box>

      <Box className={styles.submitButton}>
        <Button variant="contained" onClick={checkResult}>
          Submit
        </Button>
      </Box>

      <Box
        className={styles.ddivBackground}
        style={{ backgroundImage: background }}
      />
    </Box>
  );
};

export default FingerPrintPatterns2;