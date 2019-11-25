import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import './slider.less';

export default class SliderComponent extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  render() {
      const {props:{data}}=this;
    return (
      <div>
        {
              this.props.children
          }
        <Menu
          style={{ width: '100%',marginVertical:8 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
          {...this.props}
        >
            {
                data.map((item,i)=>(
                    <Menu.Item key={i+1} className="customclass">
                        <Icon type="mail" />
                        {item}
                     </Menu.Item>
                ))
            }
       
          
        </Menu>
      </div>
    );
  }
}
