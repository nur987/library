import React, { useState, useEffect } from "react";
import logo from "./assets/book.png";

import "./App.css";
import { Rating } from "@mui/material";
function App() {
  const [datas, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((response) => response.json())
      .then((data) => setData(data.books));
  }, []);
  console.log(datas.sort());
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <div className="countBooks">{datas.length}</div>
              <img src={logo} alt="logo" className="logoimg mx-2" />
              Library
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        byAlphabet
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" tabindex="-1">
                    Disabled
                  </a>
                </li>
              </ul>
              <input
                value={searchKey}
                onChange={(e) => {
                  setSearchKey(e.target.value);
                }}
                type="text"
                className="form-control inputSearch"
                placeholder="Search books by title"
              />
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className="mainRun">
          {datas
            .filter((obj) => obj.title.toLowerCase().includes(searchKey))
            .map((x, key) => {
              return (
                <div class="card" id={x.isbn13}>
                  <a href={x.url}>
                    <p class="card-title">{x.title}</p>
                  </a>
                  <img src={x.image} class="card-img-top" alt={x.title} />
                  <div class="card-body">
                    <p class="card-text">{x.subtitle}</p>
                    <div className="row price">
                      <div className="col">
                        <h5>{x.price}</h5>
                      </div>
                      <div className="col">
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default App;
