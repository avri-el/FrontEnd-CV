import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";

const Footer = () => {
  const [project, setProject] = useState({});

  useEffect(() => {
    const projectRef = ref(database, "project/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });
  }, []);

  return (
    <footer>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/avriel-parengkuan-09257b317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/el.avie"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
      <a href="mailto:parengkuanavriel@gmail.com">Contact Me via Email</a>
      <p>© 2024 Avriel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
