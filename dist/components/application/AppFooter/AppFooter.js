"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _UcfFooter = _interopRequireDefault(require("./../../ucf/UcfFooter/UcfFooter"));

var _Colophon = _interopRequireDefault(require("../../partials/Colophon/Colophon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppFooter = function AppFooter(_ref) {
  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "AppFooter"
  }, /*#__PURE__*/_react.default.createElement(_Colophon.default, {
    config: config.colophon
  }), /*#__PURE__*/_react.default.createElement(_UcfFooter.default, null));
};

var _default = AppFooter;
exports.default = _default;