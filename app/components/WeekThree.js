var React = require('react');
var { Container, Segment, Header, Divider, Label, List, Image } = require('semantic-ui-react');

var WeekThree = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Three - March 26, 2017</Header>
          <Header as="h2">Tableau - Introduction</Header>
          <Divider />
          <Segment basic>
            <Header attached="top" as="h3" color="teal">What is Tableau?</Header>
            <Segment attached>
              <Image className="weekImage" src="img/TableauLogo.jpg" size='big' bordered rounded centered />
              <Header as="h5"><a href="https://www.tableau.com/">Tableau</a> is a business intelligence (BI) tool that can create visually-appealing visualizations and reports, charts, graphs and dashboards using external data. Tableau reports are interactive and can easily be shared with anyone. Tableau software is extremely fast and easy to use as it has a drag and drop interface.</Header>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="teal">How do I get Tableau</Header>
            <Segment attached>
              <Header as="h5">Tableau can be downloaded from the Internet and comes in a few varieties</Header>
              <List bulleted>
                <List.Item><a href="https://www.tableau.com/products/desktop">Desktop</a></List.Item>
                <List.Item><a href="https://www.tableau.com/products/server">Server</a></List.Item>
                <List.Item><a href="https://www.tableau.com/products/online">Online</a></List.Item>
                <List.Item><a href="https://www.tableau.com/products/public">Public</a></List.Item>
                <List.Item><a href="https://www.tableau.com/products/reader">Reader</a></List.Item>
              </List>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="teal">Where do I get the data?</Header>
            <Segment attached>
              <Header as="h5">Tableau can read a variety of data format types. Tableau Public, the version used in this course, can only read a few - including Microsoft Excel, Text, Microsoft Access, and few others.</Header>
              <Header as="h5">Data used by Tableau can be thought of as data in a relational database. Data can have relationships and connect in order to facilitate more complex data creation and analysis.</Header>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="teal">User Interface</Header>
            <Segment attached>
              <Header as="h5">Tableau can read a variety of data format types. Tableau Public, the version used in this course, can only read a few - including Microsoft Excel, Text, Microsoft Access, and few others.</Header>
              <Image className="weekImage" src="img/tableauUI.jpg" size='massive' bordered rounded centered />
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="teal">Data Samples</Header>
            <Segment attached>
              <Header as="h5">Below are a few data samples - including a simple 20 row data file to a complex Excel workbook with 50,000 rows.</Header>
                <List bulleted>
                  <List.Item><a href="data/Scores.txt">Scores</a></List.Item>
                  <List.Item><a href="data/SimpleExample.xlsx">Simple Excel Data</a></List.Item>
                  <List.Item><a href="data/StudentGrades.xlsx">Student Grades</a></List.Item>
                  <List.Item><a href="data/Global_Services_Sales.xlsx">Business - Global Company Services</a></List.Item>
                  <List.Item><a href="data/CoffeeCompaniesSales.xlsx">Business - Coffee Companies Sales</a></List.Item>
                </List>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="teal">Data Samples</Header>
            <Segment attached>
              <Header as="h5">Resources - Chart Types</Header>
                <List bulleted>
                  <List.Item><a href="http://onlinehelp.tableau.com/current/pro/desktop/en-us/dataview_examples.html">Build-It-Yourself Exercises</a></List.Item>
                  <List.Item><a href="https://public.tableau.com/en-us/s/resources">Tableau - Online Learning Resources</a></List.Item>
                </List>
            </Segment>
          </Segment>
        </Container>
      )
    }
  });

module.exports = WeekThree;
