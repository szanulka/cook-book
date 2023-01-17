let eventsSorted = [];
/* const Priority = {
	name: "", 
	importans: , 
  }; */

const events = [
	{
		date: new Date(2023, 0, 1),
		title: "New Year's Day",
		note: "Buy champagne",
		priority:"less important",
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
	{
		date: new Date(2023, 4, 1),
		title: "Labour Day",
		note: "Day off",
		priority: "important",
	},
	{
		date: new Date(2023, 4, 3),
		title: "Constitution of May 3",
		note: "Procession in the market",
		priority: "important",
	},
	{
		date: new Date(2023, 5, 1),
		title: "Children's Day",
		note: "Buy toys",
		priority: "less important",
	},
	{
		date: new Date(2023, 7, 1),
		title: "National Day of Remembrance of the Warsaw Uprising",
		note: "Commemoration day",
		priority: "important",
	},
	{
		date: new Date(2023, 3, 9),
		title: "EasterDay",
		note: "Prepare the eggs",
		priority: "less important",
	},
	{
		date: new Date(2023, 10, 11),
		title: "National Independence Day",
		note: "procession through the city",
		priority: "important",
	},
	{
		date: new Date(2023, 11, 24),
		title: "christmas eve",
		note: "Christmas dinner",
		priority: "important",
	},
	{
		date: new Date(2023, 11, 25),
		title: "Christmas",
		note: "Family time",
		priority: "important",
	},
	{
		date: new Date(2023, 3, 10),
		title: "Wet Monday",
		note: "prepare a water gun",
		priority: "less important",
	},
	{
		date: new Date(2023, 9, 27),
		title: "World Occupational Therapy Day.",
		note: "My work",
		priority: "less important",
	},
	{
		date: new Date(2023, 11, 3),
		title: "Day of People with Disabilities",
		note: "Organizing an exhibition of works by people with disabilities",
		priority: "less important",
	},
	{
		date: new Date(2023, 7, 20),
		title: "World Mosquito Day",
		note: "buy a deet preparation",
		priority: "common",
	},
	{
		date: new Date(2023, 5, 21),
		title: "Poop night",
		title: "Poop night",
		note: "go to the fire",
		priority: "less important",
	},
		{
		date: new Date(2023, 4, 26),
		title: "Mother's Day",
		note: "Buy flowers",
		priority: "important",
	},
		{
		date: new Date(2023, 3, 7),
		title: "Beaver Day",
		note: "walk by the dams",
		priority: "common",
	},
		{
		date: new Date(2023, 1, 17),
		title: "Cat Day",
		note: "petting a cat",
		priority: "important all year",
	},
];


//                                           Tabela
fillTable(events);

function fillTable(events) {
	document.getElementById("eventTable").innerHTML = "";
	for (i = 0; i < events.length; i++) {
		addRow("table", events[i]);
	}

}

function addRow(_eventTable, event) {
	let tableRef = document.getElementById("eventTable");
	let newRow = tableRef.insertRow(-1);
	for (let prop in event) {
		let newCell = newRow.insertCell(-1);
		let newText = document.createTextNode(event[prop]);
		newCell.appendChild(newText);
	}
}

//                                         Priority

function byPriorityUp( a, b ) {
    if ( a.priority < b.priority ){
        return -1;
    }
    if ( a.priority > b.priority ){
        return 1;
    }
    return 0;
}


function byPriorityDown( a, b ) {
    if ( a.priority > b.priority ){
        return -1;
    }
    if ( a.priority < b.priority ){
        return 1;
    }
    return 0;
}

//                                          Title

function byTitleUp(a, b) {
	if (a.title < b.title) {
		return 1; 
	} else if (a.title > b.title) {
		return -1;
	} else {
		return 0;
	}
}

function byTitleDown(a, b) {
	if (a.title > b.title) {
		return 1; 
	} else if (a.title < b.title) {
		return -1;
	} else {
		return 0;
	}
}

//                                          Length
//events.length = 5;



//                                          Note

function byNoteUp(a, b) {
	if (a.note < b.note) {
		return 1;
	} else if (a.note > b.note) {
		return -1;
	} else {
		return 0;
	}
}

function byNoteDown(a, b) {
	if (a.note > b.note) {
		return 1;
	} else if (a.note < b.note) {
		return -1;
	} else {
		return 0;
	}
}


//                                          Date
function byDateUp(a, b) {
	if (a.date > b.date) {
		return 1;
	} else if (a.date < b.date) {
		return -1;
	} else {
		return 0;
	}
}


function byDateDown(a, b) {
	if (a.date < b.date) {
		return 1;
	} else if (a.date > b.date) {
		return -1;
	} else {
		return 0;
	}
}


  function hello() {
	alert("Hello");
}

function sortByPriorityUp(events) {
	 eventsSorted = events.sort(byPriorityUp);
	fillTable(eventsSorted);
}

function sortByPriorityDown(events) {
	 eventsSorted = events.sort(byPriorityDown);
	fillTable(eventsSorted);
}

function dropSortPriority(event) {
	console.log("up")
	let selection = event.target.value;
	if (selection == "up") {
		sortByPriorityUp(events);
	}
}

function sortByDateUp(events) {
	 eventsSorted = events.sort(byDateUp);
	fillTable(eventsSorted);
}

function sortByDateDown(events) {
	eventsSorted = events.sort(byDateDown);
   fillTable(eventsSorted);
}

 
function sortByTitleUp(events) {
	eventsSorted = events.sort(byTitleUp);
   fillTable(eventsSorted);
}

function sortByTitleDown(events) {
	eventsSorted = events.sort(byTitleDown);
   fillTable(eventsSorted);
}

function sortByNoteUp(events) {
	eventsSorted = events.sort(byNoteUp);
   fillTable(eventsSorted);
}

function sortByNoteDown(events) {
	eventsSorted = events.sort(byNoteDown);
   fillTable(eventsSorted);
}