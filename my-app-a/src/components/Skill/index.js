import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";

const Skill = () => {
  const [skill, setSkill] = useState({});

  useEffect(() => {
    const skillRef = ref(database, "skill/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      setSkill(data);
    });
  }, []);

  return (
    <div className="container3">
      <div className="skill">
        <h1>{skill.title}</h1>
        <div className="content">
          <p>{skill.paragraf1}</p>
          <div className="images3">
            <img src="/img/uv2.jpg" alt="Image 3" />
          </div>
          <br />
          <p>{skill.paragraf2}</p>
        </div>
      </div>
    </div>
  );
};
export default Skill;
