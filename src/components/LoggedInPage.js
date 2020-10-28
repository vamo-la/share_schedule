import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style.scss';

function LoggedInPage() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar calendarType="US" onChange={onChange} value={value} />
    </div>
  );
}

export default LoggedInPage;

// ログイン後のページ
// class LoginedPage extends Component {
//   render() {
//     return <Calendar locale="ja-JP" calendarType="US" value={new Date()} />;
//   }
// }

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

// const styles = (theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     // background: 'yellow',  // 効果なし
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth, // この幅の横に、mainがレイアウトされる。
//       flexShrink: 0, // !!! これが無いと main が Drawer の下に入り込んでしまう
//     },
//   },
//   appBar: {
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   menuButton: {
//     marginRight: 20,
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   // Override - Drawerの中で  classes={{ paper: classes.drawerPaper, }}
//   drawerPaper: {
//     width: drawerWidth, // drawer.widthに合わせないと無駄な空白ができる
//     background: 'white', // 効果あり
//   },
//   content: {
//     // marginLeftでappBarに合わせると画面幅を小さくすると無駄な空白ができる。
//     // marginLeft: drawerWidth,  // drawer.flexShrink: 0 を使う
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class ResponsiveDrawer extends React.Component {
//   state = {
//     mobileOpen: false,
//   };

//   handleDrawerToggle = () => {
//     this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
//   };

//   render() {
//     const { classes, theme } = this.props;

//     const drawer = (
//       <div>
//         <div className={classes.toolbar} />
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     );

//     return (
//       <div className={classes.root}>
//         <CssBaseline />
//         <AppBar position="fixed" className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerToggle}
//               className={classes.menuButton}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <nav className={classes.drawer}>
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//           <Hidden smUp implementation="css">
//             <Drawer
//               container={this.props.container}
//               variant="temporary"
//               anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//               open={this.state.mobileOpen}
//               onClose={this.handleDrawerToggle}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//           <Hidden xsDown implementation="css">
//             <Drawer
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               variant="permanent"
//               open
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//         </nav>
//         <main className={classes.content}>
//           return <Calendar locale="ja-JP" calendarType="US" value={new Date()} />
//         </main>
//       </div>
//     );
//   }
// }

// ResponsiveDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   // Injected by the documentation to work in an iframe.
//   // You won't need it on your project.
//   container: PropTypes.object,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
