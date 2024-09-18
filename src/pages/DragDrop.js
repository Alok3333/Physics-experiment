import React, { useState } from "react";
import dragStyle from "../virtuallabcss/Drag.module.css";
import img1 from "../assets/Simple_light_bulb_graphic.png";
import img2 from "../assets/bulb.jpeg";
import img3 from "../assets/volt-meter.jpeg";

const DragDrop = () => {
  const [availableImages, setAvailableImages] = useState([
    img1,
    img2,
    img3,
  ]);
  const [droppedImages, setDroppedImages] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);
  const [isDropZone, setIsDropZone] = useState(false);

  const handleDragStart = (image) => {
    setDraggedImage(image);
  };

  const handleDropImage = (event) => {
    event.preventDefault();
    if (isDropZone && draggedImage) {
      // Dropping into the drop zone
      setDroppedImages((prevImages) => [...prevImages, draggedImage]);
      setAvailableImages((prevImages) =>
        prevImages.filter((img) => img !== draggedImage)
      );
    } else if (!isDropZone && draggedImage) {
      // Dropping back into available images
      setAvailableImages((prevImages) => [...prevImages, draggedImage]);
      setDroppedImages((prevImages) =>
        prevImages.filter((img) => img !== draggedImage)
      );
    }
    setDraggedImage(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDropZone(true);
  };

  const handleDragLeave = () => {
    setIsDropZone(false);
  };

  return (
    <div className={dragStyle.containerWrapper}>
      <h1>Drag and Drop Images</h1>
      <div className={dragStyle.container}>
        <h2>Available Images</h2>
        <div className={dragStyle.imageContainer}>
          {availableImages.map((image) => (
            <div
              key={image}
              draggable
              onDragStart={() => handleDragStart(image)}
              onDragEnd={() => setDraggedImage(null)} // Clear dragged image on drag end
              className={dragStyle.imageItem}
            >
              <img src={image} alt={image} width={100} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={dragStyle.dropZone}
        onDrop={handleDropImage}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <h2>Drop Here</h2>
        <div className={dragStyle.imageContainer}>
          {droppedImages.map((image) => (
            <div key={image} className={dragStyle.imageItem}>
              <img src={image} alt={image} width={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragDrop;


