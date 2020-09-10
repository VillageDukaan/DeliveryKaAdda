import React from "react";
import PropTypes from "prop-types";
import TextInput from "./../common/TextInput";
import InputGroup from "../common/InputGroup.jsx";
import { SIGN_UP } from "../common/Strings";

const ApplicationForm = ({
  city,
  foundLocation,
  selectedLocation,
  description,
  coordinates,
  name,
  phone,
  price,
  clickSearch,
  clickSubmit,
  handleChange,
  user,
  summary,
  travelDistance,
}) => (
  <form onSubmit={clickSubmit}>
    <InputGroup
      label="Search place you want to deliver"
      type={"text"}
      onChange={handleChange("city")}
      value={city}
      placeholder="Please enter City/Town/Village"
      onClick={clickSearch}
    />
    <TextInput
      label="Area you Choose"
      type={"text"}
      onChange={handleChange("selectedLocation.description")}
      value={selectedLocation.description}
    />
    <TextInput
      type={"text"}
      onChange={handleChange("selectedLocation.coordinates")}
      value={selectedLocation.coordinates}
    />

    <hr />

    <TextInput
      label={"Upload your Photo"}
      type={"file"}
      onChange={handleChange("imageCover")}
      className={"file-upload"}
      name={"imageCover"}
    />

    <TextInput
      label={SIGN_UP.name_label}
      type={"text"}
      onChange={handleChange("name")}
      value={name}
      placeholder={SIGN_UP.name_placeholder}
    />

    <TextInput
      label={"Please tell us about you"}
      type={"text"}
      onChange={handleChange("summary")}
      value={summary}
      id={"summary"}
      placeholder={"Tell us about you"}
    />

    <TextInput
      label={SIGN_UP.mobile_label}
      type={"number"}
      onChange={handleChange("phone")}
      value={phone}
      id={"phone"}
      placeholder={SIGN_UP.mobile_placeholder}
    />

    <TextInput
      label={""}
      type="hidden"
      defaultValue={user}
      onChange={handleChange("user")}
      name={"user"}
    />

    <TextInput label={""} type="hidden" defaultValue={selectedLocation} />
    <TextInput label={""} type="hidden" defaultValue={travelDistance} />

    <TextInput
      label={"Price per Kilometre"}
      type={"number"}
      onChange={handleChange("price")}
      value={price}
      min={"2"}
      max={"8"}
      placeholder={"Enter your charge per kilometre"}
      id={"price"}
    />

    <button className="btn btn--purple util-margin-top-small">Sign Up</button>
  </form>
);

ApplicationForm.propTypes = {
  city: PropTypes.string.isRequired,
  selectedLocation: PropTypes.string.isRequired,
  foundLocation: PropTypes.bool,
  travelDistance: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  clickSubmit: PropTypes.func.isRequired,
  clickSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ApplicationForm;
