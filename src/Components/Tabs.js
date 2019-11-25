import React from 'react';
import { Tabs,Layout,Button,Input } from 'antd';
import TableComponent from './Table';
import columnsData from '../utils/columns';
import mockData from '../utils/mockData';
import Form from './Form';
import Overlay from './Overlay';

const { TabPane } = Tabs;
const { Header, Content, Footer, Sider } = Layout;
export default class TabsComponent extends React.Component{
    state={
      showForm:false,
      showOverlay:false,
      dataTable:mockData
    }
    callback = key =>{
        console.log(key);
      }
      toggleForm=()=>{
          this.setState({showForm:!this.state.showForm});
      }
      showOverlay=(show)=>{
          this.setState({showOverlay:!this.state.showOverlay,current:show});
      }
      add=(details)=>{
        let data=[...this.state.dataTable];
        data.push({name:details.name,indType:details.indType,type:details.type,raise:details.raise,valuation:details.valuation,location:details.location,status:details.status,received:details.received,fav:false})
        this.setState({dataTable:data});
        this.toggleForm();
      }
  render(){
      return(
          <div>
            {this.state.showOverlay && <Overlay toggle={this.showOverlay} data={this.state.current} />}
              <Content style={{padding:30,backgroundColor:'#fff'}}>
                  
                  <h3>Deal Room</h3>
                   <Button onClick={this.toggleForm}>{this.state.showForm?"Close":"Add Insurance"}</Button>
                   {this.state.showForm && <Form onSubmit={this.add} data-test="form"/> }
                <Tabs defaultActiveKey="1" onChange={this.callback} data-test="component-tabs">
                    <TabPane tab="External Issuances" key="1">
                      <TableComponent showover={this.showOverlay} columns={columnsData} data={this.state.dataTable}/>
                    </TabPane>
                    <TabPane tab="Favorite Issuances" key="2">
                      <TableComponent showover={this.showOverlay} columns={columnsData} showFav={true} data={this.state.dataTable}/>
                    </TabPane>
                    <TabPane tab="My Issuances" key="3">
                      <TableComponent showover={this.showOverlay} columns={columnsData} showFav={true} data={this.state.dataTable}/>
                    </TabPane>
                    <TabPane tab="MNDA Managament" key="4">
                    </TabPane>
                </Tabs>
            </Content>
          </div>
      )
  }
}