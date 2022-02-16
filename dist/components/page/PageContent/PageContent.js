"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _narrowClass = _interopRequireDefault(require("../../../narrowClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContent = function PageContent(_ref) {
  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PageContent"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "mt-4 mt-lg-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "".concat(config.narrow ? "justify-content-center" : "justify-content-between")
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    className: "".concat(config.narrow && _narrowClass.default, " ").concat(config.sidebar && "col-lg-8 pr-lg-5")
  }, /*#__PURE__*/_react.default.createElement(PageContentWrapper, null, children)), config.sidebar && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    lg: 4,
    className: "pl-lg-5"
  }, /*#__PURE__*/_react.default.createElement(SidebarContentWrapper, null, config.sidebar)))));
};

var PageContentWrapper = function PageContentWrapper(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PageContentWrapper mb-4 mb-lg-5"
  }, children);
};

var SidebarContentWrapper = function SidebarContentWrapper(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "SidebarContentWrapper mb-4 mb-lg-5"
  }, children);
};

var _default = PageContent;
exports.default = _default;