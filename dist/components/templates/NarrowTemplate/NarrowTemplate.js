"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PageContent = _interopRequireDefault(require("../../page/PageContent/PageContent"));

var _PageFooter = _interopRequireDefault(require("../../page/PageFooter/PageFooter"));

var _PageHeader = _interopRequireDefault(require("../../page/PageHeader/PageHeader"));

var _PageNavigation = _interopRequireDefault(require("../../page/PageNavigation/PageNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NarrowTemplate = function NarrowTemplate(_ref) {
  var _config$pageHeader, _config$pageNavigatio, _config$pageFooter;

  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  var narrow = true;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PageHeader.default, {
    config: _objectSpread({
      narrow: narrow
    }, config.pageHeader)
  }, (_config$pageHeader = config.pageHeader) === null || _config$pageHeader === void 0 ? void 0 : _config$pageHeader.children), /*#__PURE__*/_react.default.createElement(_PageNavigation.default, {
    config: _objectSpread({
      narrow: narrow
    }, config.pageNavigation)
  }, (_config$pageNavigatio = config.pageNavigation) === null || _config$pageNavigatio === void 0 ? void 0 : _config$pageNavigatio.children), /*#__PURE__*/_react.default.createElement(_PageContent.default, {
    config: _objectSpread({
      narrow: narrow
    }, config.pageContent)
  }, children), /*#__PURE__*/_react.default.createElement(_PageFooter.default, {
    config: _objectSpread({
      narrow: narrow
    }, config.pageFooter)
  }, (_config$pageFooter = config.pageFooter) === null || _config$pageFooter === void 0 ? void 0 : _config$pageFooter.children));
};

var _default = NarrowTemplate;
exports.default = _default;