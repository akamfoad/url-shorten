import React from "react";
import Layout from "./components/Layout/Layout";
import Landing from "./components/Landing/Landing";
import Statistic from "./components/Statistic/Statistic";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Layout>
      <Landing />
      <Statistic />
      <Boost />
      <Footer />
    </Layout>
  );
};

export default App;
