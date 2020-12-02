"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _styles = require("@material-ui/core/styles");

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _CropFree = _interopRequireDefault(require("@material-ui/icons/CropFree"));

var _Store = _interopRequireDefault(require("@material-ui/icons/Store"));

var _ViewList = _interopRequireDefault(require("@material-ui/icons/ViewList"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _searchBar = _interopRequireDefault(require("./searchBar"));

var _Link = _interopRequireDefault(require("../src/Link"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _proDuotoneSvgIcons = require("@fortawesome/pro-duotone-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _appBar;

  return {
    appBar: (_appBar = {}, _defineProperty(_appBar, theme.breakpoints.down('sm'), {
      top: 0,
      bottom: 'auto'
    }), _defineProperty(_appBar, theme.breakpoints.up('md'), {
      top: 0,
      bottom: 'auto'
    }), _defineProperty(_appBar, '@media print', {
      display: 'none'
    }), _appBar),
    menuButton: {
      paddingRight: theme.spacing(2)
    },
    list: {
      width: 250
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  };
});

function CollapsableList(props) {
  var classes = useStyles();

  var open = props.open,
      setOpen = props.setOpen,
      header = props.header,
      items = props.items,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/_react["default"].createElement(_ViewList["default"], null) : _props$icon,
      other = _objectWithoutProperties(props, ["open", "setOpen", "header", "items", "icon"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    onClick: function onClick(e) {
      return setOpen(!open);
    }
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, icon), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: header
  }), open ? /*#__PURE__*/_react["default"].createElement(_ExpandLess["default"], null) : /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: "div"
  }, items && items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      button: true,
      component: _Link["default"],
      href: item.href,
      className: classes.nested,
      underline: "none",
      key: index
    }, item.icon && /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, item.icon), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: item.text
    }));
  }))));
}

function FaIcon(props) {
  var icon = props.icon,
      other = _objectWithoutProperties(props, ["icon"]);

  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, _extends({
    icon: icon,
    size: "lg",
    fixedWidth: true
  }, other));
}

function MenuBar(props) {
  var classes = useStyles();
  var isPrinting = (0, _useMediaQuery["default"])('print');

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      drawerOpen = _useState2[0],
      setDrawerOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      orderCollapseOpen = _useState4[0],
      setOrderCollapseOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      productsCollapseOpen = _useState6[0],
      setProductsCollapseOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      reportsCollapseOpen = _useState8[0],
      setReportsCollapseOpen = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      toolsCollapseOpen = _useState10[0],
      setToolsCollapseOpen = _useState10[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: props.className,
    style: {
      display: isPrinting ? 'none' : 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "fixed",
    className: classes.appBar
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    onClick: function onClick() {
      return setDrawerOpen(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)), !props.hideSearchBar && /*#__PURE__*/_react["default"].createElement(_searchBar["default"], null), props.children)), /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.list
  }, /*#__PURE__*/_react["default"].createElement(_List["default"], null, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    component: "a",
    href: "/next"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Search"
  })), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    component: "a",
    href: "/next/putaway"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_CropFree["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Put Away"
  })), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    component: "a",
    href: "/next/store-orders"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Store["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Store Orders"
  })), /*#__PURE__*/_react["default"].createElement(CollapsableList, {
    header: "Orders",
    icon: /*#__PURE__*/_react["default"].createElement(FaIcon, {
      icon: _proDuotoneSvgIcons.faPaste
    }),
    open: orderCollapseOpen,
    setOpen: setOrderCollapseOpen,
    items: [{
      href: "/orders/pick",
      text: 'Pick Orders'
    }, {
      href: "/batches",
      text: 'Scan Batch'
    }, {
      href: "/orders/held",
      text: 'Held Orders'
    }, {
      href: "/orders/create",
      text: 'Create Order'
    }]
  }), /*#__PURE__*/_react["default"].createElement(CollapsableList, {
    header: "Products",
    open: productsCollapseOpen,
    icon: /*#__PURE__*/_react["default"].createElement(FaIcon, {
      icon: _proDuotoneSvgIcons.faPaintBrush
    }),
    setOpen: setProductsCollapseOpen,
    items: [{
      href: '/reports/products',
      text: 'Database'
    }, {
      href: '/products/upload',
      text: 'Upload'
    }, {
      href: '/products/purchase',
      text: 'Purchase'
    }, {
      href: '/products/held',
      text: 'On Hold'
    }]
  }), /*#__PURE__*/_react["default"].createElement(CollapsableList, {
    header: "Reports",
    open: reportsCollapseOpen,
    icon: /*#__PURE__*/_react["default"].createElement(FaIcon, {
      icon: _proDuotoneSvgIcons.faAnalytics
    }),
    setOpen: setReportsCollapseOpen,
    items: [{
      href: '/products/unpicked',
      text: 'Unpicked Items'
    }, {
      href: '/reports/sales-by-manufacturer',
      text: 'Sales by Manufacturer'
    }]
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    onClick: function onClick(e) {
      return window.location = "/orders";
    }
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Back to old view"
  }))))));
}

var _default = MenuBar;
exports["default"] = _default;