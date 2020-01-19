import React, { Component } from 'react';
import './App.css';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Nav from './components/Nav';
import Home from './views/Home';
import HouseholdsContainer from './containers/HouseholdsContainer';
import Background from './images/pexels-photo-349609.jpeg';
import Signup from './components/Signup';
import Login from './views/Login';
import { authenticate, authenticationFailure, logout } from './redux/modules/Auth/actions';
import NewHousehold from './components/NewHousehold';
import MealsContainer from './containers/MealsContainer';
import Loading from './components/Loading';
import { fetchMeals } from './redux/modules/Meals/actions';

const rules = css({
  width: '100%',
  height: 'auto',
  // position: 'fixed',
  top: 55,
  left: 0,
  minHeight: '100%',
  minWidth: '1024px',
  background: `url(${Background}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  color: '#ecf0f1',
  textShadow: '1px 1px #777',
});

class App extends Component {
  constructor(props) {
    super(props);
    props.fetchMeals();
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const { authenticate, authenticationFailure } = this.props;
    if (token) {
      authenticate();
    } else {
      authenticationFailure();
    }
  }

  render() {
    const { loading, logout } = this.props;
    if (loading) {
      return <Loading />;
    }
    return (
      <Router>
        <div>
          <Container text>
            <Nav logout={logout} />
          </Container>
          <div {...rules}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/households/new" component={NewHousehold} />
              <Route path="/meals" component={MealsContainer} />
              <Route path="/households" component={HouseholdsContainer} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  fetchMeals: PropTypes.func,
  authenticate: PropTypes.func,
  authenticationFailure: PropTypes.func,
  loading: PropTypes.bool,
  logout: PropTypes.func,
};

export default connect(
  state => ({
    loading: state.auth.loading,
  }),
  {
    authenticate,
    authenticationFailure,
    logout,
    fetchMeals,
  }
)(App);
