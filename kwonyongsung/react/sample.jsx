import React, { useState, useEffect } from 'react';

import CarGo from "../CarGo.js";
import CarWait from "../CarWait.js";
import CarStop from "../CarStop.js";


function App() {
	let [picture, pictureChange] = useState(CarGo);
	const [signal, setSignal] = useState(null);
	const [state, setstate] = useState(null);
	useEffect(() => {
		fetch("https://kwonys.run.goorm.io/api/todo") //서버 주소
			.then((response) => response.json())
			.then((data) => setSignal(data));
		signal?.map((sig) => (
			setstate(sig.text)
		))
	}, [signal]);


	useEffect(() => {
		if (state === "CarGo\r\n") pictureChange(CarGo);
		else if (state === "CarWait\r\n") pictureChange(CarWait);
		else if (state === "CarStop\r\n") pictureChange(CarStop);
	}, [state])


	return <div className="App">
		{picture}
	</div>
}

export default App;
