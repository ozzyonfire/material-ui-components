"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Main;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _head = _interopRequireDefault(require("next/head"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MainContainer = (0, _styles.withStyles)(function (theme) {
  var _root;

  return {
    root: (_root = {}, _defineProperty(_root, theme.breakpoints.down('sm'), {
      padding: theme.spacing(1),
      paddingTop: 75
    }), _defineProperty(_root, theme.breakpoints.up('md'), {
      paddingTop: 75,
      padding: theme.spacing(2)
    }), _defineProperty(_root, '@media print', {
      paddingTop: 0,
      fontSize: '10px important!'
    }), _root)
  };
})(_Container["default"]);

function Main(props) {
  var _props$pageTitle = props.pageTitle,
      pageTitle = _props$pageTitle === void 0 ? 'Warehouse' : _props$pageTitle,
      children = props.children,
      other = _objectWithoutProperties(props, ["pageTitle", "children"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, pageTitle)), /*#__PURE__*/_react["default"].createElement(MainContainer, other, children));
}