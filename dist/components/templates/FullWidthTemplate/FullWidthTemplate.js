"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PageFooter = _interopRequireDefault(require("../../page/PageFooter/PageFooter"));

var _PageHeader = _interopRequireDefault(require("../../page/PageHeader/PageHeader"));

var _PageNavigation = _interopRequireDefault(require("../../page/PageNavigation/PageNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullWidthTemplate = function FullWidthTemplate(_ref) {
  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PageHeader.default, {
    config: config.pageHeader
  }), /*#__PURE__*/_react.default.createElement(_PageNavigation.default, {
    config: config.pageNavigation
  }), children, /*#__PURE__*/_react.default.createElement(_PageFooter.default, {
    config: config.pageFooter
  }));
};

var _default = FullWidthTemplate;
exports.default = _default;