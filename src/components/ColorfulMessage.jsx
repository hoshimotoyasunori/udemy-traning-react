import React from "react";

// const ColorfulMessage = (props) => {
//   //分割代入
//   const { color, children } = props;
//   const contentStyle = {
//     color,
//     fontSixe: "18px",
//   };
//   //   return <p style={contentStyle}>{props.message}</p>;
//   return <p style={contentStyle}>{children}</p>;
// };

// export default ColorfulMessage;

export const ColorfulMessage = (props) => {
  //分割代入
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSixe: "18px",
  };
  //   return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};
