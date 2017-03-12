var React = require('react');
var { Container, Segment, Header, Divider, Label } = require('semantic-ui-react');

var WeekSix = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Six</Header>
          <Divider />
        </Container>
      )
    }
  });

module.exports = WeekSix;
