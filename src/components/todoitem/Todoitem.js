import React, {PureComponent} from 'react';

class Todoitem extends PureComponent {

  handleItemClick = () => {
    this.props.handleItemDelete(this.props.index);
  };

  render() {
    return (
      <li onClick={this.handleItemClick}
      >
        {this.props.content}
      </li>
    );
  }
}

export default Todoitem;
