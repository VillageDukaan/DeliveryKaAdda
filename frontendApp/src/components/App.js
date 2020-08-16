import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage.jsx";
import Header from "./common/Header.jsx";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./common/Footer.jsx";
import Signup from "./register/Signup.jsx";
import Signin from "./signin/Signin.jsx";
import SignupUser from "./register/SignupUser.jsx";
import SignupDeliveryBoy from "./register/SignupDeliveryBoy.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ApplicationForm from "./DeliveryPerson/ApplicationForm.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup-user" component={SignupUser} />
        <Route
          exact
          path="/signup-delivery-person"
          component={SignupDeliveryBoy}
        />
        <PrivateRoute exact path="/application" component={ApplicationForm} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
