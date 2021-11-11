import React, {Component} from 'react';
import Todoltem from './Todoltem';

class TodoItemList extends Component{
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      ({ id, text, checked }) => (
        <Todoltem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
} 

export default TodoItemList;