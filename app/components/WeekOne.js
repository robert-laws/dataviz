var React = require('react');
var { Container, Segment, Header, Divider, Label } = require('semantic-ui-react');

var WeekOne = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week One - Introduction & Simple Charts in Excel</Header>
          <Divider />
        </Container>
      )
    }
  });

module.exports = WeekOne;
