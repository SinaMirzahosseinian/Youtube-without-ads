import React from "react";

const Test = () => {
  return (
    <div className=" container input-group ">
      <div className="input-group-prepend ">
        <button className="btn btn-danger" type="button">
          Search
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="what are you looking for ?"
        aria-label=""
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default Test;
