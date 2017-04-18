var React = require('react');
var { Container, Segment, Header, Divider, Label, List, Image } = require('semantic-ui-react');

var WeekSix = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Six - April 18, 2017</Header>
          <Header as="h2">Infographics - Part 2</Header>
          <Divider />
          <Segment basic>
            <Header attached="top" as="h3" color="blue">Selected Online Resources</Header>
            <Segment attached>
              <List bulleted>
                <List.Item><a href="https://venngage.com/">Venngage</a></List.Item>
                <List.Item><a href="https://www.visme.co/">Visme</a></List.Item>
                <List.Item><a href="https://infogr.am/">Infogram</a></List.Item>
              </List>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="blue">Infographic Example - using Visme</Header>
            <Segment attached>
              <Header as="h5">Infographic with Visme - <a href="https://my.visme.co/projects/kkz8do47-student-achievement-sample">University Students</a></Header>
              <Image className="infographic" src="img/students.jpg" size='big' bordered rounded centered />
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="blue">Infographic Example - using Venngage</Header>
            <Segment attached>
              <Header as="h5">Infographic with Venngage - <a href="https://infograph.venngage.com/p/255417/new-england-patriots-2001-2016">New England Patriots</a></Header>
              <Image className="infographic" src="img/patriots.JPG" size='big' bordered rounded centered />
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="blue">Extra! Web-based Data Visualization Tools</Header>
            <Segment attached>
              <List bulleted>
                <List.Item><a href="https://d3js.org/">Data-Driven Documents</a></List.Item>
                <List.Item><a href="http://www.chartjs.org/">ChartJS</a></List.Item>
                <List.Item><a href="http://www.highcharts.com/">Highcharts</a></List.Item>
              </List>
            </Segment>
          </Segment>
        </Container>
      )
    }
  });

module.exports = WeekSix;
