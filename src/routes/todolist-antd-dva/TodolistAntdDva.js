import React, {PureComponent, Fragment} from 'react';
import {connect} from 'dva';
import {Row, Col, Input, Button, List} from 'antd';
import styles from './TodolistAntdDva.less';

class TodolistAntdDva extends PureComponent {

  handleInputChange= (e) => {
    this.props.dispatch({
      type: 'todolist/inputChange',
      payload: e.target.value
    });
  };

  handleBtnClick = () => {
    this.props.dispatch({
      type: 'todolist/addItem',
    });
  };

  deleteItem = (index) => {
    this.props.dispatch({
      type: 'todolist/deleteItem',
      index
    });
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col span={4}/>
          <Col span={16} className={styles.content}>
            <Input
              maxLength={50}
              placeholder="请输入..."
              value={this.props.inputValue}
              onChange={this.handleInputChange}
            />
            <Button
              type="primary"
              onClick={this.handleBtnClick}
            >
              添加
            </Button>
            <List
              className={styles.list}
              bordered
              dataSource={this.props.list}
              renderItem={(item, index) => (
                <List.Item
                  actions={[<Button onClick={()=>this.deleteItem(index)} type="danger">删除</Button>]}
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

const mapStateToProps = (state) => ({
  inputValue: state.todolist.inputValue,
  list: state.todolist.list
});

export default connect(mapStateToProps)(TodolistAntdDva);
