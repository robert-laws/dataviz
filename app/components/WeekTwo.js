var React = require('react');
var { Container, Segment, Header, Divider, Label } = require('semantic-ui-react');

var WeekTwo = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Two</Header>
          <Divider />
        </Container>
      )
    }
  });

module.exports = WeekTwo;
