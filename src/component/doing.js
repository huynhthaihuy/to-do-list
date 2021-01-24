import React , { useState } from 'react';
import Task from "./Task";
import "../css/styles.css";
import "../css/taskmanager.css";
import "font-awesome/css/font-awesome.min.css";
export default function Doing() {
    const DATA = [
        {
            title: "title 1",
            content: "lam bai  react lay diem",
            status: "doing",
          },
    ]

    const [dataTask, setDataTask] = useState(DATA);

    const updateData = (value, index) => {
        const task = {
            ...dataTask[index],
            content : value,
        }
        const dataTemp = [
            ...dataTask,
            task,
        ]
        setDataTask(dataTemp);
    }

    const renderTask = () => {
        return dataTask.map((item, index) => {
            return <Task
                // title={item.title}
                // content={item.content}
                // status={item.status}
                {...item}
                //  status={'cancel'}
                isLastItem={index === dataTask.length - 1}
                isFirstItem={index === 0}
                updateData={updateData}
                index={index}


                key={index}
            />
        })
    }
    return (
        <div>
      <div className="header row bg-dark">
     <div >
        <h3>TASK MANAGERMENT APPLICATION</h3>
        <div className="input_main">
          <input type="text" id="myInput" placeholder="Add new task in here" />
          <button onclick="newElement()" className="addBtn mx-2 btn btn-success"><i className="fa fa-plus-circle" /></button>
          <button id="cross_x" className="addBtn btn btn-danger"><i className="fa fa-times-circle" /></button>
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