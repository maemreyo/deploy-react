import React, { useState, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Định nghĩa kiểu Item
const ItemTypes = {
  TASK: "task",
};

// Component Task
const Task = ({ id, text, index, moveTask }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { id, index },
  }));

  return (
    <div
      ref={drag}
      style={{ border: "1px solid gray", padding: "5px", marginBottom: "5px" }}
    >
      {text}
    </div>
  );
};

// Component Column
const Column = ({ status, tasks, moveTask }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop(item, monitor) {
      if (!monitor.didDrop()) {
        moveTask(item.id, item.index, status);
      }
    },
  }));

  return (
    <div
      ref={drop}
      style={{
        width: "300px",
        minHeight: "400px",
        border: "1px solid blue",
        margin: "10px",
      }}
    >
      <h3>{status}</h3>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          index={index}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
};

// Component TaskManagement
const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", status: "todo" },
    { id: 2, text: "Task 2", status: "doing" },
    { id: 3, text: "Task 3", status: "done" },
    // Thêm các công việc khác tại đây
  ]);

  const moveTask = useCallback(
    (taskId, sourceIndex, destinationStatus) => {
      const sourceTask = tasks.find((task) => task.id === taskId);
      setTasks((prevTasks) => {
        let newTasks = prevTasks.filter((task) => task.id !== taskId);
        newTasks = [...newTasks, { ...sourceTask, status: destinationStatus }];
        return newTasks;
      });
    },
    [tasks]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Column
          status="todo"
          tasks={tasks.filter((task) => task.status === "todo")}
          moveTask={moveTask}
        />
        <Column
          status="doing"
          tasks={tasks.filter((task) => task.status === "doing")}
          moveTask={moveTask}
        />
        <Column
          status="done"
          tasks={tasks.filter((task) => task.status === "done")}
          moveTask={moveTask}
        />
      </div>
    </DndProvider>
  );
};

export default TaskManagement;
