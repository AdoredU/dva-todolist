import React, {PureComponent, Fragment} from 'react';
import {Row, Col, Input, Button, List} from 'antd';
import styles from './TodolistAntd.less';

class TodolistAntd extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [1, 2, 3]
    }
  }

  handleInputChange = (e)=> {
    this.setState({
      inputValue: e.target.value,
    })
  };

  handleBtnClick = () => {
    console.log('click')
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  };

  handleDelete = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col span={4}/>
          <Col span={16} className={styles.content}>
            <Input maxLength={50} placeholder="请输入..." value={this.state.inputValue} onChange={this.handleInputChange}/>
            <Button type="primary" onClick={this.handleBtnClick}>添加</Button>
            <List
              className={styles.list}
              bordered
              dataSource={this.state.list}
              renderItem={(item, index) => (
                <List.Item
                  actions={[<Button type="danger" onClick={()=>this.handleDelete(index)}>删除</Button>]}
                >
                  {item}
                </List.Item>
              )}
            />
          </Col>
          <Col span={4}/>
        </Row>
      </Fragment>
    );
  }
}

export default TodolistAntd;
