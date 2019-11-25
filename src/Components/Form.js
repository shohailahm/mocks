import React from 'react';
import {Input,Row,Col, Button,notification} from 'antd';


export default class Form extends React.Component{
  state={

  }
  onChange=(ev)=>{
    debugger
    this.setState({[ev.target.name]:ev.target.value});
  }
  submit=()=>{
    const {name,indType,type,raise,valuation,received,location,status}=this.state;
    if(name&&indType&&type&&raise&&valuation&&received&&location&&status){
     this.props.onSubmit(this.state);
      return this.setState({});
    }else{
      debugger
      notification.open({
        message: 'Error',
        description:
          'all feilds are mandatory'
      });
    }
  }
    render(){
      return( 
           <div style={{marginTop:20}}>
                <Row gutter={16}>
                   
                        <Col span={6} className="gutter-row"><Input placeholder="Name" name="name" required onChange={this.onChange}/></Col>
                        <Col span={6} className="gutter-row"><Input placeholder="Industry Type" name="indType" required onChange={this.onChange}/></Col>
                        <Col span={6} className="gutter-row"><Input placeholder="Issuance Type" name="type" required onChange={this.onChange}/></Col>
                        <Col span={6} className="gutter-row"><Input placeholder="Target Raise" name="raise" required onChange={this.onChange}/></Col>
                  
                </Row>
                <Row gutter={16}>
                   
                        <Col span={6} className="gutter-row"><Input placeholder="pre-money valuation" name="valuation" required onChange={this.onChange}/></Col>
                        <Col span={6} className="gutter-row"><Input placeholder="Amount Received" name="received" required onChange={this.onChange}/></Col>
                        <Col span={6} className="gutter-row"><Input placeholder="location" name="location" required onChange={this.onChange}/></Col>
                        <Col span={6} className="gutter-row"><Input placeholder="status" required name="status" onChange={this.onChange}/></Col>
             
           </Row>
           <Button type="primary" onClick={this.submit}>Submit</Button>
          </div>
      );
    }
}