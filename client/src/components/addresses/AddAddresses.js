import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchAddresses from './SearchAddresses';
import ManualAddresses from './ManualAddresses';

const Search = ({  setAlert }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [manual, setManual] = useState(false);

  

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

  return (
    <div className="container">
      <form onSubmit={onSubmit} action="" className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter New Address Name"
          value={name}
          onChange={onChange}
        />
        <label htmlFor="quickform">Fill In Form Quickly</label>
         <input
          type="text"
          name="quickform"
          placeholder="Enter Postcode"
          value={text}
          onChange={onChange}
        />

        Or
        
        
            <ManualAddresses manual={manual} setManual={setManual} />
        
      </form>
      
    </div>
  );
};

Search.propTypes = {
  
  setAlert: PropTypes.func.isRequired,
};

export default Search;