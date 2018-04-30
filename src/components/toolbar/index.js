import React, { Component } from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

export class Toolbar extends Component {
    render() {
        return ( < ButtonGroup >
            < Button > File < / Button >
            < Button > Edit < / Button >
            < / ButtonGroup >
    )
        ;
    }
}
