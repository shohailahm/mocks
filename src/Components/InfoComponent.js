import React from 'react';
import { Spin, Alert } from 'antd';
import './overlay.less';
import DesscriptionBox from './Description';
export default class InfoComponent extends React.Component{
    render(){
        const {data}=this.props;
        console.log(data);
        if(!this.props.data){
          return  <Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        }
        return(
            <div>
                 <div style={{display:'flex',justifyContent:'space-around',overflow:'auto'}}>
                     <div>
                       Target Raised  
                       <div className="info">
                      {data.raise}  
                     </div>
                     </div>
                     <div>
                      Amount Received
                      <div className="info">
                      {data.received}   
                     </div>   
                     </div>
                     <div>
                       Valuation 
                       <div className="info">
                       {data.valuation} 
                     </div>
                     </div>
                     <div>
                       status
                       <div className="info">
                       {data.status} 
                     </div> 
                     </div>
                 </div>
                <DesscriptionBox/>
                 
            </div>
        )
    }
}