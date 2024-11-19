import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  const [project, setProject] = useState({});
  const [links, setLinks] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    const projectRef = ref(database, "project/");
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });

    const linksRef = ref(database, "links/");
    onValue(linksRef, (snapshot) => {
      const data = snapshot.val();
      setLinks(data);
    });

    const imagesRef = ref(database, "images/");
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data);
    });
  }, []);

  return (
    <Fade>
      <div className="container4">
        <div className="project">
          <h1>{project.title}</h1>
          <div className="content">
            <div className="git">
              <p>{project.pgit}</p>
              <a href={links.git} target="_blank" rel="noreferrer">
                <img src={links.logo_github} alt="GitHub Logo" />
                @avri-el
              </a>
            </div>
            <br />
            <br />
            <div className="design">
              <p>{project.ppint}</p>
              <a href={links.pin} target="_blank" rel="noreferrer">
                <img src={links.logo_pin} alt="Pinterest Logo" />
                @rovulettas
              </a>
            </div>
            <br />
            <br />
            <div className="carrd">
              <p>{project.pcarrd}</p>
              <a href={links.carrd} target="_blank" rel="noreferrer">
                <img src={links.logo_carrd} alt="Carrd Logo" />
                avriel's carrd
              </a>
            </div>
          </div>
          <img
            src={images.project}
            alt="Project Image"
            className="project-image"
          />
        </div>
      </div>
    </Fade>
  );
};

export default Project;
