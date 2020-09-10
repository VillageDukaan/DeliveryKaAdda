import React, { useState, useEffect } from "react";
import { postWithAuth, isAuthenticated } from "../../api";
import Application from "../../assets/images/application.png";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import SubHeader from "../common/SubHeader.jsx";
import ApplicationForm from "./ApplicationForm.jsx";

const DeliveryBoyApplication = () => {
  const [values, setValues] = useState({
    city: "",
    name: "",
    summary: "",
    imageCover: "",
    price: "",
    travelDistance: "short",
    phone: "",
    user: isAuthenticated().data.user._id,
    formData: "",
    loading: false,
    selectedLocation: {
      description: "",
      coordinates: [],
    },
    foundLocation: false,
    error: "",
  });

  const [location, setLocation] = useState({
    selectedLocation: {
      description: "",
      type: "Point",
      coordinates: [],
    },
  });

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value =
      name === "imageCover" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  // const { selectedLocation } = location;
  const provider = new OpenStreetMapProvider();

  const clickSearch = async (event) => {
    event.preventDefault();
    const results = await provider.search({ query: city });
    console.log(results);
    setValues({
      ...values,
      selectedLocation: {
        description: results[0].label,
        coordinates: [results[0].x, results[0].y],
      },
      foundLocation: true,
    });
    console.log("formData", values);
  };

  const {
    name,
    summary,
    formData,
    city,
    phone,
    user,
    travelDistance,
    price,
    selectedLocation,
    foundLocation,
  } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true });

    console.log("value final", values);
    const uri = "boys";

    console.log("Values", values);

    postWithAuth(formData, uri).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, name: "" });
      }
    });
  };

  return (
    <div>
      <SubHeader
        heading="Application"
        image={Application}
        img_size="util-image-height-small"
      />

      <div className="form__container">
        <ApplicationForm
          selectedLocation={selectedLocation}
          description={selectedLocation.description}
          coordinates={selectedLocation.coordinates}
          foundLocation={foundLocation}
          name={name}
          phone={phone}
          price={price}
          location={selectedLocation.description}
          handleChange={handleChange}
          clickSubmit={clickSubmit}
          clickSearch={clickSearch}
          user={user}
          summary={summary}
          travelDistance={travelDistance}
        />
      </div>
    </div>
  );
};

export default DeliveryBoyApplication;
