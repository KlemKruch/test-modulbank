import { useMachine } from "@xstate/react";
import { machine } from "./machine";
import { CiPlay1, CiMinimize1, CiTurnR1, CiMaximize1 } from "react-icons/ci";
import "./App.css";

function App() {
	const [state, send] = useMachine(machine);

	const mini = state.matches("mini");
	const miniPlayer = state.matches("fullMini");

	window.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			send({ type: "key.escape" });
		}
	});

	return (
		<>
			<div className="video-block">
				<p>
					Create a mini web application using the State Machines
					pattern to manage the interface state.
				</p>
				<div className="mini-block">
					<CiPlay1
						className="button"
						onClick={() => send({ type: "toggle" })}
					/>
				</div>
				<div className={mini ? "none" : "full-block"}>
					<div className="overlay">
						<div className={!miniPlayer ? "box" : "box-mini"}>
							<div className="button-block">
								<h3>PLAYER</h3>
								<CiTurnR1
									className="button-full"
									onClick={() => send({ type: "toggle" })}
								/>
							</div>
							<video
								controls
								src="../public/14270112_3840_2160_60fps.mp4"
							></video>
							<div className="control-panel">
								{!miniPlayer ? (
									<CiMinimize1
										className="button-full"
										onClick={() =>
											send({ type: "key.fullMini" })
										}
									/>
								) : (
									<CiMaximize1
										className="button-full"
										onClick={() =>
											send({ type: "key.full" })
										}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
