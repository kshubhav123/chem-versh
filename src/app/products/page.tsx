import React from "react";
import MainPage from "../../screens/products/MainPage";
import Content from "../../screens/products/content";
import Products from "../../screens/products/products";

function page() {
  return (
    <>
      <MainPage />
      <div className="mt-[38rem] sm:mt-0">
        <Content />
        <Products />
      </div>
    </>
  );
}

export default page;
