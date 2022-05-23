import React from "react";
import AppText from '../component/AppText';

const ErrorScreen = ({ error }) => {
  return (
    <>
      <AppText >{error}</AppText>
    </>
  );
};

export default ErrorScreen;