import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";

const Intro = () => {
  const [Intro, setIntro] = useState({});

  useEffect(() => {
    const IntroRef = ref(database, "Intro/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(IntroRef, (snapshot) => {
      const data = snapshot.val();
      setIntro(data);
    });
  }, []);

  return (
    <div className="container2">
      <div className="intro">
        <h1>{Intro.title}</h1>
      </div>
      <div className="content">
        <p>{Intro.paragraf}</p>
        <div className="images2">
          <img src="/img/el.jpg" alt="Image 2" />
        </div>
      </div>
    </div>
  );
};
export default Intro;
