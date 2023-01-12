const events = [
	{
		date: new Date(2023, 0, 1),
		title: "New Year's Day",
		note: "Buy champagne",
		priority: "less important",
	},
	{
		date: new Date(2023, 0, 24),
		title: "Day Grandmother and Grandfather",
		note: "Buy flowers and making a card",
		priority: "important",
	},
	{
		date: new Date(2023, 1, 9),
		title: "My Birthday",
		note: "Buy cake",
		priority: "important",
	},
	{
		date: new Date(2023, 1, 14),
		title: "Valentine Day",
		note: "Cook a delicious dinner",
		priority: "less important",
	},
	{
		date: new Date(2023, 2, 8),
		title: "Women's Day",
		note: "Spa time",
		priority: "less important",
	},
	/*{
		date: "01/05/2023",
		title: "Labour Day",
		note: "Day off",
		priority: "important",
	},
	{
		date: "03/05/2023",
		title: "Constitution of May 3",
		note: "Procession in the market",
		priority: "important",
	},
	{
		date: "01/06/2023",
		title: "Children's Day",
		note: "Buy toys",
		priority: "less important",
	},
	{
		date: "01/08/2023",
		title: "National Day of Remembrance of the Warsaw Uprising",
		note: "Commemoration day",
		priority: "important",
	},
	{
		date: "09/04/2023",
		title: "EasterDay",
		note: "Prepare the eggs",
		priority: "less important",
	},
	{
		date: "11/11/2023",
		title: "National Independence Day",
		note: "procession through the city",
		priority: "important",
	},
	{
		date: "24/12/2023",
		title: "christmas eve",
		note: "Christmas dinner",
		priority: "important",
	},
	{
		date: "25/12/2023",
		title: "Christmas",
		note: "Family time",
		priority: "important",
	},
	{
		date: "10/04/2023",
		title: "Wet Monday",
		note: "prepare a water gun",
		priority: "less important",
	},
	{
		date: "27/10/2023",
		title: "World Occupational Therapy Day.",
		note: "My work",
		priority: "less important",
	},
	{
		date: "03/12/2023",
		title: "Day of People with Disabilities",
		note: "Organizing an exhibition of works by people with disabilities",
		priority: "less important",
	},
	{
		date: "20/08/2023",
		title: "World Mosquito Day",
		note: "buy a deet preparation",
		priority: "common",
	},
	{
		date: "21/06/2023",
		title: "Poop night",
		note: "go to the fire",
		priority: "less important",
	},
		{
		date: "26/05/2023",
		title: "Mother's Day",
		note: "Buy flowers",
		priority: "important",
	},
		{
		date: "07/04/2023",
		title: "Beaver Day",
		note: "walk by the dams",
		priority: "common",
	},
		{
		date: "17/02/2023",
		title: "Cat Day",
		note: "petting a cat",
		priority: "important all year",
	},
	*/
];

////////////////        Priority

/*
function compare( a, b ) {
    if ( a.priority < b.priority ){
        return -1;
    }
    if ( a.priority > b.priority ){
        return 1;
    }
    return 0;
}

let eventsSorted = events.sort( compare ); 
for (let eventsFilter = 0; eventsFilter = important;  )

*/

/////////////////           Title

/*
function byTitle(a, b) {
	if (a.title > b.title) {
		return 1; 
	} else if (b.title > a.title) {
		return -1;
	} else {
		return 0;
	}
}

let eventsSorted = events.sort (byTitle)
console.log(byTitle);
*/

///////////////               Length

//events.length = 5;

////////////////               Name

/*
function byName(a, b) {
	if (a.name > b.name) {
		return 1;
	} else if (b.name > a.name) {
		return -1;
	} else {
		return 0;
	}
}

eventsSorted = events.sort(byName)
*/

////////////////////             Date

function byDate(a, b) {
	if (a.date < b.date) {
		return 1;
	} else if (a.date > b.date) {
		return -1;
	} else {
		return 0;
	}
}
let eventsSorted = events.sort(byDate);
/*
console.log(events[0]);
console.log(events[0].date);
console.log(events[0].date.getTime);*/
/*
function byDate(a, b) {
	return new Data(a.dob).valueOf() - new Data(b.dob).valueOf();
}


console.log('\n\n sort by date');
console.log(events.sort(byDate));  */
//events.forEach((_title, _index) => console.log(`${index}: ${title}`));

//let lowerTitle = events.map((title, index) => title.toLowerCase());

/*let filteredevents = events.filter(title => {
	return title.length < 10;
});*/

//let reduceEvents = events.reduce((count, title) => count += title.length, 0);
//events sortNum (a, b) {return a - b;}
//let eventsCount = events.reduce((count, title) => title.length, 0)
//console.log(eventsCount);

fillTable(eventsSorted);

function fillTable(events) {
	for (i = 0; i < events.length; i++) {
		addRow("table", events[i]);
	}
}

function addRow(_eventTable, event) {
	let tableRef = document.getElementById("eventTable");
	console.log("tableRef", tableRef);
	let newRow = tableRef.insertRow(-1);
	for (let prop in event) {
		console.log("prop");
		let newCell = newRow.insertCell(-1);
		let newText = document.createTextNode(event[prop]);
		newCell.appendChild(newText);
	}
}
