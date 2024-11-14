const Project = () => {
  return (
    <div className="project">
      <h1>PROJECT</h1>
      <div className="content">
        <div className="git">
          <p>You can visit my Github for the project:</p>
          <a href="https://github.com/avri-el" target="_blank" rel="noreferrer">
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
          <a href="https://seabed-a.carrd.co/" target="_blank" rel="noreferrer">
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
  );
};

export default Project;
