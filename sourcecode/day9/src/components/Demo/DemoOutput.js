import React from "react";

const DemoOutput = (props) => {
  console.log("demo output running");
  return <p>{props.show ? "This is new" : ""}</p>;
};

// after wrap in memo, it memorizes if the props changed or not to re render
export default React.memo(DemoOutput);
