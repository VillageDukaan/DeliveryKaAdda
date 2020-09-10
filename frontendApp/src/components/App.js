import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
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
import DeliveryBoyApplication from "./Application/DeliveryBoyApplication.jsx";

function App() {
  return (
    <Provider store={store}>
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
          <Route
            exact
            path="/delivery-person-application"
            component={DeliveryBoyApplication}
          />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
        <ToastContainer autoClose={3000} />
      </div>
    </Provider>
  );
}

export default App;
