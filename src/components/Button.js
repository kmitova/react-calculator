import React from "react";

const Button = (props) => {
  const { value, updateScreen } = props;
  return (
    <button
      className={isNaN(value) ? "sign-btn btn" : "digit-btn btn"}
      onClick={() => updateScreen(value)}
    >
      {value}
    </button>
  );
};

export default Button;
