import React, { Component } from 'react';
import {
  Menu,
  Header,
  Divider,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import 'semantic-ui-css/semantic.min.css';

//TODO   import {Cart} from 'LINK';

const headerText = {
  fontHeight: '5em',
  textFamily: 'Arial',
  fontHeight: '500%',
};

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position="right">
          <Link to="/cart">
            <Menu.Item name="Cart" />
          </Link>
          <Link to="/history">
            <Menu.Item name="History" />
          </Link>
          <Menu.Item
            name="Logout"
            onClick={() =>
              dispatch(handleLogout(history))
            }
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to="/cart">
          <Menu.Item name="Cart" />
        </Link>
      </Menu.Menu>
    );
  };

  render() {
    return (
      <div>
        <Divider hidden />
        <Header
          class="ui huge header"
          as="h1"
          style={headerText}
          textFamily="Arial"
          lineHeight="4em"
          fontHeight="500%"
          lineHeight="4em"
          textAlign="center">
          Mom&#8217;s Kitchen
        </Header>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item name="Home" />
          </Link>
          <Link to="/about">
            <Menu.Item name="About" />
          </Link>
          <Link to="/menu">
            <Menu.Item name="Menu" />
          </Link>
          {this.rightNavs()}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(
  connect(mapStateToProps)(NavBar),
);
