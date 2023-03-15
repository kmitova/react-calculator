import React from "react";
import Button from "./Button";

const ButtonsContainer = (props) => {
  const { values, updateScreen } = props;

  const buttons = values.map((val) => (
    <Button key={val} value={val} updateScreen={updateScreen} />
  ));
  return <div className="btns-container">{buttons}</div>;
};

export default ButtonsContainer;
