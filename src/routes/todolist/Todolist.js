import React, {PureComponent, Fragment} from 'react';
import Todoitem from '../../components/todoitem/Todoitem';

class Todolist extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['学习React', '学习Java', '学习Python']
    }
  }

  handleOnChange = (e)=> {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleBtnClick = () => {
    const value = this.state.inputValue;
    this.setState({
      list: [...this.state.list, value],
      inputValue: ''
    });
  };

  handleDelete = (index) => {
    const _list = [...this.state.list];
    _list.splice(index, 1);
    this.setState({
      list: _list
    });
  };

  render() {
    return (
      <Fragment>
        <input type="text" value={this.state.inputValue} onChange={this.handleOnChange}/>
        <button onClick={this.handleBtnClick}>添加</button>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return (
                <Todoitem key={index}
                    content={item}
                    index={index}
                    handleItemDelete={()=>this.handleDelete(index)}
                />
              );
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
