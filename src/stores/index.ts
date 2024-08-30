import {makeAutoObservable} from 'mobx';
import {TaskType} from '../core';
import {mockTasks} from './mockData';
import { findIndex } from 'lodash';

class Stores {
  taskList: TaskType[] = mockTasks;
  constructor() {
    makeAutoObservable(this);
  }

  onCreateTask = (task: TaskType) => {
    const arrTemp =  this.taskList.concat();
    arrTemp.push(task);
    this.taskList = arrTemp;
  };

  onDeleteTask = (task: TaskType) => {
    const arrTemp =  this.taskList.concat();
    const indexTask = findIndex(arrTemp, i=> i.id === task.id);
    arrTemp.slice(indexTask, 1);
    this.taskList = arrTemp;
  };

  onEditTask = (task: TaskType) => {
    const arrTemp =  this.taskList.concat();
    const indexTask = findIndex(arrTemp, i=> i.id === task.id);
    arrTemp[indexTask] = task;
    this.taskList = arrTemp;
  };

  get taskCompleted() {
    return this.taskList.filter(task => task.status === 'completed');
  }

  get taskInReview() {
    return this.taskList.filter(task => task.status === 'in-review');
  }

  get taskTodo() {
    return this.taskList.filter(task => task.status === 'todo');
  }
}

export const stores = new Stores();
