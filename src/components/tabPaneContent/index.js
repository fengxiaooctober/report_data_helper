import React, { Component } from 'react';
import { Tabs, Table, Row, Button } from 'antd';

const { TabPane } = Tabs;
const ButtonGroup = Button.Group;

export class TabPaneContent extends Component {
    render() {
        return (<TabPane
            forceRender={false}
            key={this.props.key}
            tab={this.props.tab}
        >
            <Row>
                <ButtonGroup>
                    <Button>Manage Key-value</Button>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                    <Button>Confirm</Button>
                </ButtonGroup>
            </Row>
            <Table
                columns={ this.props.columns || [] }
                dataSource={ this.props.dataSource || [] }
                pagination={false}
            />
        </TabPane>);
    }
}
