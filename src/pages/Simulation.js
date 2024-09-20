// // import React, { useState } from "react";
// // import { Box, Button, TextField, Typography, Grid } from "@mui/material";

// // const Simulation = () => {
// //   const [img1, setImg1] = useState("images/part 2 one main.jpg");
// //   const [img2, setImg2] = useState("images/part 2 two main.jpg");
// //   const [inputs, setInputs] = useState(Array(8).fill(""));

// //   const handleInputChange = (index) => (event) => {
// //     const newInputs = [...inputs];
// //     newInputs[index] = event.target.value;
// //     setInputs(newInputs);
// //   };

// //   const check = () => {
// //     const [a, b, c, d, e, f, g, h] = inputs.map(Number);
// //     if (
// //       a === 11 &&
// //       b === 7 &&
// //       c === 7 &&
// //       d === 5 &&
// //       e === 11 &&
// //       f === 7 &&
// //       g === 7 &&
// //       h === 5
// //     ) {
// //       alert("Correct");
// //     } else {
// //       alert("Enter the values correctly");
// //     }
// //   };

// //   return (
// //     <Box sx={{ border: "2px dashed #ccc", height: "100%", padding: "2rem" }}>
// //       <Grid container spacing={2} justifyContent="center">
// //         <Grid item xs={6}>
// //           <Box
// //             sx={{
// //               height: 501,
// //               width: 501,
// //               border: "1px solid #ccc",
// //               backgroundImage: `url(${img1})`,
// //               backgroundRepeat: "no-repeat",
// //               position: "relative",
// //             }}
// //           >
// //             <Box
// //               sx={{
// //                 position: "absolute",
// //                 display: "flex",
// //                 flexDirection: "row",
// //                 gap: "10px",
// //                 top: "10px",
// //                 left: "10px",
// //               }}
// //             >
// //               <Box
// //                 onClick={() => setImg1("images/part 2 one d.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "red",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //               <Box
// //                 onClick={() => setImg1("images/part 2 one c.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "red",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //               <Box
// //                 onClick={() => setImg1("images/part 2 one b.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "red",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //               <Box
// //                 onClick={() => setImg1("images/part 2 one a.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "red",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //             </Box>
// //           </Box>
// //         </Grid>
// //         <Grid item xs={6}>
// //           <Box
// //             sx={{
// //               height: 501,
// //               width: 501,
// //               border: "1px solid #ccc",
// //               backgroundImage: `url(${img2})`,
// //               backgroundRepeat: "no-repeat",
// //               position: "relative",
// //             }}
// //           >
// //             <Box
// //               sx={{
// //                 position: "absolute",
// //                 display: "flex",
// //                 flexDirection: "row",
// //                 gap: "10px",
// //                 top: "10px",
// //                 left: "10px",
// //               }}
// //             >
// //               <Box
// //                 onClick={() => setImg2("images/part 2 two a.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "transparent",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //               <Box
// //                 onClick={() => setImg2("images/part 2 two b.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "transparent",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //               <Box
// //                 onClick={() => setImg2("images/part 2 two c.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "transparent",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //               <Box
// //                 onClick={() => setImg2("images/part 2 two d.jpg")}
// //                 sx={{
// //                   width: 18,
// //                   height: 18,
// //                   backgroundColor: "transparent",
// //                   cursor: "pointer",
// //                 }}
// //               />
// //             </Box>
// //           </Box>
// //         </Grid>
// //       </Grid>

// //       <Box sx={{ marginTop: 4, textAlign: "center", color: "#000" }}>
// //         <Typography variant="h6">MAIN LINE FORMULA:</Typography>
// //         <Typography variant="body1">
// //           TYPE INTO THE BOXES AND CLICK SUBMIT:
// //         </Typography>
// //         <Grid container spacing={1} justifyContent="center" marginTop={2}>
// //           {Array.from({ length: 8 }).map((_, index) => (
// //             <Grid item key={index}>
// //               <TextField
// //                 variant="outlined"
// //                 size="small"
// //                 value={inputs[index]}
// //                 onChange={handleInputChange(index)}
// //                 inputProps={{ style: { height: 30, width: 30 } }}
// //               />
// //             </Grid>
// //           ))}
// //         </Grid>
// //         <Button variant="contained" onClick={check} sx={{ marginTop: 2 }}>
// //           SUBMIT
// //         </Button>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Simulation;

// // import React, { useState } from 'react';
// // import { Box, Paper, Typography } from '@mui/material';

// // const liquids = [
// //   { name: 'Water', color: 'blue' },
// //   { name: 'Oil', color: 'yellow' },
// //   { name: 'Juice', color: 'orange' },
// // ];

// // const Simulation = () => {
// //   const [beakerColor, setBeakerColor] = useState('transparent');

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     const liquidColor = e.dataTransfer.getData('text/plain');
// //     setBeakerColor(liquidColor);
// //   };

// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //   };

// //   const handleDragStart = (color) => (e) => {
// //     e.dataTransfer.setData('text/plain', color);
// //   };

// //   return (
// //     <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
// //       <Typography variant="h4" gutterBottom>
// //         Drag and Drop Liquid Experiment
// //       </Typography>
// //       <Box
// //         onDrop={handleDrop}
// //         onDragOver={handleDragOver}
// //         width={200}
// //         height={300}
// //         bgcolor={beakerColor}
// //         border={2}
// //         borderColor="grey.500"
// //         borderRadius={2}
// //         display="flex"
// //         justifyContent="center"
// //         alignItems="flex-end"
// //         sx={{ transition: 'background-color 0.3s ease' }}
// //       >
// //         <Typography variant="h6" color="white">
// //           Beaker
// //         </Typography>
// //       </Box>
// //       <Box display="flex" justifyContent="center" mt={3}>
// //         {liquids.map((liquid) => (
// //           <Paper
// //             key={liquid.name}
// //             draggable
// //             onDragStart={handleDragStart(liquid.color)}
// //             elevation={3}
// //             sx={{
// //               width: 80,
// //               height: 80,
// //               backgroundColor: liquid.color,
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               margin: 1,
// //               cursor: 'grab',
// //             }}
// //           >
// //             <Typography variant="body1" color="white">
// //               {liquid.name}
// //             </Typography>
// //           </Paper>
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Simulation;
// import React, { useState } from 'react';
// import { Box, Paper, Typography } from '@mui/material';

// const liquids = [
//   { name: 'Water', color: 'blue' },
//   { name: 'Oil', color: 'yellow' },
//   { name: 'Juice', color: 'orange' },
// ];

// const Simulation = () => {
//   const [beakerColor, setBeakerColor] = useState('transparent');
//   const [addedLiquids, setAddedLiquids] = useState([]);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const liquidColor = e.dataTransfer.getData('text/plain');
//     const liquidName = e.dataTransfer.getData('text/name');

//     // Check for explosion condition
//     if (
//       (addedLiquids.includes('Water') && liquidName === 'Juice') ||
//       (liquidName === 'Water' && addedLiquids.includes('Juice'))
//     ) {
//       setBeakerColor('red'); // Explosion color
//       alert('BOOM! Explosion occurred!');
//       setAddedLiquids([]); // Reset after explosion
//     } else {
//       setAddedLiquids((prev) => [...prev, liquidName]);
//       setBeakerColor(liquidColor); // Set beaker color normally
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDragStart = (color, name) => (e) => {
//     e.dataTransfer.setData('text/plain', color);
//     e.dataTransfer.setData('text/name', name);
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
//       <Typography variant="h4" gutterBottom>
//         Drag and Drop Liquid Experiment
//       </Typography>

//       {/* Beaker */}
//       <Box
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         width={200}
//         height={300}
//         bgcolor={beakerColor}
//         border={2}
//         borderColor="grey.500"
//         borderRadius={2}
//         display="flex"
//         justifyContent="center"
//         alignItems="flex-end"
//         position="relative"
//         sx={{ transition: 'background-color 0.3s ease' }}
//       >
//         <Typography variant="h6" color="white" position="absolute" bottom={10}>
//           Beaker
//         </Typography>
//       </Box>

//       {/* Liquid Bottles */}
//       <Box display="flex" justifyContent="center" mt={3}>
//         {liquids.map((liquid) => (
//           <Paper
//             key={liquid.name}
//             draggable
//             onDragStart={handleDragStart(liquid.color, liquid.name)}
//             elevation={3}
//             sx={{
//               width: 80,
//               height: 120,
//               backgroundColor: liquid.color,
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               margin: 1,
//               borderRadius: 2,
//               cursor: 'grab',
//             }}
//           >
//             <Typography variant="body1" color="white">
//               {liquid.name}
//             </Typography>
//           </Paper>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Simulation;

import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const Simulation = () => {
  const [diffractionPattern, setDiffractionPattern] = useState(null);

  const simulateDiffraction = () => {
    const patterns = [
      'Diffraction Pattern 1',
      'Diffraction Pattern 2',
      'Diffraction Pattern 3',
      'Diffraction Pattern 4',
    ];
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    setDiffractionPattern(randomPattern);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Single Crystal X-ray Diffractometer Simulation
      </Typography>

      {/* Crystal Representation */}
      <Box
        width={200}
        height={200}
        bgcolor="lightblue"
        border={2}
        borderColor="grey.500"
        borderRadius={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        mb={3}
      >
        <Typography variant="h6">Crystal</Typography>
      </Box>

      <Button variant="contained" onClick={simulateDiffraction}>
        Shoot X-rays
      </Button>

      {/* Display Diffraction Pattern */}
      {diffractionPattern && (
        <Box mt={3}>
          <Typography variant="h6">
            Resulting {diffractionPattern}
          </Typography>
          <Box
            width={300}
            height={100}
            bgcolor="lightgreen"
            border={2}
            borderColor="grey.500"
            borderRadius={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Typography variant="body1">{diffractionPattern}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Simulation;
