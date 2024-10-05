// // // import React, { useState, useEffect } from "react";
// // // import { Container, Button, Typography, Box, Paper } from "@mui/material";
// // // import t1 from "../assets/t1-removebg-preview.png"; // Original rabbit image
// // // import t2 from "../assets/r2-removebg-preview.png"; // Paused rabbit image
// // // import r2 from "../assets/r2-removebg-preview.png";
// // // import bgimg from "../assets/blank-nature-park-landscape-at-daytime-scene-with-many-tree-background-free-vector.jpg";

// // // const finishLine = 1600; // Set a fixed width for the finish line

// // // const TurtleRabbit = () => {
// // //   const [turtlePosition, setTurtlePosition] = useState(0);
// // //   const [rabbitPosition, setRabbitPosition] = useState(0);
// // //   const [raceOver, setRaceOver] = useState(false);
// // //   const [winner, setWinner] = useState("");
// // //   const [isRabbitPaused, setIsRabbitPaused] = useState(false);
// // //   const [hasPausedOnce, setHasPausedOnce] = useState(false); // Track if the rabbit has paused
// // //   const [lastRabbitSpeed, setLastRabbitSpeed] = useState(0);
// // //   const [rabbitImage, setRabbitImage] = useState(t1); // Track rabbit image

// // //   const resetRace = () => {
// // //     setTurtlePosition(0);
// // //     setRabbitPosition(0);
// // //     setRaceOver(false);
// // //     setWinner("");
// // //     setIsRabbitPaused(false);
// // //     setHasPausedOnce(false); // Reset paused state
// // //     setLastRabbitSpeed(0);
// // //     setRabbitImage(t1); // Reset to original image
// // //   };

// // //   const advanceTurtle = () => {
// // //     setTurtlePosition((prev) =>
// // //       Math.min(prev + Math.random() * 10, finishLine)
// // //     );
// // //   };

// // //   const advanceRabbit = () => {
// // //     if (!isRabbitPaused) {
// // //       const randomSpeed = Math.random() * 15;
// // //       setLastRabbitSpeed(randomSpeed);
// // //       setRabbitPosition((prev) => {
// // //         const newPosition = Math.min(prev + randomSpeed, finishLine);

// // //         // Check if the rabbit has reached a certain distance to pause
// // //         if (newPosition >= 300 && !isRabbitPaused && !hasPausedOnce) {
// // //           setIsRabbitPaused(true);
// // //           setHasPausedOnce(true); // Set the flag to indicate it has paused
// // //           setRabbitImage(t2); // Change image to paused image
// // //         }

// // //         return newPosition;
// // //       });
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (turtlePosition >= finishLine && rabbitPosition >= finishLine) {
// // //       setRaceOver(true);
// // //       setWinner("It's a tie!");
// // //     } else if (turtlePosition >= finishLine) {
// // //       setRaceOver(true);
// // //       setWinner("Turtle wins!");
// // //     } else if (rabbitPosition >= finishLine) {
// // //       setRaceOver(true);
// // //       setWinner("Rabbit wins!");
// // //     }
// // //   }, [turtlePosition, rabbitPosition]);

// // //   useEffect(() => {
// // //     let interval;

// // //     if (isRabbitPaused) {
// // //       interval = setTimeout(() => {
// // //         setIsRabbitPaused(false); // Resume rabbit movement after 3 seconds
// // //         setRabbitImage(t1); // Revert back to original image
// // //       }, 8000); // Pause for 3 seconds
// // //     }

// // //     return () => clearTimeout(interval);
// // //   }, [isRabbitPaused]);

// // //   useEffect(() => {
// // //     const rabbitInterval = setInterval(() => {
// // //       advanceRabbit();
// // //     }, 200); // Rabbit moves every 200ms

// // //     return () => clearInterval(rabbitInterval);
// // //   }, [isRabbitPaused]);

// // //   return (
// // //     <>
// // //       <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
// // //         <img
// // //           src={bgimg}
// // //           alt="background_image"
// // //           style={{ width: "100%", height: "100%" }}
// // //         />

// // //         <Typography
// // //           variant="h4"
// // //           gutterBottom
// // //           sx={{ position: "absolute", top: "40%", left: "40%" }}
// // //         >
// // //           Turtle and Rabbit Race
// // //         </Typography>

// // //         <Container
// // //           maxWidth="xll"
// // //           style={{
// // //             textAlign: "center",
// // //             marginTop: "20px",
// // //             position: "absolute",
// // //             bottom: 0,
// // //           }}
// // //         >
// // //           <Box sx={{ position: "relative", height: "150px", mb: 4 }}>
// // //             <Box
// // //               sx={{
// // //                 position: "absolute",
// // //                 left: `${turtlePosition}px`,
// // //                 bottom: "80px",
// // //                 transition: "left 0.2s",
// // //               }}
// // //             >
// // //               <img src={r2} alt="Turtle" style={{ width: "100px" }} />
// // //             </Box>
// // //             <Box
// // //               sx={{
// // //                 position: "absolute",
// // //                 left: `${rabbitPosition}px`,
// // //                 bottom: "0",
// // //                 transition: "left 0.2s",
// // //               }}
// // //             >
// // //               <img src={rabbitImage} alt="Rabbit" style={{ width: "100px" }} />
// // //             </Box>
// // //           </Box>

// // //           <Button
// // //             variant="contained"
// // //             color="primary"
// // //             onClick={advanceTurtle}
// // //             disabled={raceOver}
// // //           >
// // //             Move Turtle
// // //           </Button>

// // //           {raceOver && (
// // //             <Paper elevation={3} style={{ marginTop: "20px", padding: "20px" }}>
// // //               <Typography variant="h5">{winner}</Typography>
// // //               <Button
// // //                 variant="contained"
// // //                 onClick={resetRace}
// // //                 style={{ marginTop: "10px" }}
// // //               >
// // //                 Restart Race
// // //               </Button>
// // //             </Paper>
// // //           )}
// // //         </Container>
// // //       </Box>
// // //     </>
// // //   );
// // // };

// // // export default TurtleRabbit;

// // import React, { useState, useEffect } from "react";
// // import { Container, Button, Typography, Box, Paper } from "@mui/material";
// // import t1 from "../assets/rab_unscreen.gif"; // Original rabbit image
// // import t2 from "../assets/rabbit-gif--unscreen.gif"; // Paused rabbit image
// // import r2 from "../assets/r2-removebg-preview.png";
// // import bgimg from "../assets/blank-nature-park-landscape-at-daytime-scene-with-many-tree-background-free-vector.jpg";

// // const finishLine = 1600; // Set a fixed width for the finish line

// // const TurtleRabbit = () => {
// //   const [turtlePosition, setTurtlePosition] = useState(0);
// //   const [rabbitPosition, setRabbitPosition] = useState(0);
// //   const [raceOver, setRaceOver] = useState(false);
// //   const [winner, setWinner] = useState("");
// //   const [isRabbitPaused, setIsRabbitPaused] = useState(false);
// //   const [hasPausedOnce, setHasPausedOnce] = useState(false); // Track if the rabbit has paused
// //   const [lastRabbitSpeed, setLastRabbitSpeed] = useState(0);
// //   const [rabbitImage, setRabbitImage] = useState(t1); // Track rabbit image
// //   const [raceStarted, setRaceStarted] = useState(false); // Track if the race has started

// //   const resetRace = () => {
// //     setTurtlePosition(0);
// //     setRabbitPosition(0);
// //     setRaceOver(false);
// //     setWinner("");
// //     setIsRabbitPaused(false);
// //     setHasPausedOnce(false); // Reset paused state
// //     setLastRabbitSpeed(0);
// //     setRabbitImage(t1); // Reset to original image
// //     setRaceStarted(false); // Reset race started state
// //   };

// //   const startRace = () => {
// //     setRaceStarted(true); // Set race to started
// //   };

// //   const advanceTurtle = () => {
// //     setTurtlePosition((prev) =>
// //       Math.min(prev + Math.random() * 10, finishLine)
// //     );
// //   };

// //   const advanceRabbit = () => {
// //     if (!isRabbitPaused) {
// //       const randomSpeed = Math.random() * 15;
// //       setLastRabbitSpeed(randomSpeed);
// //       setRabbitPosition((prev) => {
// //         const newPosition = Math.min(prev + randomSpeed, finishLine);

// //         // Check if the rabbit has reached a certain distance to pause
// //         if (newPosition >= 300 && !isRabbitPaused && !hasPausedOnce) {
// //           setIsRabbitPaused(true);
// //           setHasPausedOnce(true); // Set the flag to indicate it has paused
// //           setRabbitImage(t2); // Change image to paused image
// //         }

// //         return newPosition;
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     if (turtlePosition >= finishLine && rabbitPosition >= finishLine) {
// //       setRaceOver(true);
// //       setWinner("It's a tie!");
// //     } else if (turtlePosition >= finishLine) {
// //       setRaceOver(true);
// //       setWinner("Turtle wins!");
// //     } else if (rabbitPosition >= finishLine) {
// //       setRaceOver(true);
// //       setWinner("Rabbit wins!");
// //     }
// //   }, [turtlePosition, rabbitPosition]);

// //   useEffect(() => {
// //     let interval;

// //     if (isRabbitPaused) {
// //       interval = setTimeout(() => {
// //         setIsRabbitPaused(false); // Resume rabbit movement after 3 seconds
// //         setRabbitImage(t1); // Revert back to original image
// //       }, 3000); // Pause for 3 seconds
// //     }

// //     return () => clearTimeout(interval);
// //   }, [isRabbitPaused]);

// //   useEffect(() => {
// //     const rabbitInterval = setInterval(() => {
// //       if (raceStarted) {
// //         advanceRabbit();
// //       }
// //     }, 200); // Rabbit moves every 200ms

// //     return () => clearInterval(rabbitInterval);
// //   }, [isRabbitPaused, raceStarted]);

// //   return (
// //     <>
// //       <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
// //         <img
// //           src={bgimg}
// //           alt="background_image"
// //           style={{ width: "100%", height: "100%" }}
// //         />

// //         <Typography
// //           variant="h4"
// //           gutterBottom
// //           sx={{ position: "absolute", top: "40%", left: "40%" }}
// //         >
// //           Turtle and Rabbit Race
// //         </Typography>

// //         <Container
// //           maxWidth="xll"
// //           style={{
// //             textAlign: "center",
// //             marginTop: "20px",
// //             position: "absolute",
// //             bottom: 0,
// //           }}
// //         >
// //           <Box sx={{ position: "relative", height: "150px", mb: 4 }}>
// //             <Box
// //               sx={{
// //                 position: "absolute",
// //                 left: `${turtlePosition}px`,
// //                 bottom: "80px",
// //                 transition: "left 0.2s",
// //               }}
// //             >
// //               <img src={r2} alt="Turtle" style={{ width: "100px" }} />
// //             </Box>
// //             <Box
// //               sx={{
// //                 position: "absolute",
// //                 left: `${rabbitPosition}px`,
// //                 bottom: "0",
// //                 transition: "left 0.2s",
// //               }}
// //             >
// //               <img src={rabbitImage} alt="Rabbit" style={{ width: "100px" }} />
// //             </Box>
// //           </Box>

// //           {!raceStarted && ( // Show the start button if race hasn't started
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               onClick={startRace}
// //               style={{ marginBottom: "20px" }}
// //             >
// //               Start Race
// //             </Button>
// //           )}

// //           <Button
// //             variant="contained"
// //             color="primary"
// //             onClick={advanceTurtle}
// //             disabled={raceOver || !raceStarted} // Disable button if race hasn't started
// //           >
// //             Move Turtle
// //           </Button>

// //           {raceOver && (
// //             <Paper elevation={3} style={{ marginTop: "20px", padding: "20px" }}>
// //               <Typography variant="h5">{winner}</Typography>
// //               <Button
// //                 variant="contained"
// //                 onClick={resetRace}
// //                 style={{ marginTop: "10px" }}
// //               >
// //                 Restart Race
// //               </Button>
// //             </Paper>
// //           )}
// //         </Container>
// //       </Box>
// //     </>
// //   );
// // };

// // export default TurtleRabbit;

// import React, { useState, useEffect } from "react";
// import { Container, Button, Typography, Box, Dialog } from "@mui/material";
// import t1 from "../assets/rab_unscreen.gif"; // Original rabbit image
// import t2 from "../assets/rabbit-gif--unscreen.gif"; // Paused rabbit image
// import r2 from "../assets/r2-removebg-preview.png";
// import bgimg from "../assets/blank-nature-park-landscape-at-daytime-scene-with-many-tree-background-free-vector.jpg";
// import woodboard from "../assets/wood-board-unscreen.png";

// const finishLine = 1600; // Set a fixed width for the finish line

// const TurtleRabbit = () => {
//   const [level, setLevel] = useState(0);
//   const [turtlePosition, setTurtlePosition] = useState(0);
//   const [rabbitPosition, setRabbitPosition] = useState(0);
//   const [raceOver, setRaceOver] = useState(false);
//   const [winner, setWinner] = useState("");
//   const [isRabbitPaused, setIsRabbitPaused] = useState(false);
//   const [hasPausedOnce, setHasPausedOnce] = useState(false); // Track if the rabbit has paused
//   const [lastRabbitSpeed, setLastRabbitSpeed] = useState(0);
//   const [rabbitImage, setRabbitImage] = useState(t1); // Track rabbit image
//   const [raceStarted, setRaceStarted] = useState(false); // Track if the race has started
//   const [openDialog, setOpenDialog] = useState(false); // Control dialog visibility

//   const resetRace = () => {
//     setTurtlePosition(0);
//     setRabbitPosition(0);
//     setRaceOver(false);
//     setWinner("");
//     setIsRabbitPaused(false);
//     setHasPausedOnce(false); // Reset paused state
//     setLastRabbitSpeed(0);
//     setRabbitImage(t1); // Reset to original image
//     setRaceStarted(false); // Reset race started state
//     setOpenDialog(false); // Close the dialog
//   };

//   const startRace = () => {
//     setRaceStarted(true); // Set race to started
//   };

//   const advanceTurtle = () => {
//     setTurtlePosition((prev) =>
//       Math.min(prev + Math.random() * 10, finishLine)
//     );
//   };

//   const advanceRabbit = () => {
//     if (!isRabbitPaused) {
//       const randomSpeed = Math.random() * 15;
//       setLastRabbitSpeed(randomSpeed);
//       setRabbitPosition((prev) => {
//         const newPosition = Math.min(prev + randomSpeed, finishLine);

//         // Check if the rabbit has reached a certain distance to pause
//         if (newPosition >= 300 && !isRabbitPaused && !hasPausedOnce) {
//           setIsRabbitPaused(true);
//           setHasPausedOnce(true); // Set the flag to indicate it has paused
//           setRabbitImage(t2); // Change image to paused image
//         }

//         return newPosition;
//       });
//     }
//   };

//   useEffect(() => {
//     if (turtlePosition >= finishLine && rabbitPosition >= finishLine) {
//       setRaceOver(true);
//       setWinner("It's a tie!");
//     } else if (turtlePosition >= finishLine) {
//       setRaceOver(true);
//       setWinner("Turtle wins!");
//     } else if (rabbitPosition >= finishLine) {
//       setRaceOver(true);
//       setWinner("Rabbit wins!");
//     }
//   }, [turtlePosition, rabbitPosition]);

//   useEffect(() => {
//     let interval;

//     if (isRabbitPaused) {
//       interval = setTimeout(() => {
//         setIsRabbitPaused(false); // Resume rabbit movement after 3 seconds
//         setRabbitImage(t1); // Revert back to original image
//       }, 3000); // Pause for 3 seconds
//     }

//     return () => clearTimeout(interval);
//   }, [isRabbitPaused]);

//   useEffect(() => {
//     const rabbitInterval = setInterval(() => {
//       if (raceStarted) {
//         advanceRabbit();
//       }
//     }, 200); // Rabbit moves every 200ms

//     return () => clearInterval(rabbitInterval);
//   }, [isRabbitPaused, raceStarted]);

//   return (
//     <>
//       {level === 0 && (
//         <Container sx={{ marginTop: "20px", marginBottom: "20px" }}>
//           <img src={woodboard} alt="board" style={{width: "100%", height: "300px"}}/>
//           <Typography
//             gutterBottom
//             color="#00FF00"
//             sx={{
//               fontFamily: "Montserrat, sans-serif",
//               fontWeight: 700,
//               fontSize: "2rem",
//             }}
//           >
//             Turtle and Rabbit Race
//           </Typography>

//           <Button variant="contained" color="success" onClick={() => setLevel((prev) => prev+1)}>
//             Play Game
//           </Button>
//         </Container>
//       )}

//       {level === 1 && (
//         <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
//           <img
//             src={bgimg}
//             alt="background_image"
//             style={{ width: "100%", height: "100%" }}
//           />

//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{ position: "absolute", top: "40%", left: "40%" }}
//           >
//             Turtle and Rabbit Race
//           </Typography>

//           <Container
//             maxWidth="xll"
//             style={{
//               textAlign: "center",
//               marginTop: "20px",
//               position: "absolute",
//               bottom: 0,
//             }}
//           >
//             <Box sx={{ position: "relative", height: "150px", mb: 4 }}>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: `${turtlePosition}px`,
//                   bottom: "80px",
//                   transition: "left 0.2s",
//                 }}
//               >
//                 <img src={r2} alt="Turtle" style={{ width: "100px" }} />
//               </Box>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: `${rabbitPosition}px`,
//                   bottom: "0",
//                   transition: "left 0.2s",
//                 }}
//               >
//                 <img
//                   src={rabbitImage}
//                   alt="Rabbit"
//                   style={{ width: "100px" }}
//                 />
//               </Box>
//             </Box>

//             <Box sx={{ margin: "10px" }}>
//               {!raceStarted && ( // Show the start button if race hasn't started
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={startRace}
//                   style={{ marginRight: "10px" }}
//                 >
//                   Start Race
//                 </Button>
//               )}

//               {raceOver ? (
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => setOpenDialog(true)}
//                   style={{ marginTop: "0px" }}
//                 >
//                   Show Result
//                 </Button>
//               ) : (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={advanceTurtle}
//                   disabled={raceOver || !raceStarted} // Disable button if race hasn't started
//                 >
//                   Move Turtle
//                 </Button>
//               )}
//             </Box>

//             {raceOver && (
//               <Dialog
//                 open={openDialog}
//                 onClose={() => setOpenDialog(false)}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//               >
//                 <Box sx={{ padding: 2 }}>
//                   <Typography
//                     gutterBottom
//                     color="#00FF00"
//                     sx={{
//                       fontFamily: "Montserrat, sans-serif",
//                       fontWeight: 700,
//                       fontSize: "2rem",
//                     }}
//                   >
//                     Turtle and Rabbit Race
//                   </Typography>
//                   <Typography
//                     textAlign="center"
//                     sx={{
//                       fontFamily: "Montserrat, sans-serif",
//                       fontWeight: 300,
//                       fontSize: "1.5rem",
//                     }}
//                   >
//                     {winner}
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       onClick={resetRace}
//                       style={{ marginTop: "10px" }}
//                     >
//                       Restart Race
//                     </Button>
//                   </Box>
//                 </Box>
//               </Dialog>
//             )}
//           </Container>
//         </Box>
//       )}
//     </>
//   );
// };

// export default TurtleRabbit;
