import React, {useState, useCallback, useEffect, useRef} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, fade, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import CropFreeIcon from '@material-ui/icons/CropFree';
import StoreIcon from '@material-ui/icons/Store';
import ViewListIcon from '@material-ui/icons/ViewList';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchBar from './searchBar';
import Link from '../src/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaste,
  faPaintBrush,
  faAnalytics
} from '@fortawesome/pro-duotone-svg-icons';

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.down('sm')]: {
      top: 0,
      bottom: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      top: 0,
      bottom: 'auto'
    },
    '@media print': {
      display: 'none'
    }
  },
  menuButton: {
    paddingRight: theme.spacing(2),
  },
  list: {
    width: 250
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

function CollapsableList(props) {
  const classes = useStyles();
  const { 
    open, 
    setOpen, 
    header, 
    items, 
    icon = <ViewListIcon />,
    ...other } = props;

  return (
    <React.Fragment>
      <ListItem button onClick={e => setOpen(!open)}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={header} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          { items && items.map((item, index) => 
            <ListItem button component={Link} href={item.href} className={classes.nested} underline="none" key={index}>
              { item.icon && 
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
              }
              <ListItemText primary={item.text} />
            </ListItem>
          )}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

function FaIcon(props) {
  const { icon, ...other } = props;
  return <FontAwesomeIcon icon={icon} size="lg" fixedWidth {...other} />
}

function MenuBar(props) {
  const classes = useStyles();
  const isPrinting = useMediaQuery('print');

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [orderCollapseOpen, setOrderCollapseOpen] = useState(false);
  const [productsCollapseOpen, setProductsCollapseOpen] = useState(false);
  const [reportsCollapseOpen, setReportsCollapseOpen] = useState(false);
  const [toolsCollapseOpen, setToolsCollapseOpen] = useState(false);

  return (
    <div className={props.className} style={{ display: isPrinting ? 'none' : 'block'}}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          { !props.hideSearchBar &&
            <SearchBar />
          }
          {props.children}
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className={classes.list}>
          <List>
            <ListItem button component="a" href="/next">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
            <ListItem button component="a" href="/next/putaway">
              <ListItemIcon>
                <CropFreeIcon />
              </ListItemIcon>
              <ListItemText primary="Put Away" />
            </ListItem>
            <ListItem button component="a" href="/next/store-orders">
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Store Orders" />
            </ListItem>
            <CollapsableList
              header="Orders"
              icon={<FaIcon icon={faPaste} />}
              open={orderCollapseOpen}
              setOpen={setOrderCollapseOpen}
              items={[{
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
              }]}
            />
            <CollapsableList
              header="Products"
              open={productsCollapseOpen}
              icon={<FaIcon icon={faPaintBrush} />}
              setOpen={setProductsCollapseOpen}
              items={[{
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
              }]}
            />
            <CollapsableList
              header="Reports"
              open={reportsCollapseOpen}
              icon={<FaIcon icon={faAnalytics} />}
              setOpen={setReportsCollapseOpen}
              items={[{
                href: '/products/unpicked',
                text: 'Unpicked Items'
              }, {
                href: '/reports/sales-by-manufacturer',
                text: 'Sales by Manufacturer'
              }]}
            />
            <Divider />
            <ListItem button onClick={e => window.location="/orders"}>
              <ListItemIcon>
                <ArrowBackIcon />
              </ListItemIcon>
              <ListItemText primary="Back to old view" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default MenuBar;