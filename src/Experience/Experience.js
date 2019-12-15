import React from 'react';
import './Experience.css';
import data from '../data/experience_data.json';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView } from "react-device-detect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";

class Experience extends React.Component {
  fill_data(temp_data){
        const title1 = temp_data.title;
        const description1 = temp_data.description;
        const img1 = require('../img/Experience/' + temp_data.img);
        var link1 = temp_data.link;
        let linkIcon = <FontAwesomeIcon style={{ 'float':'right', 'margin-top':'20px' }} icon={faExternalLinkAlt}/>;
        if(link1 === ""){
            link1 = null;
            linkIcon=null;
        }

        return (
            <Card style={{ width: '18rem', "margin": "2.5%", 'border': 'none'}}>
                    <MobileView>
                        <Flippy
                            flipOnHover={false}
                            flipOnClick={false}
                            flipDirection="horizontal"
                            ref={(r) => this[title1] = r}
                            style={{ width: '18rem'}}
                        >
                            <FrontSide style={{ width: '18rem', 'border-radius': '5px'}}>
                                <a className="exp_nounderline" target="_blank" rel="noopener noreferrer"  href={link1}>
                                <Card.Img src={img1} class="exp_card_img"/>
                                    <Card.Body style={{ 'margin':'-15px', 'height': '82.5px' }}>
                                        <Card.Title style={{'display':'inline-flex'}}>
                                            <h6 style={{ whiteSpace: "pre-line", "margin-top":"20px" }}>{title1}</h6>
                                        </Card.Title>
                                        {linkIcon}
                                    </Card.Body>
                                </a>
                                <Button variant="info" size="sm" style={{'top':'0', 'position': 'absolute', 'right':'0', 'border-radius': '15px' }} onClick={() => this[title1].toggle()}><FontAwesomeIcon icon={faBars}/></Button>
                            </FrontSide>
                            <BackSide style={{ width: '18rem', 'border-radius': '5px'}}>
                                <Card.Body>
                                    <Card.Title><h6 class="exp_card_back_title">{title1}</h6></Card.Title>
                                    <hr/>
                                    <Card.Text class="exp_card_text">
                                        {description1.split('\n').map(function(item, key) {
                                            return (
                                                <span key={key}>
                                                {item}
                                                    <br/><br/>
                                              </span>
                                            )
                                        })}
                                    </Card.Text>
                                    <Button variant="info" size="sm" style={{'top':'0', 'position': 'absolute', 'right':'0', 'border-radius': '15px' }} onClick={() => this[title1].toggle()}><FontAwesomeIcon icon={faBars}/></Button>
                                </Card.Body>
                            </BackSide>
                        </Flippy>
                    </MobileView>
                    <BrowserView>
                         <a className="exp_nounderline" target="_blank" rel="noopener noreferrer"  href={link1}>
                            <Flippy
                                flipOnHover={true}
                                flipOnClick={false}
                                flipDirection="horizontal"
                                ref={(r) => this.flippy = r}
                                style={{ width: '18rem', height: '17rem'}}
                            >
                                <FrontSide style={{ width: '18rem', 'border-radius': '5px'}}>
                                    <Card.Img src={img1} class="exp_card_img"/>
                                    <Card.Body style={{ 'margin':'-15px', 'height': '82.5px'}}>
                                        <Card.Title style={{'display':'inline-flex'}}>
                                            <h6 style={{ whiteSpace: "pre-line", "margin-top":"20px" }}>{title1}</h6>
                                        </Card.Title>
                                        {linkIcon}
                                    </Card.Body>
                                </FrontSide>
                                <BackSide style={{ width: '18rem', 'border-radius': '5px'}}>
                                    <Card.Body>
                                        <Card.Title><h6 class="exp_card_back_title">{title1}</h6></Card.Title>
                                        <hr/>
                                        <Card.Text class="exp_card_text">
                                            {description1.split('\n').map(function(item, key) {
                                                return (
                                                    <span key={key}>
                                                    {item}
                                                        <br/><br/>
                                                  </span>
                                                )
                                            })}
                                        </Card.Text>
                                    </Card.Body>
                                </BackSide>
                            </Flippy>
                        </a>
                    </BrowserView>
            </Card>
        )
    }

  makeGrid(){
        var output = [];
        var i = 0;
        while(i < data.length){
            output.push(this.fill_data(data[i]));
            i++;
        }
        return output;
    }

  render() {
    return (
        <div>
            <h1>Experience</h1>
            <br/>
            <CardColumns style={{"justify-content": "center", "display": "inline"}}>
                {this.makeGrid()}
            </CardColumns>
        </div>
    );
  }
}

export default Experience;