import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

// async function complete_task(num) {
//     let response = await fetch(API_URL + "/finish_task", {
//       method: "POST",
//       body: JSON.stringify({
//         method: "POST",
//         mode: "no-cors",
//         tasknum: num,
//       }),
//     });
// }

const API_URL = "http://localhost:8000";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [numTasksLeft, setNumTasksLeft] = useState(-1);
  const [nextTask, setNextTask] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL + "/get_tasks", {
      method: "GET",
    })
      .then((serverPromise) => {
        serverPromise
          .json()
          .then((response) => {
            console.log(response);
            setTasks(response);
            setNumTasksLeft(response.length);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function doTask() {
    console.log("doing ");
    setModalOpen(true);

    console.log(tasks[nextTask]);
    await sleep(tasks[nextTask].eta);
    tasks[nextTask].status = 1;

    setTasks(tasks);
    console.log(tasks[nextTask].status);
    setNumTasksLeft(numTasksLeft - 1);
    setModalOpen(false);
    console.log("finish ");
  }

  return (
    <div className="center-content container">
      {numTasksLeft == 0 ? (
        <div>
          <h1>the robot has finished all its tasks!</h1>
          <button class="ui big secondary button" onClick={navigate("/")}>
            start over
          </button>
        </div>
      ) : (
        <div>
          <h1 className="welcome-header"> tasks: </h1>
          {tasks.map((task) => (
            <p
              style={{
                textDecoration: task.status ? "line-through" : "none",
              }}
            >
              {task.description}: eta {task.eta} ms
            </p>
          ))}
          <p> select a task to complete: </p>
          <select
            class="ui big selection dropdown"
            onChange={(e, value) => {
              console.log("set task: " + e.target.value);
              setNextTask(e.target.value);
            }}
          >
            {tasks.map((task, index) =>
              task.status == 0 ? (
                <option value={index}>{task.description}</option>
              ) : null
            )}
          </select>
          <button class="ui big secondary button" onClick={doTask}>
            complete task!
          </button>

          <Modal isOpen={modalOpen}>
            <h2
              style={{
                color: "black",
              }}
            >
              the robot is currently working ...
            </h2>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Tasks;
