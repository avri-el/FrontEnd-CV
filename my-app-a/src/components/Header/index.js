import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [header, setHeader] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    const headerRef = ref(database, "header/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
    const imagesRef = ref(database, "images/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data);
    });
  }, []);

  return (
    <Fade>
      <div className="container1">
        <div className="header">
          <span>PORTFOLIO</span>
          <span style={{ float: "right" }}>2024 &nbsp; | &nbsp; 14 Nov</span>
        </div>
        <div className="title">
          {header.title1} <br />
          <h6>{header.title2}</h6>
          <div className="images">
            <img
              src={`data:image/jpeg;base64, ${images.header}`}
              alt="Image 1"
            />
          </div>
        </div>
        <div className="content">
          <div className="text">
            <p>{header.text}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Header;
