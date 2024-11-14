const App = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="index.css" rel="stylesheet" />
      <title>Portfolio</title>
      <div className="container">
        <div className="header">
          <span>PORTFOLIO</span>
          <span style={{ float: "right" }}>2024 &nbsp; | &nbsp; 14</span>
        </div>
        <div className="title">
          Welcome <br />
          <h6>to Avriel's portfolio.</h6>
          <div className="images">
            <img src="ell.jpg" alt="Image 1" />
          </div>
        </div>
        <div className="content">
          <div className="text">
            <p>
              I am a web designer and graphic designer, with a passion for
              creating high-quality work. Here, you can explore a collection of
              projects I've worked on. I strive to deliver the best in every
              project I undertake, with a focus on detail, creativity, and
              innovative solutions. Thank you for visiting, and I hope you find
              something that inspires you!
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="intro">
          <h1>INTRODUCTION</h1>
        </div>
        <div className="content">
          <p>
            i'm Avriel Tirza Priskila Parengkuan, an 18-year-old student at
            Universitas Klabat (Unklab). With a strong interest in design, I am
            constantly exploring new ways to approach challenges creatively.
            This portfolio highlights my journey and the projects I've had the
            opportunity to work on so far. Whether through collaboration or
            independent work, I am dedicated to delivering results that combine
            functionality and creativity.
          </p>
          <div className="images2">
            <img src="el.jpg" alt="Image 2" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="skill">
          <h1>SKILL AND EXPERIENCE</h1>
          <div className="content">
            <p>
              I’m skilled in time management, communication, and adaptability,
              which help me work well in any environment. I have experience in
              English, graphic design, photography, and web design, creating
              visually engaging and functional websites. These skills let me
              take on a wide range of projects confidently and efficiently.
            </p>
            <div className="images3">
              <img src="uv2.jpg" alt="image3" />
            </div>
            <br />
            <p>
              In addition to my technical and creative skills, I have valuable
              experience in organizational settings. I have worked in the
              multimedia division of an organization. I have also participated
              in web design competitions, where I was able to showcase my skills
              in creating innovative and user-friendly web designs.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="project">
          <h1>PROJECT</h1>
          <div className="content">
            <div className="git">
              <p>You can visit my Github for the project:</p>
              <a
                href="https://github.com/avri-el"
                target="_blank"
                rel="noreferrer"
              >
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
              <p>You can visit my pinterest for the media:</p>
              <a
                href="https://pinterest.com/rovulettas"
                target="_blank"
                rel="noreferrer"
              >
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
              <p>And also, you can visit my carrd for more info:</p>
              <a
                href="https://seabed-a.carrd.co/"
                target="_blank"
                rel="noreferrer"
              >
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
      <footer>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/avriel-parengkuan-09257b317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
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
    </div>
  );
};

export default App;
