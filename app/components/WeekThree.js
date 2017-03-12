var React = require('react');
var { Container, Segment, Header, Divider, Label } = require('semantic-ui-react');

var WeekThree = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Three</Header>
          <Divider />
        </Container>
      )
    }
  });

module.exports = WeekThree;
