var React = require('react');
var { Container, Segment, Header, Divider, Label, List, Image } = require('semantic-ui-react');

var WeekFive = React.createClass({
  render() {
    return (
        <Container id="onlyTopDiv">
          <Header as="h1">Week Five - April 9, 2017</Header>
          <Header as="h2">Infographics - Concept and Tools to build them</Header>
          <Divider />
          <Segment basic>
            <Header attached="top" as="h3" color="orange">What is an infographic?</Header>
            <Segment attached>
              <Image className="infographic" src="img/infographic_01.png" size='big' bordered rounded centered />
              <List bulleted>
                <List.Item>It is a graphical representations of stories that use visual communication</List.Item>
                <List.Item>It makes use of visual information in place of large segements of textual content</List.Item>
                <List.Item>It entertains the viewer while educating and informing him or her about a topic</List.Item>
                <List.Item>It incorporates one or many data visualizations to tell the story</List.Item>
              </List>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="orange">Tools to create Infographics</Header>
            <Segment attached>
              <Header as="h5">Getting started with infographics</Header>
              <List bulleted>
                <List.Item><a href="http://killerinfographics.com/">Killer Infographics</a></List.Item>
                <List.Item><a href="http://www.datavizcatalogue.com/">The Data Visualisation Catalogue</a></List.Item>
                <List.Item><a href="http://www.creativebloq.com/graphic-design-tips/information-graphics-1232836">The 100 best infographics</a></List.Item>
                <List.Item><a href="https://www.theatlantic.com/business/archive/2011/12/ending-the-infographic-plague/250474/">Article: Ending the Infographic Plague</a></List.Item>
              </List>
              <Header as="h5">Software to make infographics</Header>
              <List bulleted>
                <List.Item><a href="http://www.adobe.com/products/illustrator.html">Adobe Illustrator</a></List.Item>
                <List.Item><a href="https://www.canva.com/">Canva</a></List.Item>
                <List.Item><a href="https://infogr.am/">Infogram</a></List.Item>
                <List.Item><a href="http://visual.ly/">Visually</a></List.Item>
                <List.Item><a href="https://venngage.com/">Venngage</a></List.Item>
                <List.Item><a href="http://piktochart.com/">Piktochart</a></List.Item>
                <List.Item><a href="http://www.visme.co/">Visme</a></List.Item>
              </List>
              <Header as="h5">Books on infographics</Header>
              <List bulleted>
                <List.Item><a href="https://www.amazon.com/Infographics-Visual-Storytelling-Jason-Lankow/dp/1118314042">Infographics: Thr Power of Visual Storytelling</a></List.Item>
                <List.Item><a href="https://www.amazon.com/Raw-Data-Infographic-Designers-Sketchbooks/dp/0500517452/">Raw Data: Infographic Designers Sketchbooks</a></List.Item>
                <List.Item><a href="https://www.amazon.com/Visualize-This-FlowingData-Visualization-Statistics/dp/0470944889/">Visualize This</a></List.Item>
                <List.Item><a href="https://www.amazon.com/Data-Points-Visualization-Means-Something/dp/111846219X/">Data Points: Visualization That Means Something</a></List.Item>
                <List.Item><a href="https://www.amazon.com/Power-Infographics-Pictures-Communicate-Audiences-ebook/dp/B008CG2T30">The Power of Infographics: Using Pictures to Communicate and Connect With Your Audiences</a></List.Item>
                <List.Item><a href="https://www.amazon.com/Cool-Infographics-Effective-Communication-Visualization/dp/1118582306">Cool Infographics</a></List.Item>
              </List>
            </Segment>
          </Segment>
          <Segment basic>
            <Header attached="top" as="h3" color="orange">Example using Adobe Illustrator</Header>
            <Segment attached>
              <Header as="h5">Example using Adobe Illustrator</Header>
              <Image className="infographic" src="img/qatar_malls_2017.png" size='big' bordered rounded centered />
              <Divider />
              <List bulleted>
                <List.Item><a href="data/infographicExamples.xlsx">Sample Data for Basic Charts</a></List.Item>
                <List.Item><a href="data/infographicData.xlsx">Data used to create graphs</a></List.Item>
              </List>
            </Segment>
          </Segment>
        </Container>
      )
    }
  });

module.exports = WeekFive;
