var React = require('react');
var { Link, IndexLink } = require('react-router');

var WebMenu = React.createClass({
  render() {
      return (
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <IndexLink className="item" activeClassName="active" to="/">Home</IndexLink>
            <Link className="item" activeClassName="active" to="/week-one">Week One</Link>
            <Link className="item" activeClassName="active" to="/week-two">Week Two</Link>
            <Link className="item" activeClassName="active" to="/week-three">Week Three</Link>
            <Link className="item" activeClassName="active" to="/week-four">Week Four</Link>
            <Link className="item" activeClassName="active" to="/week-five">Week Five</Link>
            <Link className="item" activeClassName="active" to="/week-six">Week Six</Link>
          </div>
        </div>
      )
  }
});

module.exports = WebMenu;
