import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import MenuView from './MenuView';
import { getDishes } from '../actions/dishes';
import { Loader, Dimmer } from 'semantic-ui-react';

class FetchMenu extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getDishes(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/menu" component={Menu} />
          <Route
            exact
            path="/menu/:id"
            component={MenuView}
          />
        </div>
      );
    } else {
      return (
        <Dimmer active inverted>
          <Loader>Finding our Menu...</Loader>
        </Dimmer>
      );
    }
  }
}

export default connect()(FetchMenu);
