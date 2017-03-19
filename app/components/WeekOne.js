var React = require('react');
var { Container, Segment, Header, Divider, Label, List, Grid, Button, Image, Card } = require('semantic-ui-react');

var WeekOne = React.createClass({
  getDefaultProps() {
    return {
      numbers: "...",
      fivesClass: '',
      fivesButton: 'Reveal Fives',
      howMany: '',
      totalFives: '',
      totalHideShow: 'totalHide'
    }
  },
  getInitialState() {
    return {
      numbers: this.props.numbers,
      fivesClass: this.props.fivesClass,
      fivesButton: this.props.fivesButton,
      howMany: this.props.howMany,
      totalFives: this.props.totalFives,
      totalHideShow: this.props.totalHideShow
    }
  },
  getNumbers: function(e) {
    e.preventDefault();
    var n = "";
    var total = 0;
    for (var i = 0; i < 4; i++) {
      for(var j = 0; j < 20; j++) {
        var val = Math.floor(Math.random() * 9) + 1;
        var classVal = 'noColor';
        if(val == 5) {
          classVal = 'red';
          total++;
        }
        n += "<span class='" + classVal + "'>" + val + "</span>";
      }
      n += "<br/>";
    }
    this.setState({numbers: n, fivesClass: '', fivesButton: 'Reveal Fives', howMany: 'Question: How many 5\'s are there?', totalFives: total, totalHideShow: 'totalHide'});
  },
  showFives: function(e) {
    e.preventDefault();
    if(this.state.fivesClass == '') {
      this.setState({fivesClass: 'fives', fivesButton: 'Hide Fives', howMany: 'Answer:', totalHideShow: 'totalShow'});
    } else {
      this.setState({fivesClass: '', fivesButton: 'Reveal Fives', howMany: 'Question: How many 5\'s are there?', totalHideShow: 'totalHide'});
    }

  },
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week One - March 12, 2017</Header>
          <Header as="h2">Course Introduction & Simple Charts in Excel</Header>
          <Divider />
          <Segment basic>
            <Header attached="top" as="h3" color="brown">Introduction</Header>
            <Segment attached>
              <Header as="h4">What is Data Visualization?</Header>
              <Header as="h4">Most basic answer...</Header>
              <List bulleted>
                <List.Item>Begin with raw data</List.Item>
                <List.Item>Plot the data</List.Item>
              </List>
              <Header as="h4">Why bother to do it?</Header>
              <List bulleted>
                <List.Item>Humans process visual information quickly and automatically</List.Item>
                <List.Item>Way to see important meaning in data beyond statistical analysis</List.Item>
              </List>
            </Segment>
          </Segment>

          <Segment basic>
            <Header attached="top" as="h3" color="brown">Activity: The Difference Made with a Data Visualization</Header>
            <Segment attached>
              <Button secondary onClick={this.getNumbers} size="medium">Get Numbers</Button>
              <Button secondary onClick={this.showFives} size="medium">{this.state.fivesButton}</Button>
            </Segment>
            <Segment className={this.state.fivesClass} attached textAlign='center'>
              <div className="fivesSegment" dangerouslySetInnerHTML={{__html: this.state.numbers}} />
            </Segment>
            <Segment attached>
              <Header as="h4">{this.state.howMany} <span className={this.state.totalHideShow}>{this.state.totalFives}</span></Header>
            </Segment>
          </Segment>

          <Segment basic>
            <Header attached="top" as="h3" color="brown">History and Evolution of Data Visualization</Header>
            <Segment attached>
              <List bulleted>
                <List.Item><a href="img/the_5_most_influential_data_visualizations_of_all_time.pdf" target="_blank">Famous Data Visualizations</a></List.Item>
                <List.Item><a href="http://www.datavis.ca/milestones/" target="_blank">Milestones in the History of Data Visualization</a></List.Item>
                <List.Item><a href="http://data-art.net/resources/history_of_vis.php" target="_blank">A Quick Illustrated History of Visualisation</a></List.Item>
                <List.Item><a href="http://www.smithsonianmag.com/history/surprising-history-infographic-180959563/" target="_blank">The Surprising History of the Infographic</a></List.Item>
                <List.Item><a href="http://data-informed.com/7-great-visualizations-history/" target="_blank">7 Great Visualizations from History</a></List.Item>
                <List.Item><a href="http://www.datavis.ca/milestones/" target="_blank">Milestones in the History of Data Visualization</a></List.Item>
              </List>
            </Segment>
            <Header attached="top" as="h3" color="brown">Data Visualization Examples</Header>
            <Segment attached>
              <List bulleted>
                <List.Item><a href="https://www.nytimes.com/interactive/2017/03/08/upshot/who-wins-and-who-loses-under-republicans-health-care-plan.html" target="_blank">NY Times article - Who Wins and Who Loses Under Republicans’ Health Care Plan</a></List.Item>
                <List.Item><a href="img/axios_winners_losers.jpg" target="_blank">Visualizing the Health Care Debate in the USA, v.1</a></List.Item>
                <List.Item><a href="img/ny_times_winners_losers.jpg" target="_blank">Visualizing the Health Care Debate in the USA, v.2</a></List.Item>
                <List.Item><a href="img/web-analytics-dashboard-thumbnail.png" target="_blank">Dashboard, Example 1</a></List.Item>
                <List.Item><a href="img/bi_dashboard.jpg" target="_blank">Dashboard, Example 2</a></List.Item>
              </List>
            </Segment>
          </Segment>

          <Segment basic>
            <Header attached="top" as="h3" color="brown"><a href="https://en.wikipedia.org/wiki/Anscombe's_quartet" target="_blank">When Statistical Analysis isn't Enough - Anscombe's Quartet</a></Header>
            <Segment attached>
              <Grid divided='vertically'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image className="weekImage" src="img/anscombes_quartet_table.png" size='massive' bordered rounded centered />
                  </Grid.Column>
                  <Grid.Column>
                    <Image className="weekImage" src="img/Anscombes-Quartet.png" size='massive' bordered rounded centered />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>

          <Segment basic>
            <Header attached="top" as="h3" color="brown">Data Visualization Examples - Charts</Header>
            <Segment attached>
              <Header as="h4">Basic Data Visualizations / Charts</Header>
              <Card.Group itemsPerRow={2} stackable>
                <Card color='red' image="img/bar.png" header="Bar Chart" />
                <Card color='orange' image="img/line.png" header="Line Chart" />
                <Card color='yellow' image="img/pie.png" header="Pie Chart" />
                <Card color='olive' image="img/column.png" header="Column Chart" />
                <Card color='teal' image="img/gauge.png" header="Gauge Chart" />
              </Card.Group>
              <Divider />
              <Header as="h4">More Complex Data Visualizations</Header>
              <Card.Group itemsPerRow={2} stackable>
                <Card color='red' image="img/area.png" header="Area Chart" />
                <Card color='orange' image="img/areaspline.png" header="Areaspline Chart" />
                <Card color='yellow' image="img/spline.png" header="Spline Chart" />
                <Card color='olive' image="img/scatter.png" header="Scatter Chart" />
                <Card color='yellow' image="img/polar.png" header="Polar Chart" />
                <Card color='olive' image="img/heatMap.jpeg" header="Heat Map" />
              </Card.Group>
            </Segment>
          </Segment>

          <Segment basic>
            <Header attached="top" as="h3" color="brown">Sample Data Sources</Header>
            <Segment attached>
              <Header as="h4">Free Data Sources</Header>
              <List bulleted>
                <List.Item><a href="data/team.csv">Basic Sample Data - Hypothetical Team & Scores</a></List.Item>
                <List.Item><a href="https://www.springboard.com/blog/free-public-data-sets-data-science-project/" target="_blank">Public Data Sets for Projects</a></List.Item>
                <List.Item><a href="http://www.contextures.com/xlSampleData01.html">Excel Sample Data</a></List.Item>
              </List>
            </Segment>
          </Segment>
        </Container>
      )
    }
  });

module.exports = WeekOne;
