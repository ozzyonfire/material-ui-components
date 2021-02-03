"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _router = require("next/router");

var _link = _interopRequireDefault(require("next/link"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NextComposed = /*#__PURE__*/_react["default"].forwardRef(function NextComposed(props, ref) {
  var as = props.as,
      href = props.href,
      other = _objectWithoutProperties(props, ["as", "href"]);

  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: href,
    as: as
  }, /*#__PURE__*/_react["default"].createElement("a", _extends({
    ref: ref
  }, other)));
});

NextComposed.propTypes = {
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  prefetch: _propTypes["default"].bool
}; // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  var href = props.href,
      _props$activeClassNam = props.activeClassName,
      activeClassName = _props$activeClassNam === void 0 ? 'active' : _props$activeClassNam,
      classNameProps = props.className,
      innerRef = props.innerRef,
      naked = props.naked,
      other = _objectWithoutProperties(props, ["href", "activeClassName", "className", "innerRef", "naked"]);

  var router = (0, _router.useRouter)();
  var pathname = typeof href === 'string' ? href : href.pathname;
  var className = (0, _clsx2["default"])(classNameProps, _defineProperty({}, activeClassName, router.pathname === pathname && activeClassName));

  if (naked) {
    return /*#__PURE__*/_react["default"].createElement(NextComposed, _extends({
      className: className,
      ref: innerRef,
      href: href
    }, other));
  }

  return /*#__PURE__*/_react["default"].createElement(_Link["default"], _extends({
    component: NextComposed,
    className: className,
    ref: innerRef,
    href: href
  }, other));
}

Link.propTypes = {
  activeClassName: _propTypes["default"].string,
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  className: _propTypes["default"].string,
  href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  naked: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  prefetch: _propTypes["default"].bool
};

var _default = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Link, _extends({}, props, {
    innerRef: ref
  }));
});

exports["default"] = _default;