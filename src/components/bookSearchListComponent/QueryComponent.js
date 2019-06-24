import React from "react";
import PropTypes from "prop-types";

const QueryComponent = props => (
  <div className="row">
    <div className="col-sm">
      <center>
        <div class="input-group mb-3">
          <label for="book-query">Search Google's Book Catalog</label>
          <input type="text" class="form-control" id="book-query" placeholder='Search by Title or Author' style={{width: '35%'}} />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </center>
    </div>
  </div>
);

export default QueryComponent;
