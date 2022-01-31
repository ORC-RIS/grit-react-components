"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var NavigationBar = function NavigationBar(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "NavigationBar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-navigation-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    collapseOnSelect: true,
    className: "main-navigation ".concat(config.overlapContent ? "overlap-content" : ""),
    onSelect: config.onSelect,
    fixed: config.fixed,
    expand: config.expand,
    expanded: config.expanded
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(NavbarBrand, config.brand), config.links && /*#__PURE__*/_react.default.createElement(NavbarToggle, null), config.links && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "navbarScroll"
  }, /*#__PURE__*/_react.default.createElement(MainNav, {
    links: config.links,
    linksAs: config.linksAs,
    linksClick: config.linksClick
  }))))));
};

var MainNav = function MainNav(_ref2) {
  var _ref2$links = _ref2.links,
      links = _ref2$links === void 0 ? [] : _ref2$links,
      linksAs = _ref2.linksAs,
      _ref2$linksClick = _ref2.linksClick,
      linksClick = _ref2$linksClick === void 0 ? function () {} : _ref2$linksClick;
  console.log(linksClick);
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "main-nav",
    as: "ul",
    activeKey: ""
  }, links && links.map(function (link, idx) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Item, {
      as: "li",
      key: idx
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, _extends({
      eventKey: idx,
      as: linksAs,
      onClick: function onClick() {
        typeof linksClick === "function" && linksClick();
      }
    }, link), link.text));
  }));
};

var NavbarBrand = function NavbarBrand(props) {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, props, props.content);
};

var NavbarToggle = function NavbarToggle() {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-text"
  }, "Navigation"), /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon ml-2"
  }));
};

var _default = NavigationBar;
exports.default = _default;