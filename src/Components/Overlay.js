import React from 'react';
import './overlay.less';
import { Tabs } from 'antd';
import InfoComponent from './InfoComponent';
const { TabPane } = Tabs;
export default class Overlay extends React.Component{
    toggleoverlay=()=>{
        this.props.toggle();
    }
    render(){
        return(
            <div className="overlay">
               
               <div className="white-div">
                  <a onClick={this.toggleoverlay}>close </a>
                  <Tabs>
                      <TabPane tab="Deal Info" key="1">
                         <InfoComponent data={this.props.data}/>
                      </TabPane>
                      <TabPane tab="Additional Info" key="2">

                      </TabPane>
                  </Tabs>
               </div>
               <div className="emptyoverlay">

               </div>
            </div>
        )
    }
}