"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactScrollspyNavigation = _interopRequireDefault(require("react-scrollspy-navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNavigation = function PageNavigation(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  var navbarClass = ["navbar-light", "bg-primary", "navbar-toggleable-lg"].filter(function (c) {
    return c;
  }).join(" ");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, config.links && /*#__PURE__*/_react.default.createElement("div", {
    className: "sticky-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "PageNavigation"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    collapseOnSelect: true,
    className: navbarClass,
    expand: "lg"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, config.links.length && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(NavbarToggle, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "pageNavigation"
  }, /*#__PURE__*/_react.default.createElement(MainNav, {
    links: config.links
  }))))))));
};

var MainNav = function MainNav(_ref2) {
  var links = _ref2.links;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "mr-auto nav"
  }, /*#__PURE__*/_react.default.createElement(_reactScrollspyNavigation.default, {
    offsetTop: 61
  }, links.map(function (link, idx) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
      className: [link.class ? link.class : false].filter(function (c) {
        return c;
      }).join(" "),
      href: link.href,
      target: link.target,
      key: idx,
      ref: /*#__PURE__*/_react.default.createRef()
    }, link.text);
  })));
};

var NavbarToggle = function NavbarToggle() {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    className: "d-flex d-lg-none ml-sm-auto w-100 w-sm-auto flex-row align-items-center justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-text"
  }, "Skip to section"), /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon ml-2"
  }));
};

var _default = PageNavigation;
exports.default = _default;