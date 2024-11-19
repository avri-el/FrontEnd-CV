import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Skill = () => {
  const [skill, setSkill] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    const skillRef = ref(database, "skill/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      setSkill(data);
    });
    const imagesRef = ref(database, "images/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data);
    });
  }, []);

  return (
    <Fade>
      <div className="container3">
        <div className="skill">
          <h1>{skill.title}</h1>
          <div className="content">
            <p>{skill.paragraf1}</p>
            <div className="images3">
              <img
                src={`data:image/jpeg;base64, ${images.uvics}`}
                alt="Image 3"
              />
            </div>
            <br />
            <p>{skill.paragraf2}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Skill;
