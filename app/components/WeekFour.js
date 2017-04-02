var React = require('react');
var { Container, Segment, Header, Divider, Label, List, Image } = require('semantic-ui-react');

var WeekFour = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Four - April 2, 2017</Header>
          <Header as="h2">Tableau - Creating Dashboards and Stories</Header>
          <Divider />
          <Segment basic>
            <Header attached="top" as="h3" color="red">What are worksheets, dashboards, and stories?</Header>
            <Segment attached>
              <List bulleted>
                <List.Item><strong>Worksheets</strong> contain a single view along with shelves, legends, and the Data pane.</List.Item>
                <List.Item><strong>Dashboards</strong> are a collection of views from multiple worksheets.</List.Item>
                <List.Item><strong>Stories</strong> are a sequence of visualizations that work together to convey information. You can create stories to tell a data narrative, provide context, demonstrate how decisions relate to outcomes, or to simply make a compelling case.</List.Item>
              </List>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="red">Our Story</Header>
            <Segment attached>
              <Image className="weekImage" src="img/northEastCoffee.jpg" size='big' bordered rounded centered />
              <Header as="h5">The Northeast Coffee Company has stores located in 6 states in the North East of the USA. Stores are located in Maine, New Hampshire, Vermont, Massachusetts, Connecticut, and Rhode Island. Over the past 5 years the company has collected data on sales of 7 coffee product including Caffe Latte, Cappuccino, Mocha, Americano, Espresso, Iced Coffee, and Frappuccino.</Header>
              <Header as="h5">The big question for the Northeast Coffee Company are - How are we doing? Where do we have the strongest business impact? Which types of coffee are the best and worst sellers? How should we move forward with our company?</Header>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="red">Our Task</Header>
            <Segment attached>
              <Header as="h5">Create visualizations to analyze the data, and make some conclusions.</Header>
              <Header as="h5">Some ideas for visualizations</Header>
              <List bulleted>
                <List.Item>Total Sales</List.Item>
                <List.Item>Sales by Location over Time</List.Item>
                <List.Item>Sales by Product over Time</List.Item>
                <List.Item>Map showing sales data</List.Item>
                <List.Item>How does population and population density factor into the analysis? (see <a href="https://en.wikipedia.org/wiki/List_of_U.S._states_by_population_density">Population Density Data</a>)</List.Item>
                <List.Item>Evaluate sales based on number of stores in each state</List.Item>
              </List>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="red">Our Data</Header>
              <Segment attached>
                <Header as="h5"><a href="data/NortheastCoffeeSales2012--2016.xlsx">Northeast Coffee Company - Sales Data, 2012 - 2016</a></Header>
              </Segment>
            </Segment>
        </Container>
      )
    }
  });

module.exports = WeekFour;
