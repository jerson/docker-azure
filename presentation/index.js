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
    thinkingFace: require("../assets/thinking-face.png"),
    kat: require("../assets/kat.png"),
    backgroundColor: require("../assets/background-color.png"),
    dockerCone: require("../assets/docker-cone.png"),
    dockerDistributions: require("../assets/docker-distributions.png"),
    dockerPanchesco: require("../assets/docker-panchesco.png"),
    dockerMachine: require("../assets/docker-machine.png"),
    dockerComparision: require("../assets/docker-comparision.png"),
    dockerContainers: require("../assets/docker-containers.png"),
    dockerSad: require("../assets/docker-sad.png"),
    dockerHappy: require("../assets/docker-happy.png"),
    whoCanUse: require("../assets/who-can-use.png"),
    dockerInstall: require("../assets/docker-install.png"),
    dockerSpace: require("../assets/docker-space.png"),
    dockerVersion: require("../assets/docker-version.png"),
    install: require("../assets/install.png"),
    register: require("../assets/register.png"),
    devProblem: require("../assets/dev-problem.jpg"),
    attention: require("../assets/attention.jpg"),
    dockerDefinition: require("../assets/docker-definition.png"),
    chart: require("../assets/chart.png")
};

preloader(images);

const theme = createTheme(
    {
        primary: "white",
        secondary: "#1F2022",
        tertiary: "#03A9FC",
        danger: "red",
        quartenary: "#9f9f9f"
    },
    {
        primary: "Montserrat",
        secondary: "Helvetica"
    }
);

export default class Presentation extends React.Component {
    state = {
        image: null
    };

    componentDidMount() {
        this.handleResizeBinded = this.handleResize.bind(this);
        window.addEventListener("resize", this.handleResizeBinded);
        this.handleResize();
        // setInterval(() => {
        //     this.generateBackground();
        // }, 2000);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResizeBinded);
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
        let deck = ReactDOM.findDOMNode(this.refs.deck);

        let colorFunc = (x, y) => {
            return "hsl(" + Math.floor(Math.abs(x * y) * 360) + ",0%,60%)";
        };

        let pattern = Trianglify({
            //color_function: colorFunc,
            cell_size: 200,
            x_colors: ["#15a1e9", "#fff", "#f4f4f4", "#fff", "#25aeec"],
            width: deck.clientWidth,
            height: deck.clientHeight
        });
        this.setState({image: pattern.png()});
    }

    render() {
        let {image} = this.state;
        return (
            <Deck
                ref="deck"
                transition={["zoom", "slide"]}
                transitionDuration={500}
                theme={theme}
            >
                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <div className="animated rubberBand infinite">
                        <Image src={images.dockerLogo} width={200}/>
                    </div>
                    <Heading size={1} caps lineHeight={1} textColor="tertiary">
                        Docker
                    </Heading>
                    <Heading size={1} fit bold caps lineHeight={1} textColor="secondary">
                        en Microsoft Azure
                    </Heading>
                    <Text margin="30px 0 0" bold textColor="tertiary" textSize={28}>
                        Gerson Alexander Pardo Gamez
                    </Text>
                    <Link
                        margin="15px 0 0"
                        href="http://jerson.me/docker-azure"
                        textColor="quartenary"
                        textSize={24}
                    >
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
                            <S type="">
                                Golang, Docker 🐳, React (Native)?,PHP, Javacript, iOS, Android
                            </S>
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

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={4} textColor="tertiary" caps>Docker</Heading>

                    <List>
                        <ListItem>
                            Es un proyecto
                            {" "}
                            <S type="bold">open source</S>
                            {" "}
                            para
                            {" "}
                            <S type="bold">empaquetar</S>
                            ,
                            <S type="bold">transportar</S>
                            {" "}
                            y
                            {" "}
                            <S type="bold">ejecutar</S>
                            {" "}
                            cualquier
                            {" "}
                            <S type="bold">aplicación</S>{" "}
                            como un
                            contenedor <S type="bold"> ligero</S>
                        </ListItem>
                        <ListItem>
                            Su versión inicial se publica el 13 de Marzo de 2013 y
                            está escrito en el lenguaje GO
                        </ListItem>


                    </List>

                </Slide>


                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Image src={images.dockerDefinition} width={"100%"}/>

                </Slide>


                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>
                        ¿Que diferencia a Docker?
                    </Heading>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>
                        Contenedor
                    </Heading>

                    <Text>
                        Piensa en un contenedor como una caja que esta cerrada y que contiene todo lo necesario para ejecutar tu aplicación
                    </Text>

                    <Image src={images.kat} width={"400"}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>
                        Maquinas virtuales
                    </Heading>
                    <Heading size={6} textColor="tertiary" caps>VS</Heading>
                    <Heading size={6} textColor="secondary" caps>Contenedores</Heading>

                    <Image src={images.dockerComparision} width={"100%"}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>
                        ¿Quien puede usar Docker?
                    </Heading>

                    <Image src={images.whoCanUse} width={"100%"}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>
                        ¿Porque usaria Docker si actualmente instalo mis
                        servidores manualmente y todo me va de maravilla?{" "}
                    </Heading>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary">
                        Imaginate que acabas de conseguir trabajo en un proyecto, el proyecto esta en Linux, y tu usas
                        Windows.
                    </Heading>

                    <Appear>
                        <Text textSize={32}>
                            Tendrias que instalar y configurar tu propia computadora: problemas de
                            versiones, no existe el componente para tu sistema operativo, etc.
                            {" "}
                        </Text>
                    </Appear>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary">
                        Imaginate que ha pasado un par de años, cambiaste de computadora y tienes que volver a ejecutar
                        un proyecto antiguo.
                    </Heading>

                    <Appear>
                        <Text textSize={32}>
                            Tendrias que buscar las versiones correctas, talvez hasta formatear tu
                            computadora o trabajar en una maquina virtual.{" "}
                        </Text>
                    </Appear>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary">
                        Imaginate que trabajaste con alguien que desarrollo un proyecto y se fue sin instalarlo en
                        producción
                    </Heading>

                    <Image src={images.devProblem} width={500}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={4} textColor="secondary" caps>
                        ¿Aún no te convences?
                    </Heading>
                    <Image src={images.thinkingFace} width={500}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>Sin Docker</Heading>
                    <Image src={images.dockerSad} width={"100%"}/>

                </Slide>
                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>Con Docker</Heading>
                    <Image src={images.dockerHappy} width={"100%"}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <div className="animated pulse infinite">
                        <Heading size={4} textColor="secondary" caps>
                            Mucha charla y poca acción
                        </Heading>
                    </div>

                    <div>
                        <Image src={images.dockerPanchesco}/>
                        <Image src={images.dockerCone}/>

                    </div>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={4} textColor="quartenary" caps>Paso 1:</Heading>
                    <Heading size={4} textColor="secondary" caps>
                        Crearse una cuenta en Azure
                    </Heading>
                    <Heading size={6} textColor="tertiary" caps>
                        azure.microsoft.com
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={6} textColor="quartenary" caps>Paso 1: Listo</Heading>
                    <Image src={images.register} width={"100%"}/>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={4} textColor="quartenary" caps>Paso 2:</Heading>
                    <Heading size={4} textColor="secondary" caps>
                        Instalar Docker en Azure
                    </Heading>
                    <Heading size={6} textColor="tertiary" caps>
                        portal.azure.com
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={6} textColor="quartenary" caps>Paso 2: listo</Heading>
                    <Image src={images.install} width={"100%"}/>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={4} textColor="quartenary" caps>Paso 3:</Heading>
                    <Heading size={4} textColor="secondary" caps>
                        Conectarte al servidor
                    </Heading>
                    <Heading size={6} textColor="tertiary" caps>
                        ssh usuario@10.10.10.10
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={6} textColor="quartenary" caps>Paso 3: listo</Heading>
                    <Image src={images.dockerVersion} width={"100%"}/>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <div className="animated shake infinite">
                        <Heading size={4} textColor="secondary" caps>
                            Prestar atención
                        </Heading>
                    </div>
                    <Image src={images.attention} width={"50%"}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={4} textColor="tertiary" caps>
                        ¿Eso fue fácil no?
                    </Heading>
                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={4} textColor="quartenary" caps>
                        ¿Docker tiene futuro?
                    </Heading>
                    <Image src={images.chart} width={"100%"}/>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">
                    <Heading size={4} textColor="secondary" caps>Ahora si</Heading>
                    <div className="animated flash infinite">
                        <Heading size={4} textColor="tertiary" caps>¿Preguntas?</Heading>
                    </div>

                </Slide>

                <Slide transition={["fade"]} bgImage={image} bgColor="primary">

                    <Heading size={6} textColor="secondary" caps>
                        Posibles inquitudes
                    </Heading>

                    <List>
                        <Appear>
                            <ListItem>
                                ¿De verdad?, ¿Otra tecnología por aprender?
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ¿Recuerdo que hace unos años existieron otra opciones como vagrant,
                                son relevantes ahora?
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ¿Como aprendo más de Docker?
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                ¿A que hora acaba la presentación?
                            </ListItem>
                        </Appear>

                    </List>

                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Gracias</Quote>
                        <Cite>github.com/jerson/docker-azure</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        );
    }
}
