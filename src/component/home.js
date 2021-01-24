import React , { useState } from 'react';
import Task from "./Task";
import "../css/styles.css";
import "../css/taskmanager.css";
import "font-awesome/css/font-awesome.min.css";
import TodoStore from '../store/TodoStore.js';
import {observer} from 'mobx-react';
 function Home() {
    
    // const DATA = [
    //     {
    //         title: 'title 1',
    //         content: 'hoc react',
    //         status: 'done',
    //     },
    // ]

    // const [dataTask, setDataTask] = useState(DATA);

    const updateData = (value, index) => {
        // const task = {
        //     ...TodoStore[index],
        //     content : value,
        // }
        // const dataTemp = [
        //     ...TodoStore,
        //     task,
        // ]
        // setTodoStore(dataTemp);
    }

    const renderTask = () => {
      return TodoStore.arrTaskList.map((item, index) => {
          return <Task
              // title={item.title}
              // content={item.content}
              // status={item.status}
              {...item}
              //  status={'cancel'}
              // isLastItem={index === dataTask.length - 1}
              isFirstItem={index === 0}
              updateData={updateData}
              index={index}
              key={index}
          />
      })
  }
    return (
        <div>
      <div className="header row bg-danger">
     <div >
        <h3>TASK MANAGERMENT APPLICATION</h3>
        <div className="input_main">
          <input type="text" id="myInput" placeholder="Add new task in here" />
          <button onClick={() => TodoStore.addNewTask( {
                            title: 'Task nay la task moi',
                            content: 'content',
                            status: 'done',
                        },)} className="addBtn mx-2 btn btn-success"><i className="fa fa-plus-circle" /></button>
          <button onClick={() => TodoStore.removeTodo()} className="addBtn btn btn-danger"><i className="fa fa-times-circle" /></button>
        </div>
      </div>
  </div>
  <ul id="myUL">
          {renderTask()}
        </ul>
  <div className="Footer mt-5 d-flex justify-content-center">
        <h5>@CopyrightFE14</h5>
      </div>
  </div>
  );;
  }
  export default observer(Home);