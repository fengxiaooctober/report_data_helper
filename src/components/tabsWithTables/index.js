import React, { Component } from 'react';
import { Tabs } from 'antd';

import { TabPaneContent } from '../tabPaneContent';

export class TabsWithTables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {title: '标题列', dataIndex: 'd'},
                {title: '', dataIndex: 'e'},
                {title: '2018-5-31', dataIndex: 'f'},
                {title: '2018-2-28', dataIndex: 'g'},
                {title: '2017-12-31', dataIndex: 'h'},
            ],
            dataSource: [],
        };
    }
    render() {
        return ( < Tabs
            defaultActiveKey = "1"
            size = "small" >
            <TabPaneContent
                tab = "Tab 1"
                key = "1" />
            <TabPaneContent
                tab = "Tab 2"
                key = "2" />
            <TabPaneContent
                tab = "Tab 3"
                key = "3" />
        < / Tabs >
    )
        ;
    }
}
