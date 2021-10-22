"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("react-bootstrap/Breadcrumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  config.listProps = _objectSpread(_objectSpread({}, config.listProps), {}, {
    className: config.listProps && config.listProps.className ? config.listProps.className + " mb-0" : "mb-0"
  });
  config.container = config.container ? config.container : "true";
  return config.links ? /*#__PURE__*/_react.default.createElement("div", {
    className: "Breadcrumbs"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: config.wrapperClass ? config.wrapperClass : "bg-faded py-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "\n                        ".concat(config.innerWrapperClass ? config.innerWrapperClass : "py-1", "\n                        ").concat(config.container ? "container" : "px-3", "\n                        ")
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, {
    listProps: config.listProps
  }, config.links && config.links.map(function (link, idx) {
    return /*#__PURE__*/_react.default.createElement(_Breadcrumb.default.Item, {
      href: link.href,
      linkAs: config.linksAs,
      linkProps: link,
      key: idx
    }, link.text);
  }))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

var _default = Breadcrumbs;
exports.default = _default;