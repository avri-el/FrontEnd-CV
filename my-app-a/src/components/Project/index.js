import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";

const Project = () => {
  const [project, setProject] = useState({});
  const [links, setLinks] = useState({});

  useEffect(() => {
    const projectRef = ref(database, "project/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });

    const linksRef = ref(database, "links/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(linksRef, (snapshot) => {
      const data = snapshot.val();
      setLinks(data);
    });
  }, []);

  return (
    <div className="container4">
      <div className="project">
        <h1>{project.title}</h1>
        <div className="content">
          <div className="git">
            <p>{project.pgit}</p>
            <a href={links.git} target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub Logo"
              />
              @avri-el
            </a>
          </div>
          <br />
          <br />
          <div className="design">
            <p>{project.ppint}</p>
            <a href={links.pin} target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                alt="Pinterest Logo"
              />
              @rovulettas
            </a>
          </div>
          <br />
          <br />
          <div className="carrd">
            <p>{project.pcarrd}</p>
            <a href={links.carrd} target="_blank" rel="noreferrer">
              <img
                src="https://carrd.co/assets/docs/images/brand/svg/icon-color.svg"
                alt="Carrd Logo"
              />
              avriel's carrd
            </a>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/736x/ef/40/c2/ef40c2a1f0a43ad29fb2b516df115201.jpg"
          alt="Project Image"
          className="project-image"
        />
      </div>
    </div>
  );
};

export default Project;
