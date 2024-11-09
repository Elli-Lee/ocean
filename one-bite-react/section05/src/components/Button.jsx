const Button = ({ text, color, children }) => {
  const onClickButtion = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickButtion} style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
