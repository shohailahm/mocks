import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import SliderComponent from '../Components/Slider';
import './home.less';
import TabsComponent from '../Components/Tabs';
const { Header, Content, Footer, Sider } = Layout;


const data=['Deal Room','Broker-Dealer Registry', 'Insurance-Statitics'];
export default class Home extends React.Component{
    render(){
        return(
            <Layout style={{backgroundColor:'#fff',minHeight:'100vh'}}>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
              theme="light"
              
            >
              <div className="logo" />
              <div className="sideNav">
              <SliderComponent data={data}/>
              </div>
            </Sider>
            <Layout>
            <div style={{height:60}}>
                
            </div>
         
                       <TabsComponent/>
                   
            </Layout>
          </Layout>
        
        )
    }
}