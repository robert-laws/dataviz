var React = require('react');
var { Container, Segment, Header, Divider, Label, List, Image } = require('semantic-ui-react');

var WeekTwo = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Two - March 19, 2017</Header>
          <Header as="h2">Excel - Developing a Data Dashboard</Header>
          <Divider />
          <Segment basic>
            <Header attached="top" as="h3" color="green">Dashboard</Header>
            <Segment attached>
              <Header as="h4">What is a Dashboard?</Header>
              <Header as="h5">A dashboard is a visual display of the most important information needed to achieve one or more objectives; consolidated and arranged on a single screen so the information can be monitored at a glance. - Stephen Few, "Dashboard Confusion"</Header>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="green">Basic Data Dashboard</Header>
            <Segment attached>
              <Image className="weekImage" src="img/basic-dashboard.png" size='massive' bordered rounded centered />
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="green">Sample Datasets</Header>
            <Segment attached>
              <List bulleted>
                <List.Item><a href="data/basicSales.txt" target="_blank">Basic Sales</a></List.Item>
                <List.Item><a href="data/grades.txt" target="_blank">Student Grades</a></List.Item>
                <List.Item><a href="data/sales.txt" target="_blank">Yearly Sales Data</a></List.Item>
              </List>
            </Segment>
          </Segment>
        </Container>
      )
    }
  });

module.exports = WeekTwo;
