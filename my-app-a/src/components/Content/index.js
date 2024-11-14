const Content = ({ text, imageSrc, altText }) => {
  return (
    <div className="content">
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="images2">
        <img src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

export default Content;
