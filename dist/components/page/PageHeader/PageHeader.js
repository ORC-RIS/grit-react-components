"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _narrowClass = _interopRequireDefault(require("../../../narrowClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeader = function PageHeader(_ref) {
  var _config$title;

  var children = _ref.children,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return !config.hide && ((_config$title = config.title) !== null && _config$title !== void 0 ? _config$title : children) ? /*#__PURE__*/_react.default.createElement("div", {
    className: "PageHeader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "page-header ".concat(config.siteNavigationOverlapContent && "navigation-overlap-content", "\n                        ").concat(config.inline && "inline", "\n                        ")
  }, config.backgroundImage && /*#__PURE__*/_react.default.createElement(PageHeaderMedia, {
    backgroundImage: config.backgroundImage
  }), /*#__PURE__*/_react.default.createElement(PageHeaderContent, {
    buttons: config.buttons,
    inline: config.inline,
    narrow: config.narrow,
    subtitle: config.subtitle,
    title: config.title,
    titlePrefix: config.titlePrefix,
    widgets: config.widgets,
    centered: config.centered
  }), children)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
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
  var buttons = _ref3.buttons,
      centered = _ref3.centered,
      inline = _ref3.inline,
      narrow = _ref3.narrow,
      subtitle = _ref3.subtitle,
      title = _ref3.title,
      titlePrefix = _ref3.titlePrefix,
      widgets = _ref3.widgets;
  return (title !== null && title !== void 0 ? title : widgets) && /*#__PURE__*/_react.default.createElement("div", {
    className: "page-header-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "justify-content-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    className: "".concat(narrow && _narrowClass.default)
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
    inline: inline,
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
      inline = _ref4.inline,
      title = _ref4.title,
      titlePrefix = _ref4.titlePrefix;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, titlePrefix && /*#__PURE__*/_react.default.createElement("span", {
    className: "title-prefix ".concat(inline && "inline")
  }, titlePrefix), /*#__PURE__*/_react.default.createElement("h1", {
    className: "page-header-title ".concat(centered && "text-center")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "title"
  }, title)));
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