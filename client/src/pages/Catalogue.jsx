import React, { useState, useEffect } from "react";
import "../components/product.css";
import Carousel from "react-material-ui-carousel";
import Product from "../components/product";
import { useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import { CustomButton } from "../components";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo10.png";
import photo5 from "../assets/photo11.png";
import photo6 from "../assets/photo6.png";
import photo7 from "../assets/photo7.png";
import photo8 from "../assets/photo8.png";
import photo9 from "../assets/photo9.png";
import Recd from "../components/rec/recommended";

const Catalogue = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/customize");
  };

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
    <div>
      <div className="navbar">
        <div className='' id="logo">StyleVerse</div>
        <div className='nav-links' id="user-greeting">Hi, eshan1925</div>
        <div className="nav-links btn-prat">My Orders</div>
        <div className="nav-links btn-prat">My Cart</div>
        <div className="nav-links btn-prat" onClick={navigateToHome}>Customize</div>
      </div>
      <div className="App">
        <div className="Trends">
          <h2>Latest trends in the fashion world!</h2>
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
      <div className="button-centering">
        <CustomButton
          type="filled"
          title="Customize your own Tee!!"
          handleClick={navigateToHome}
          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
        />
      </div>

      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  );
};


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

export default Catalogue;
