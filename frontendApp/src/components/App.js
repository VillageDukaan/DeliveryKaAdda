import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage.jsx";
import Header from "./common/Header.jsx";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./common/Footer.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;
