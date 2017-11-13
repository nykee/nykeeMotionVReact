import React from 'react';
import { Menu, Icon ,Button} from 'antd'
import {Link} from 'react-router'
import eventProxy from '../state/eventProxy'
const SubMenu = Menu.SubMenu;

class LeftNav extends React.Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        collapsed: false,
        openKeys: ['sub1'],
        divColl:false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            divColl: !this.state.divColl
        });
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    handleIndexClick = ()=>{
        this.setState({
            openKeys:['']
        })
    }
    //onselect方法内触发事件
    onSelect({ item, key, selectedKeys }){
        eventProxy.trigger('LeftMenuClick', key);
    }

    render() {
        let divNormalStyle ={height:'100%',background:'#404040'};
        let divCollapseStyle ={height:'100%',background:'#404040',width:64}
        return (
                //style={{ width: '100%' }}


                        <div  style={this.state.divColl?divCollapseStyle:divNormalStyle}>
                            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                            <Menu
                                defaultSelectedKeys={['0']}
                                defaultOpenKeys={[]}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                                onOpenChange={this.onOpenChange}
                                openKeys={this.state.openKeys}
                                onSelect={this.onSelect}
                            >

                                <Menu.Item key="0" >
                                    <Icon type="desktop"  onClick={this.handleIndexClick}/>
                                    <span  onClick={this.handleIndexClick}><Link to="/" style={{color:'#fff'}}>首页</Link></span>
                                </Menu.Item>

                                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>数据管理</span></span>}>
                                    <Menu.Item key="1"><Link to="/datacheck">数据查看</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/">数据下载</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="mail" /><span>数据上传</span></span>}>
                                    <Menu.Item key="3"><Link to="/singelupload">单个文件上传</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/">批量上传</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>帮助</span></span>}>
                                    <Menu.Item key="5"><Link to="/">系统流程</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/">拍摄注意事项</Link></Menu.Item>
                                    <Menu.Item key="7"><Link to="/">数据上传要求</Link></Menu.Item>
                                    <Menu.Item key="8"><Link to="/">下载文件内容</Link></Menu.Item>
                                    <Menu.Item key="9"><Link to="/">账户信息</Link></Menu.Item>
                                    <Menu.Item key="10"><Link to="/">在线技术支持</Link></Menu.Item>

                                </SubMenu>
                            </Menu>
                        </div>







        );
    }

}

export default LeftNav;