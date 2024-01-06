import React from "react";
import MainView from "../../components/MainView";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const DefaultPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainView />
    </>
  );
};

export default DefaultPage;
