import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";

const Footer = () => {
  const [links, setLinks] = useState({});

  useEffect(() => {
    const linksRef = ref(database, "links/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(linksRef, (snapshot) => {
      const data = snapshot.val();
      setLinks(data);
    });
  }, []);

  return (
    <footer>
      <div className="social-links">
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={links.ig} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <a href="mailto:parengkuanavriel@gmail.com">Contact Me via Email</a>
      <p>© 2024 Avriel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
