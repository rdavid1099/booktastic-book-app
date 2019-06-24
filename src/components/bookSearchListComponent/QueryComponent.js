import React from "react";
import PropTypes from "prop-types";

const QueryComponent = props => (
  <div className="row">
    <div className="col-sm">
      <center>
        <div className="input-group mb-3">
          <label>Search Google's Book Catalog</label>
          <input
            type="text"
            className="form-control"
            id="book-query"
            placeholder='Search by Title or Author'
            style={{width: '35%'}}
            disabled={props.loading}
            onKeyDown={props.trackQueryState}
          />
          <div className="input-group-append">
            <button className={`btn btn-outline-secondary ${props.loading ? 'disabled' : ''}`} type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </center>
    </div>
  </div>
);

export default QueryComponent;
