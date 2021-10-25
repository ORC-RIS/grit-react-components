"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Colophon = function Colophon(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-inverse py-4 py-lg-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "row-sy-4"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-primary h4 mb-3 mb-lg-4 font-slab-serif font-weight-normal"
  }, config.entityTitle), /*#__PURE__*/_react.default.createElement("address", null, config.entityAddress), /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0"
  }, config.entityHours)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "h6 heading-underline letter-spacing-3 mb-2 mb-lg-3"
  }, "Sitemap"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled mb-0 row row-sy-lg-2"
  }, config.sitemapLinks && config.sitemapLinks.map(function (link, idx) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: idx,
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: link.href,
      target: link.target,
      className: "text-white py-1 d-inline-block",
      as: config.sitemapLinksAs
    }, link.text));
  }))))));
};

var _default = Colophon;
exports.default = _default;