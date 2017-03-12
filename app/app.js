var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');
var Home = require('Home');
var Page404 = require('Page404');
// extra
var WeekOne = require('WeekOne');
var WeekTwo = require('WeekTwo');
var WeekThree = require('WeekThree');
var WeekFour = require('WeekFour');
var WeekFive = require('WeekFive');
var WeekSix = require('WeekSix');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <IndexRoute to="/home" component={Home} />
    <Route path="home" component={Home} />
    <Route path="week-one" component={WeekOne} />
    <Route path="week-two" component={WeekTwo} />
    <Route path="week-three" component={WeekThree} />
    <Route path="week-four" component={WeekFour} />
    <Route path="week-five" component={WeekFive} />
    <Route path="week-six" component={WeekSix} />
    <Route path="*" component={Page404} />
  </Route>
</Router>,
document.getElementById('app')
);
