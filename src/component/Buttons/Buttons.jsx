import React from 'react'
import {Button, Col, Row} from "antd";

const Buttons = ({status, onRun, onStop, onPause, onReset}) => {

    let lastClick = 0;
    const checkIfDouble = () => { // check double clicking
        const now = Date.now();
        if (now - lastClick <= 300) {
            onPause();
        }
        lastClick = now
    }

    return (
        <Row align="middle" justify="space-around">
            <Col>
                <Button type="ghost" onClick={checkIfDouble} size="large">Wait</Button>
            </Col>
            <Col>
                {
                    status === 'paused' ?
                        <Button type="primary" onClick={onRun} size="large">Start</Button> :
                        <Button type="primary" onClick={onStop} danger size="large">Stop</Button>
                }
            </Col>
            <Col>
                <Button type="ghost" danger onClick={onReset} size="large">Reset</Button>
            </Col>
        </Row>
    )
}

export default Buttons;