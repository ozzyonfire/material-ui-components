"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingButton;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LoadingButton(props) {
  var _props$spinnerColor = props.spinnerColor,
      spinnerColor = _props$spinnerColor === void 0 ? 'primary' : _props$spinnerColor,
      loading = props.loading,
      spinnerProps = props.spinnerProps,
      children = props.children,
      other = _objectWithoutProperties(props, ["spinnerColor", "loading", "spinnerProps", "children"]);

  return /*#__PURE__*/_react["default"].createElement(_core.Button, other, loading === true ? /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, _extends({
    size: 20,
    color: spinnerColor
  }, spinnerProps)) : children);
}