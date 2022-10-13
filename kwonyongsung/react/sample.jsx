import React, { useState, useEffect } from 'react';

import CarGo from "../CarGo.js";
import CarWait from "../CarWait.js";
import CarStop from "../CarStop.js";
import Clock from "../Clock.js";
import PersonIn from "../PersonIn.js";
import PersonOut from "../PersonOut.js";


function App() {
	let [picture, pictureChange] = useState(CarGo);
	let [person, personChange] = useState(PersonOut);
	const [signal, setSignal] = useState(null);
	const [state, setstate] = useState(null);
	useEffect(() => {
		fetch("https://kwonys.run.goorm.io/api/todo")
			.then((response) => response.json())
			.then((data) => setSignal(data));
		signal?.map((sig) => (
			setstate(sig.text)
		))
	}, [signal]);


	useEffect(() => {
		if (state === "PersonOut\n\r\n") personChange(PersonOut);
		else if (state === "PersonIn\n\r\n") personChange(PersonIn);
		if (state === "CarGo\n\r\n") pictureChange(CarGo);
		else if (state === "CarWait\n\r\n") pictureChange(CarWait);
		else if (state === "CarStop\n\r\n") pictureChange(CarStop);
	}, [state])


	return <div className="App">
		<div style={{ textAlign: "center", marginTop: "10%" }}>
			<Clock />
			<div style={{ marginTop: "5%" }}> </div>
			{picture}
			<p></p>
			{person}
		</div>
	</div>
}

export default App;