"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppNavigation = _interopRequireDefault(require("./../AppNavigation/AppNavigation"));

var _UcfHeader = _interopRequireDefault(require("./../../ucf/UcfHeader/UcfHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "AppHeader"
  }, /*#__PURE__*/_react.default.createElement(_UcfHeader.default, null), /*#__PURE__*/_react.default.createElement(_AppNavigation.default, {
    config: config.appNavigation
  }));
};

var _default = Header;
exports.default = _default;