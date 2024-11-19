import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [header, setHeader] = useState({});
  const [images, setImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headerRef = ref(database, "header/");
        onValue(headerRef, (snapshot) => {
          const data = snapshot.val();
          if (data) setHeader(data);
        });

        const imagesRef = ref(database, "images/");
        onValue(imagesRef, (snapshot) => {
          const data = snapshot.val();
          if (data) setImages(data);
        });
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Fade>
      <div className="container1">
        <div className="header">
          <span>PORTFOLIO</span>
          <span className="header-date">2024 &nbsp; | &nbsp; 14 Nov</span>
        </div>

        <div className="title">
          <h1>{header.title1}</h1>
          <h6>{header.title2}</h6>
          {images.header && (
            <div className="images">
              <img
                src={`data:image/jpeg;base64, ${images.header}`}
                alt={header.title1}
              />
            </div>
          )}
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
