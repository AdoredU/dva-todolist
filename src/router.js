import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Todolist from './routes/todolist/Todolist';
import TodolistAntd from './routes/todolist-antd/TodolistAntd';
import TodolistAntdDva from './routes/todolist-antd-dva/TodolistAntdDva';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/todolist" exact component={Todolist} />
        <Route path="/todolistAntd" exact component={TodolistAntd}/>
        <Route path="/todolistAntdDva" exact component={TodolistAntdDva}/>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
