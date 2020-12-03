"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingScreen;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  };
});

function LoadingScreen(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Backdrop, {
    className: classes.backdrop,
    open: true
  }, /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
    color: "inherit",
    disableShrink: true
  }));
}