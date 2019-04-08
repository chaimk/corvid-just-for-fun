export function printInfo(info, textComp, msgType) {
	if (!textComp) {
		textComp = "#resultText";
	}
	// $w(textComp).text = JSON.stringify(info);
	// if (info) {
		switch (msgType) {
			case "warn":
				console.warn(info);
				break;
			case "error":
				console.error(info);
				break;
			default:
				console.log(info);
		}
	// }
	$w(textComp).text = (typeof info === 'string' ? info : JSON.stringify(info));
	console.log("hello there from Public > utils.js > printInfo()")
}

export function printEventInfo (event, dynamicOrStatic, textComp) {
	printInfo(`${dynamicOrStatic} ${event.type} event occurred on ${event.target.type} with id '${event.target.id}'`, textComp);
}


//The following code demonstrates how to call the add 
//function in one of your site's backend files.

/* 

import {printInfo, printEventInfo} from 'public/utils.js'

*/