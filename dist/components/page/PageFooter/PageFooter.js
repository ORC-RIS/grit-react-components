"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageFooter = function PageFooter(_ref) {
  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      _ref$setAppContext = _ref.setAppContext,
      setAppContext = _ref$setAppContext === void 0 ? function () {} : _ref$setAppContext;
  return !config.hide && /*#__PURE__*/_react.default.createElement("div", {
    className: "PageFooter"
  }, children);
};

var _default = PageFooter;
exports.default = _default;