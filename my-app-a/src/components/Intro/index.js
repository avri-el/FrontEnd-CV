import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  const [Intro, setIntro] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    const IntroRef = ref(database, "Intro/");
    onValue(IntroRef, (snapshot) => {
      const data = snapshot.val();
      setIntro(data);
    });
    const imagesRef = ref(database, "images/");
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data);
    });
  }, []);

  return (
    <Fade>
      <div className="container2">
        <div className="intro">
          <h1>{Intro.title}</h1>
        </div>
        <div className="content">
          <p>{Intro.paragraf}</p>
          <div className="images2">
            <img
              src={`data:image/jpeg;base64, ${images.intro}`}
              alt="Image 2"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Intro;
