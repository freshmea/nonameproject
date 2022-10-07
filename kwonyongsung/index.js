import React, { useState } from 'react';

import CarGo from "../CarGo.js";
import CarWait from "../CarWait.js";
import CarStop from "../CarStop.js";


function App(){
	let [picture, pictureChange] = useState(CarGo);
	
	
	return <div className="App">
		{picture}
		
		<!-- 데이터 받기 -> pictureChange(CarStop) -->
		
		<button onClick={ ()=>{ pictureChange(CarGo) } }>Go</button> &nbsp;
		<button onClick={ ()=>{ pictureChange(CarWait) } }>Wait</button> &nbsp;
		<button onClick={ ()=>{ pictureChange(CarStop) } }>Stop</button>
	</div>
}

export default App;
