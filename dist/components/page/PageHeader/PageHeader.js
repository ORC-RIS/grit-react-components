"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _narrowClass = _interopRequireDefault(require("../../../narrowClass"));

var _AppContext = require("../../context/AppContext/AppContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PageHeader = function PageHeader(_ref) {
  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;

  var _useContext = (0, _react.useContext)(_AppContext.AppContext),
      appContext = _useContext.appContext;

  return !config.hide && /*#__PURE__*/_react.default.createElement("div", {
    className: "PageHeader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "page-header ".concat(appContext.siteNavigationOverlapContent && "navigation-overlap-content", "\n                        ").concat(config.inline && "inline", "\n                        ")
  }, config.backgroundImage && /*#__PURE__*/_react.default.createElement(PageHeaderMedia, {
    backgroundImage: config.backgroundImage
  }), /*#__PURE__*/_react.default.createElement(PageHeaderContent, {
    appContext: appContext,
    buttons: config.buttons,
    subtitle: config.subtitle,
    title: config.title,
    titlePrefix: config.titlePrefix,
    widgets: config.widgets,
    centered: config.centered
  }), children));
};

var PageHeaderMedia = function PageHeaderMedia(_ref2) {
  var backgroundImage = _ref2.backgroundImage;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "page-header-media"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "page-header-image",
    src: backgroundImage,
    alt: "Header background"
  }));
};

var PageHeaderContent = function PageHeaderContent(_ref3) {
  var appContext = _ref3.appContext,
      buttons = _ref3.buttons,
      centered = _ref3.centered,
      subtitle = _ref3.subtitle,
      title = _ref3.title,
      titlePrefix = _ref3.titlePrefix,
      widgets = _ref3.widgets;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "page-header-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "justify-content-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    className: "".concat(appContext.narrowContent && _narrowClass.default)
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "align-items-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    lg: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "row-sy-4 row-sy-lg-5"
  }, (title || subtitle) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "row-sy-3 row-sy-lg-4"
  }, title && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(PageHeaderTitle, {
    centered: centered,
    title: title,
    titlePrefix: titlePrefix
  })), subtitle && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(PageHeaderSubtitle, {
    centered: centered,
    subtitle: subtitle
  })))), /*#__PURE__*/_react.default.createElement(PageHeaderButtons, {
    buttons: buttons
  }))), widgets && widgets.map(function (widget) {
    return widget;
  }))))));
};

var PageHeaderTitle = function PageHeaderTitle(_ref4) {
  var centered = _ref4.centered,
      title = _ref4.title,
      titlePrefix = _ref4.titlePrefix;
  return /*#__PURE__*/_react.default.createElement("h1", {
    className: "page-header-title ".concat(centered && "text-center")
  }, titlePrefix && /*#__PURE__*/_react.default.createElement("span", {
    className: "title-prefix"
  }, titlePrefix), /*#__PURE__*/_react.default.createElement("span", {
    className: "title"
  }, title));
};

var PageHeaderSubtitle = function PageHeaderSubtitle(_ref5) {
  var centered = _ref5.centered,
      subtitle = _ref5.subtitle;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "page-header-subtitle ".concat(centered && "text-center")
  }, subtitle);
};

var PageHeaderButtons = function PageHeaderButtons(_ref6) {
  var buttons = _ref6.buttons;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, buttons && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "row-sy-2 row-sy-lg-3"
  }, buttons.map(function (button, idx) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      xs: 12,
      md: "auto",
      key: idx
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      block: true,
      href: button.href,
      target: button.target,
      variant: idx === buttons.length - 1 ? "primary" : "secondary"
    }, button.text));
  }))));
};

var _default = PageHeader;
exports.default = _default;