var React = require("react");
var ReactDOM = require("react-dom");
var style = require("./app.css");
// var cihuy = require('./cihuy.jsx');
import { cihuy, navbar } from "./component/Navbar.jsx";

ReactDOM.render(
  <div>
    {navbar}
    {cihuy}
  </div>,
  document.getElementById("root")
);
