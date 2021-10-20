"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("react-bootstrap/Breadcrumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react.default.createElement(MainBread, {
    links: config.links,
    linksAs: config.linksAs
  });
};

var MainBread = function MainBread(_ref2) {
  var _ref2$links = _ref2.links,
      links = _ref2$links === void 0 ? [] : _ref2$links,
      linksAs = _ref2.linksAs;
  return /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null, links && links.map(function (link, idx) {
    return /*#__PURE__*/_react.default.createElement(_Breadcrumb.default.Item, {
      href: link.href,
      linkAs: linksAs,
      linkProps: link,
      key: idx
    }, link.text);
  }));
};

var _default = Breadcrumbs;
exports.default = _default;