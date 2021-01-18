import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import SinglePage from "./SinglePage";
import List from "./List";
import "./style.css";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div class="text-center">
          <Link to="/" class="text-center">
            <img
              width="120"
              className="img-fluid"
              src="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
            />
          </Link>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 p-3 p-md-5">
                <div class="row">
                  <Route path="/" component={List} exact />
                  <Route path="/article/:name" component={SinglePage} />
                  <Route path="/about/" component={About} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
