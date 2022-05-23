import React from "react";
import AppText from "./AppText";
const ErrorMsg = ({ err }) => {
  return (
    <>
      <AppText style={{ color: "red" }}>{err}</AppText>
    </>
  );
};

export default ErrorMsg;
