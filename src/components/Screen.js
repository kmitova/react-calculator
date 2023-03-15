import React from "react";

const Screen = (props) => {
  const { screenExpression } = props;

  return <div className="screen">{screenExpression}</div>;
};

export default Screen;
