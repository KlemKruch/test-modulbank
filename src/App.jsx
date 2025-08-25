import { useMachine } from "@xstate/react";
import { machine } from "./machine";
import "./App.css";

function App() {
  const [state, send] = useMachine(machine);

  const mini = state.matches("mini");
  console.log(mini);
  return (
    <>
      <div className="video-block">
        <p>
          Create a mini web application using the State Machines pattern to
          manage the interface state.
        </p>
      </div>
    </>
  );
}

export default App;
