import React from 'react';
import { Breadcrumb } from 'antd';
import eventProxy from '../state/eventProxy'

class BreadCrumb extends React.Component {
    state = {
        key: 0
    };
    componentDidMount() {
        // 监听LeftMenuClick 事件
        eventProxy.on('LeftMenuClick', (key) => {
            this.setState({
                key
            });
        });
    }

    render() {
        let menuItems =[
            {},
            {subT:'数据管理',name:'数据查看'},
            {subT:'数据管理',name:'数据下载'},
            {subT:'数据上传',name:'单个文件上传'},
            {subT:'数据上传',name:'批量上传'},
            {subT:'帮助',name:'系统流程'},
            {subT:'帮助',name:'拍摄注意事项'},
            {subT:'帮助',name:'数据上传要求'},
            {subT:'帮助',name:'下载文件内容'},
            {subT:'帮助',name:'账户信息'},
            {subT:'帮助',name:'在线技术支持'},
            ];
        let BreadcrumbItems =[
            <Breadcrumb.Item>首页</Breadcrumb.Item>
        ];
        let idx =this.state.key;
        if(idx !==0){
            BreadcrumbItems.push(
                    <Breadcrumb.Item>{menuItems[idx].subT}</Breadcrumb.Item>
            );
            BreadcrumbItems.push(
                <Breadcrumb.Item>{menuItems[idx].name}</Breadcrumb.Item>
            );
        }





        return (
             <Breadcrumb >
                {BreadcrumbItems}
            </ Breadcrumb >

        )
    }
}

export default BreadCrumb;