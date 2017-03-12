var React = require('react');
var { Link } = require('react-router');
var { Container, Header, Divider, Segment, Image } = require('semantic-ui-react');

var Home = React.createClass({
    render() {
        return (
            <Container>
                <Segment vertical>
                    <Header as="h1">
                      Data Visualization - Community Course, Spring 2017
                    </Header>
                    <Divider />
                    <Image src="img/dataviz.jpg" fluid />
                    <Divider />
                </Segment>
            </Container>
        )
    }
});

module.exports = Home;
