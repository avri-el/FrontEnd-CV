import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import { useSpring, animated } from "@react-spring/web";
import React from "react";

const Skill = () => {
  const [skill, setSkill] = useState({});
  const [images, setImages] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Animasi fade-in untuk kontainer
  const fadeIn = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(-50px)",
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    const skillRef = ref(database, "skill/");
    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      setSkill(data);
    });

    const imagesRef = ref(database, "images/");
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data);
    });

    // Set loaded setelah data Firebase selesai diambil
    setLoaded(true);
  }, []);

  return (
    <animated.div style={fadeIn} className="container3">
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
    </animated.div>
  );
};

export default Skill;
