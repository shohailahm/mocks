import React from 'react';
import { Table, Button } from 'antd';
import './table.less';
export default class TableComponent extends React.Component{
    showOverlay=(over)=>{
     this.props.showover(over);
    }
    render(){
        const {columns,data,showFav}=this.props;
        return(
            <div>
                <Table columns={columns(showFav,this.showOverlay)} dataSource={data} onChange={this.handleChange} />
            </div>
        )
    }
}