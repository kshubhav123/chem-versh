import React from "react";
import History from "../../screens/aboutUs/History";
import Values from "../../screens/aboutUs/Values";
import Mission from "../../screens/aboutUs/Mission";
import Leaders from "../../screens/aboutUs/Leaders";
import MainPage from "../../screens/aboutUs/MainPage";
import CountryBub from "../../screens/aboutUs/ContryBuble";


function page() {
  return (
    <>
      <MainPage />
      <History />
      <CountryBub />
      <Mission />
      <Values />
      <Leaders />
    </>
  );
}

export default page;
