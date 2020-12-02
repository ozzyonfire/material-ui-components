"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomDialog;

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CustomDialog(props) {
  var open = props.open,
      onClose = props.onClose,
      title = props.title,
      children = props.children,
      actions = props.actions,
      other = _objectWithoutProperties(props, ["open", "onClose", "title", "children", "actions"]);

  return /*#__PURE__*/React.createElement(_core.Dialog, {
    onClose: onClose,
    open: open
  }, /*#__PURE__*/React.createElement(_core.DialogTitle, null, title), /*#__PURE__*/React.createElement(_core.DialogContent, null, children), actions && /*#__PURE__*/React.createElement(_core.DialogActions, null, actions.map(function (action, index) {
    var title = action.title,
        onClick = action.onClick,
        other = _objectWithoutProperties(action, ["title", "onClick"]);

    return /*#__PURE__*/React.createElement(_Button["default"], _extends({
      key: 'button-' + index,
      onClick: onClick
    }, other), title);
  })));
}