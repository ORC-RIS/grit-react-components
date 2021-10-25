"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UcfFooter = function UcfFooter() {
  var ucfFooterClass = ["ucf-footer", "bg-inverse-t-3", "text-white", "py-4", "py-lg-5"].join(" ");
  var ucfFooterTitleClass = ["ucf-footer-title", "text-uppercase", "letter-spacing-5", "text-white", "d-inline-block", "mb-4"].join(" ");
  var ucfFooterAddressClass = ["ucf-footer-address", "small", "mb-0"].join(" ");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ucfFooterClass,
    "aria-label": "University of Central Florida footer"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: ucfFooterTitleClass,
    href: "https://www.ucf.edu/"
  }, "University of Central Florida"), /*#__PURE__*/_react.default.createElement("p", {
    className: ucfFooterAddressClass
  }, "4000 Central Florida Blvd. Orlando, Florida, 32816 |", " ", /*#__PURE__*/_react.default.createElement("a", {
    rel: "nofollow",
    className: "bg-inverse-link",
    href: "tel:4078232000"
  }, "407.823.2000"), /*#__PURE__*/_react.default.createElement("br", null), "\xA9", " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "bg-inverse-link",
    href: "https://www.ucf.edu/"
  }, "University of Central Florida"))));
};

var _default = UcfFooter;
exports.default = _default;