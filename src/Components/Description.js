import React from 'react';
import './overlay.less';
import Documents from './Documents';
export default class DesscriptionBox extends React.Component{
    render(){
        return(
        <div>
        <div style={{borderRadius:4,width:'80%',backgroundColor:'#fff',textAlign:'left',marginLeft:'10%',marginTop:16,padding:16}}>
           <h3>Description</h3>
           Descrtipon goes here, whatever the descrption are there. 
           it must be shown in a particular format , the readablity of the user should be also taken 
           into consedration
        </div>
        <div style={{borderRadius:4,width:'80%',backgroundColor:'#fff',textAlign:'left',marginLeft:'10%',marginTop:16,padding:16}}>
           <h3>Required</h3>
            <div className="row">
                <h4>Date of creation</h4>
                <span>may 24,2019</span>
            </div>
            <div className="row">
                <h4>Country of Issuance</h4>
                <span>US</span>
            </div>
            <div className="row">
                <h4>Industry</h4>
                <span>Renewable Energy</span>
            </div>
            <div className="row">
                <h4>Total shared</h4>
                <span>10,000,000</span>
            </div>
            <div className="row">
                <h4>Free Float</h4>
                <span>1,000,000</span>
            </div>
            <div className="row">
                <h4>Price per share</h4>
                <span>$100</span>
            </div>
        </div>
        <Documents header="Common documents" docs={['MarketingDocs.docx','Presentation.pptx']}/>
        <Documents header="Confidentail documents" docs={['Executive.docx','issuanceSummary.xls']}/>
        <div style={{textAlign:'left',marginLeft:8,marginBottom:8}}>
           <h4>sourcing party</h4>
            John Murphy
            <p style={{color:'gray'}}>john@gmail.com</p>
        </div>
        <div style={{textAlign:'left',marginLeft:8,marginBottom:8}}>
        <h4>issuing party</h4>
         John doe
         <p style={{color:'gray'}}>johndoe@gmail.com</p>
        </div>
        
        </div>
        );
    }
}