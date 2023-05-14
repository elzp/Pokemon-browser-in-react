"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("../App");
var rootElement = document.getElementById('root');
// explanation for usage of "!" https://stackoverflow.com/questions/63520680/argument-of-type-htmlelement-null-is-not-assignable-to-parameter-of-type-el 
var root = client_1.createRoot(rootElement);
root.render(React.createElement(react_1.StrictMode, null,
    React.createElement(App_1["default"], null)));
