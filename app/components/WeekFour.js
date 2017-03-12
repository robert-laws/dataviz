var React = require('react');
var { Container, Segment, Header, Divider, Label } = require('semantic-ui-react');

var WeekFour = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Four</Header>
          <Divider />
        </Container>
      )
    }
  });

module.exports = WeekFour;
