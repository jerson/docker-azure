// Import React
import React from 'react'
import ReactDOM from 'react-dom'
// Import Spectacle Core tags
import {Appear, BlockQuote, Cite, Deck, Heading, Image, Link, List, ListItem, Quote, S, Slide, Text} from 'spectacle'
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'
// Import theme
import createTheme from 'spectacle/lib/themes/default'
import Trianglify from 'trianglify'

// Require CSS
require("animate.css");
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
    dockerLogo: require("../assets/docker-logo.png"),
    thinkingFace: require("../assets/thinking-face.jpg"),
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#9f9f9f"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {

    state = {
        image: null,
    };

    componentDidMount() {
        this.handleResizeBinded = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResizeBinded);
        this.handleResize();

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeBinded);
    }

    handleResize() {
        if (this.listener) {
            clearTimeout(this.listener);
        }

        this.listener = setTimeout(() => {
            this.generateBackground();
        }, 200);
    }

    generateBackground() {

        let deck = ReactDOM.findDOMNode(this.refs.deck)

        let colorFunc = (x, y) => {
            return 'hsl(' + Math.floor(Math.abs(x * y) * 360) + ',80%,60%)';
        };

        let pattern = Trianglify({
            //color_function: colorFunc,
            cell_size: 200,
            x_colors: ['#0087c9', '#fff', '#f4f4f4', '#fff', '#0087c9'],
            width: deck.clientWidth,
            height: deck.clientHeight
        });
        this.setState({image: pattern.png()});
    }

    render() {

        let {image} = this.state;
        return (
            <Deck ref="deck" transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <div className="animated rubberBand infinite">
                        <Image src={images.dockerLogo} width={200}/>
                    </div>
                    <Heading size={1} caps lineHeight={1} textColor="tertiary">
                        Docker
                    </Heading>
                    <Heading size={1} fit bold caps lineHeight={1} textColor="secondary">
                        en Windows Azure
                    </Heading>
                    <Text margin="30px 0 0" bold textColor="tertiary" textSize={28}>
                        Gerson Alexander Pardo Gamez
                    </Text>
                    <Link margin="15px 0 0" href="http://jerson.me/docker-azure" textColor="quartenary" textSize={24}>
                        jerson.me/docker-azure
                    </Link>

                </Slide>
                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={6} textColor="secondary" caps>Acerca de mí</Heading>

                    <List>
                        <ListItem>
                            <S type="bold">Carrera: </S>
                            <S type="">Ingeniería de software 👨‍💻</S>
                        </ListItem>
                        <ListItem>
                            <S type="bold">Edad: </S>
                            <S type="">25</S>
                        </ListItem>
                        <ListItem>
                            <S type="bold">Conocimientos: </S>
                            <S type="">Golang, Docker 🐳, React (Native)?,PHP, Javacript, iOS, Android</S>
                            <S type="italic"> y otros.</S>

                        </ListItem>
                        <ListItem>
                            <S type="bold">Pasatiempo: </S>
                            <S type="">github.com/explore 👀</S>
                        </ListItem>
                        <ListItem>
                            <S type="bold">Más info: </S>
                            <S type="">linkedin 👔</S>
                        </ListItem>


                    </List>


                </Slide>
                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <div className="animated pulse infinite">
                        <Heading size={2} textColor="secondary" caps>Comenzemos</Heading>
                    </div>
                </Slide>
                <Slide transition={["fade"]} bgImage={image} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Recuerdan su primer proyecto?</Heading>

                    <Appear>
                        <Image src={images.thinkingFace} width={500}/>
                    </Appear>



                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        );
    }
}
