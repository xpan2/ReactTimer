var React = require('react');
var ReactDOM = require('react-dom');
// es6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// es5
//var Route = require('react-router').Route;
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');


// loading foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,

  document.getElementById('app')
);
