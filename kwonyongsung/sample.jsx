import React, { useState, useEffect } from 'react';

import CarGo from "../CarGo.js";
import CarWait from "../CarWait.js";
import CarStop from "../CarStop.js";



function App(){
	let [picture, pictureChange] = useState(CarGo);
	const [signal, setSignal] = useState(null);
	useEffect (() =>{
	fetch("https://mernproject.run.goorm.io/api/todo")
	.then((response) => response.json())
	.then((data) => setSignal(data));
	}, []);

	
	return <div className="App">
		{picture}		
		<button onClick={ ()=>{ pictureChange(CarGo) } }>Go</button> &nbsp;
		<button onClick={ ()=>{ pictureChange(CarWait) } }>Wait</button> &nbsp;
		<button onClick={ ()=>{ pictureChange(CarStop) } }>Stop</button> &nbsp;
		{signal?.map((sig) =>(
		<div key={sig.id}>
			<div>{sig.id}</div>
			<div>{sig.text}</div>
			<div>{sig.done ? "y" : "n"}</div>
			</div>)
		)}
	</div>
}

export default App;
