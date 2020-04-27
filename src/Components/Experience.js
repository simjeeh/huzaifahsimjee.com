import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView } from "react-device-detect";
import Button from "react-bootstrap/Button";

class Experience extends Component {
    render() {
        if (this.props.data) {
            var work = this.props.data.work.map(function (work) {
                var work_title = work.title;
                var work_years = work.years;
                var work_img = "images/experience/" + work.img;
                var work_description = work.description.split('\n').map((line) => <p style={{'font-size': '1.35rem', 'line-height': 'normal', 'font-weight': 'bold', 'margin-bottom':'10px'}}>{line}</p>);
                var work_link = work.url;
                let linkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} style={{"margin-left": "10px"}}/>;
                var flippy;

                return (
                    <Card className="text-center" style={{width: '30rem', "margin-bottom": "2.5%", 'flex': '1'}}>
                        <MobileView>
                            <Flippy
                                flipOnHover={false}
                                flipOnClick={false}
                                flipDirection="horizontal"
                                ref={(r) => flippy = r}
                                style={{width: '30rem', height: '30rem'}}
                            >
                                <FrontSide style={{width: '30rem', 'border-radius': '5px', height: '30rem'}}>
                                    <a className="exp_nounderline" target="_blank" rel="noopener noreferrer"
                                       href={work_link}>
                                        <Card.Img src={work_img} class="exp_card_img"/>
                                        <Card.Body style={{'margin': '-15px', 'height': '82.5px'}}>
                                            <Card.Title style={{'display': 'inline-flex'}}>
                                                <h6 style={{
                                                    whiteSpace: "pre-line",
                                                    "margin-top": "20px"
                                                }}>{work_title}</h6>
                                            </Card.Title>
                                            {linkIcon}
                                        </Card.Body>
                                    </a>
                                    <Button variant="info" size="sm" style={{
                                        'top': '0',
                                        'position': 'absolute',
                                        'right': '0',
                                        'border-radius': '15px'
                                    }} onClick={() => flippy.toggle()}><FontAwesomeIcon
                                        icon={faBars}/></Button>
                                </FrontSide>
                                <BackSide style={{width: '30rem', 'border-radius': '5px'}}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h6 style={{'font-weight': 'bold'}}
                                                className="exp_card_back_title">{work_title}</h6>
                                            <p style={{'font-size': '12px', 'font-weight': 'bold', 'margin-top': '-10px', 'margin-bottom': '-10px'}}>{work_years}</p>
                                        </Card.Title>
                                        <hr/>
                                        <Card.Text class="exp_card_mobile_text">
                                            {work_description}
                                        </Card.Text>
                                        <Button variant="info" size="sm" style={{
                                            'top': '0',
                                            'position': 'absolute',
                                            'right': '0',
                                            'border-radius': '15px'
                                        }} onClick={() => flippy.toggle()}><FontAwesomeIcon
                                            icon={faBars}/></Button>
                                    </Card.Body>
                                </BackSide>
                            </Flippy>
                        </MobileView>
                        <BrowserView className="cards">
                            <a className="exp_nounderline" target="_blank" rel="noopener noreferrer" href={work_link}>
                                <Flippy
                                    flipOnHover={true}
                                    flipOnClick={false}
                                    flipDirection="horizontal"
                                    style={{width: '30rem', height: '30rem'}}
                                >
                                    <FrontSide style={{width: '30rem', 'border-radius': '5px', height: '30rem'}}>
                                        <Card.Img src={work_img} class="exp_card_img" style={{'margin-top': '15px'}}/>
                                        <Card.Title style={{'display': 'inline-flex', 'margin-top': '15px'}}>
                                            <h6 style={{
                                                whiteSpace: "pre-line",
                                                "margin-top": "20px"
                                            }}>{work_title}</h6>
                                        </Card.Title>
                                        {linkIcon}
                                    </FrontSide>
                                    <BackSide style={{width: '30rem', 'border-radius': '5px', height: '30rem'}}>
                                        <Card.Body style={{height: '30rem', 'color': 'black'}}>
                                            <Card.Title>
                                                <h6 style={{'font-weight': 'bold'}} class="exp_card_back_title">{work_title}</h6>
                                                <p style={{'font-size': '12px', 'font-weight': 'bold', 'margin-top': '-10px', 'margin-bottom':'-10px'}}>{work_years}</p>
                                            </Card.Title>
                                            <hr/>
                                            <Card.Text class="exp_card_text">
                                                {work_description}
                                            </Card.Text>
                                        </Card.Body>
                                    </BackSide>
                                </Flippy>
                            </a>
                        </BrowserView>
                    </Card>
                )
            })
        }

        return (
            <section id="experience">
                <div className="row">
                    <div className="three columns header-col text-center">
                        <h1><span>Experience</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <CardDeck style={{display: 'flex', flexDirection: 'row', 'flex-wrap': 'wrap'}}>
                            {work}
                        </CardDeck>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;