import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import Draggable from 'react-draggable';

const imageSrc = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'; // Path to your cat image
const rows = 2; // Number of rows in the puzzle
const cols = 2; // Number of columns in the puzzle
const totalPieces = rows * cols;

const createPuzzlePieces = () => {
  const pieces = [];
  for (let i = 0; i < totalPieces; i++) {
    pieces.push({
      id: i,
      correctPosition: i,
      position: i,
      x: Math.floor(i % cols) * 50,
      y: Math.floor(i / cols) * 50,
    });
  }
  return pieces.sort(() => Math.random() - 0.5); // Shuffle pieces
};

const CatPuzzle = () => {
  const [pieces, setPieces] = useState(createPuzzlePieces());
  const [isComplete, setIsComplete] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const checkCompletion = () => {
    if (pieces.every(piece => piece.position === piece.correctPosition)) {
      setIsComplete(true);
      setSnackOpen(true);
    }
  };

  const handleDrop = (pieceId, newPosition) => {
    const updatedPieces = pieces.map(piece =>
      piece.id === pieceId ? { ...piece, position: newPosition } : piece
    );
    setPieces(updatedPieces);
    checkCompletion();
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4">Cat Jigsaw Puzzle</Typography>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        {pieces.map(piece => (
          <Grid item key={piece.id} xs={6} sm={3} md={2}>
            <Draggable
              axis="both"
              bounds={{ left: 0, top: 0, right: 200, bottom: 200 }}
              onStop={(e, data) => handleDrop(piece.id, piece.position)}
              position={{ x: piece.x, y: piece.y }}
            >
              <Card>
                <CardMedia
                  component="img"
                  image={imageSrc}
                  style={{
                    clipPath: `inset(${(piece.position / cols) * 50}px 0 ${50 - (piece.position % cols) * 50}px 0)`,
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Card>
            </Draggable>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={() => setPieces(createPuzzlePieces())} style={{ marginTop: '20px' }}>
        Reset Puzzle
      </Button>
      <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          Congratulations! You completed the puzzle!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CatPuzzle;
