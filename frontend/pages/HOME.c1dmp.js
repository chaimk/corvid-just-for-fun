import wixSite from 'wix-site';
import wixUsers from 'wix-users';
import wixWindow from 'wix-window';
import {printInfo, printEventInfo} from 'public/utils.js'

function printRepeaterEventInfo (event, dynamicOrStatic, textComp) {
	printInfo(`${dynamicOrStatic} ${event.type} event occurred on ${event.target.type} with id '${event.target.id}' inside item ${event.context.itemId}`, textComp);
}

$w.onReady(function () {
	console.log("hello there from local editor")
	printInfo(`regionalSettings: ${wixSite.regionalSettings}`);
	printInfo(`language: ${wixSite.language}`);
	printInfo(`currency: ${wixSite.currency}`);
	printInfo(`timezone: ${wixSite.timezone}`);
	printInfo(`browserLocale: ${wixWindow.browserLocale}`);
	printInfo(`locale: ${wixWindow.locale}`);

	$w('#text4').onViewportEnter( (event) => {
		printRepeaterEventInfo(event, "Dynamic");
	});
	$w('#text4').onViewportLeave( (event) => {
		printRepeaterEventInfo(event, "Dynamic");
	});

	$w('#image1').onClick( (event) => {
		printRepeaterEventInfo(event, "Dynamic");
	});
	$w('#image1').onDblClick( (event) => {
		printRepeaterEventInfo(event, "Dynamic");
	});

	$w('#button1').onViewportEnter( (event) => {
		printEventInfo(event, "Dynamic", '#resultText2');
	});
	$w('#button1').onViewportLeave( (event) => {
		printEventInfo(event, "Dynamic", '#resultText2');
	});

});

export function button1_mouseIn(event) {
	$w('#text1').text = "hello"
}

export function text4_viewportEnter(event) {
	printRepeaterEventInfo(event, "Static", '#resultText3');
	//Add your code for this event here: 
}

export function text4_viewportLeave(event) {
	printRepeaterEventInfo(event, "Static", '#resultText3');
	//Add your code for this event here: 
}

export function button1_viewportEnter(event) {
	printEventInfo(event, "Static", '#resultText4');
}

export function button1_viewportLeave(event) {
	printEventInfo(event, "Static", '#resultText4');
}

export function repeater1_mouseIn(event) {
	printEventInfo(event, "Static", '#resultText4');
}

export function repeater1_mouseOut(event) {
	printEventInfo(event, "Static", '#resultText4');
}

export function image1_click(event) {
	printRepeaterEventInfo(event, "Static", '#resultText3');
}

export function image1_dblClick(event) {
	printRepeaterEventInfo(event, "Static", '#resultText3');
}

export function button2_click(event) {
	$w('#button1').collapse();
}

export function button3_click(event) {
	$w('#button1').expand();
}

export function button4_click(event) {
	$w('#button1').show();
}

export function button5_click(event) {
	$w('#button1').hide();
}