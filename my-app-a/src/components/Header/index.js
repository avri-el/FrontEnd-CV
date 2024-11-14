const Header = () => {
  return (
    <div className="container1">
      <div className="header">
        <span>PORTFOLIO</span>
        <span style={{ float: "right" }}>2024 &nbsp; | &nbsp; 14</span>
      </div>
      <div className="title">
        Welcome <br />
        <h6>to Avriel's portfolio.</h6>
        <div className="images">
          <img src="/img/ell.jpg" alt="Image 1" />
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
  );
};

export default Header;
