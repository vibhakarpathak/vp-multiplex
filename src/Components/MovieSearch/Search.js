import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';

import './Search.css';

const Search = () => {
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');

  const triggerSearch = (event) => {
    event.preventDefault();
    setSearchTriggered(true);
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSearchTriggered(false);
  }

  return (
    <>
      <div id="search-container" className="col-10 col-md-8 col-xl-6 mx-auto clearfix">
        <Form className="clearfix d-flex" onSubmit={triggerSearch}>
          <div className="float-left">
            <Dropdown>
              <Dropdown.Toggle variant="success" className="dropdown-button">
                {category}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className={category === "All" ? "active" : ""} onClick={() => setCategory('All')}>All</Dropdown.Item>
                <Dropdown.Item className={category === "Movies" ? "active" : ""} onClick={() => setCategory('Movies')}>Movies</Dropdown.Item>
                <Dropdown.Item className={category === "Series" ? "active" : ""} onClick={() => setCategory('Series')}>Series</Dropdown.Item>
                <Dropdown.Item className={category === "Episodes" ? "active" : ""} onClick={() => setCategory('Episodes')}>Episodes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="search-box float-left w-100">
            <Form.Control type="text"
              placeholder="Search a Movie..."
              onChange={handleSearch} />
            <Button onClick={triggerSearch}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
          </div>
        </Form>
        {
          searchTriggered && searchQuery && searchTriggered && <Redirect to={`/search/${category.toLowerCase()}/${searchQuery}`} push />
        }
      </div>
    </>
  )
}

export default Search;