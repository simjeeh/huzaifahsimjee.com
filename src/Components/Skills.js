import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'

class Skills extends Component {
    render() {
        if (this.props.data) {
            var skillList = this.props.data.skills;
            var photos = [];
            while(skillList.length > 0){
                photos.push(skillList.splice(0,3))
            }
            var skills =
                    photos.map((cols) => (
                        <Row style={{'display': 'flex', 'margin-bottom':'25px'}}>
                            {cols.map((img) => (
                                <Col style={{'margin-top': 'auto', 'margin-bottom': 'auto', 'margin-right':'50px'}}>
                                    <Image src={"images/skills/"+img} rounded />
                                </Col>
                            ))}
                        </Row>
                    ))
        }

        return (
            <section id="skills">
                <div className="row">
                    <div className="three columns header-col text-center">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <Container>
                            {skills}
                        </Container>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;
