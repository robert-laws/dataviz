var React = require('react');
var { Container, Segment, Header, Divider, Label } = require('semantic-ui-react');

var WeekFive = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Five</Header>
          <Divider />
        </Container>
      )
    }
  });

module.exports = WeekFive;
