import React from 'react';
import './Background.css'
import {ReactComponent as Shape} from "../../assets/pictures/random-shape.svg";

function Background() {

	// const shapes =

	return (
		<div className='background'>
			<div><Shape/></div>
			<div><Shape/></div>
			<div><Shape/></div>
		</div>

		// <div className='background'>
		//     <div className="area">
		//         <ul className="circles">
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//             <li></li>
		//         </ul>
		//     </div>
		// </div>
	);
}

export default Background;