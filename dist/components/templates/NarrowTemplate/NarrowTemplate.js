"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PageContent = _interopRequireDefault(require("../../page/PageContent/PageContent"));

var _PageFooter = _interopRequireDefault(require("../../page/PageFooter/PageFooter"));

var _PageHeader = _interopRequireDefault(require("../../page/PageHeader/PageHeader"));

var _PageNavigation = _interopRequireDefault(require("../../page/PageNavigation/PageNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NarrowTemplate = function NarrowTemplate(_ref) {
  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      _ref$setAppContext = _ref.setAppContext,
      setAppContext = _ref$setAppContext === void 0 ? function () {} : _ref$setAppContext;
  (0, _react.useEffect)(function () {
    setAppContext({
      narrowContent: true
    });
  }, [setAppContext]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PageHeader.default, {
    config: config.pageHeader
  }), /*#__PURE__*/_react.default.createElement(_PageNavigation.default, {
    config: config.pageNavigation
  }), /*#__PURE__*/_react.default.createElement(_PageContent.default, {
    config: config.pageContent
  }, children), /*#__PURE__*/_react.default.createElement(_PageFooter.default, {
    config: config.pageFooter
  }));
};

var _default = NarrowTemplate;
exports.default = _default;