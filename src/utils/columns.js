import React from 'react'
import { Badge } from 'antd'
import { Icon } from 'antd';
const columnsData =(show,fn)=>([
    {
        title: 'fav',
         dataIndex: 'fav',
        className: show? "show" : "hide",
      render: (fav) => <>
        <Icon type="star" theme={fav?"twoTone":"outlined"} />
      </>
      },
    {
      title: 'Name & Industry Type',
      dataIndex: 'name',
      key:'name',
      render: (text,row) => <><a onClick={()=>{fn(row)}}>{text}</a>
      <p style={{color:'grey'}}>{row.indType}</p>
    </>
    },
    {
      title: 'Issunace Type',
      dataIndex: 'type',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
        title: 'Target Raise',
        dataIndex: 'raise',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.raise - b.raise,
    },
    {
        title: 'Pre-money valuation',
        dataIndex: 'valuation',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.valuation- b.valuation,
    },
    {
        title: 'Amount Received',
        dataIndex: 'received',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.received- b.received,
    },
    {
        title: 'Location',
        dataIndex: 'location',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.location.length - b.location.length,
    },  {
        title: 'Status',
        dataIndex: 'status',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.status.length - b.status.length,
        render: text => <><Badge status={text==="closed"?"success":'processing'}/>{text}</>,
    },
  ]);

  export default columnsData;