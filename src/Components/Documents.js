import React from 'react';
import './overlay.less';
import { Button } from 'antd';
export default class Documents extends React.Component{
    render(){
        return(
            <div>
              <h2 style={{textAlign:'left',marginLeft:8,fontSize:'bold'}}>{this.props.header}</h2>
             {this.props.docs && this.props.docs.map((item)=>(<div className="rows">
               <h3>{item}</h3>
               <Button type="link" icon="download">
                  Download
               </Button>
             </div>))}
            </div>
        )
    }
}