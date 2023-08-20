import React, { useState, useEffect } from "react";
import "./App.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Recd from "./rec/recommended";
import photo1 from "./photo1.png";
import photo2 from "./photo2.png";
import photo3 from "./photo3.png";
import photo4 from "./photo10.png";
import photo5 from "./photo11.png";
import photo6 from "./photo6.png";
import photo7 from "./photo7.png";
import photo8 from "./photo8.png";
import photo9 from "./photo9.png";

function App() {
  const allItems = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // const displayedItems = allItems.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % allItems.length); // Increase by 2
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="Trends">
        <h1>Latest trends in the fashion world!</h1>
        <Carousel
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          timeout={null} // Disable auto-play
          navButtonsProps={{
            style: { backgroundColor: "black", color: "white" },
          }} // Adjust nav buttons style
        >
          {allItems.map((_, index) => (
            <Item key={index} images={allItems} startingIndex={index} />
          ))}
        </Carousel>
      </div>
      <div className="Recommended">
        <h1>Our recommendations for you, based on what you like</h1>
        <Recd />
      </div>
    </div>
  );
}

function Item(props) {
  const { images, startingIndex } = props;
  console.log(images.length);
  let imagesToDisplay = images.slice(5, 8);
  if (startingIndex > 5) {
    imagesToDisplay = images.slice(startingIndex % 5, (startingIndex % 5) + 3);
  } else {
    imagesToDisplay = images.slice(startingIndex, startingIndex + 3);
  }

  return (
    <Paper style={{ width: "100%", margin: "0 10px", height: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        {imagesToDisplay.map((image, index) => (
          <div
            key={index}
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt="Fashion"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </Paper>
  );
}

export default App;
