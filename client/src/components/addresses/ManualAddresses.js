import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({  manual, setManual, setAlert }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [town, setTown] = useState("");
  const [county, setCounty] = useState("");
  const [postcode, setPostcode] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  

  const searchUsers = async (text) => {
    console.log(text)
};

  const onChange = (e) => {
    setText({[e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a seach term", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  

  if(!manual) return ( <input
    type="submit"
    className="btn btn-dark btn-block"
    value="Enter Address Info Manually"
    onClick={e => setManual(true)}
/>)
  return (
    <div className="container">
      
        <input
          type="text"
          name="address1"
          placeholder="Enter Address Line 1"
          value={address1}
          onChange={onChange}
        />
        <input
          type="text"
          name="address2"
          placeholder="Enter Address Line 2"
          value={address2}
          onChange={onChange}
        />
        <input
          type="text"
          name="town"
          placeholder="Enter Town/City"
          value={town}
          onChange={onChange}
        />
        <input
          type="text"
          name="county"
          placeholder="Enter County"
          value={county}
          onChange={onChange}
        />

        <input
          type="text"
          name="postcode"
          placeholder="Enter Postcode"
          value={postcode}
          onChange={onChange}
        />
       
        <input
          type="text"
          name="telephone"
          placeholder="Add Telephone"
          value={telephone}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Add Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
        />
    </div>
  );
};

Search.propTypes = {
  manual: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;