var personobj = {
	firstname: "Simon",
	fullname: "",
	age: 37,
	married: true,
	hasOwnHair: null,
	children: [{
		firstname: "Erica"
	}, {
		firstname: "Isobel"
	}]
};

var personjson = JSON.stringify(personobj);
/*console.log(personjson);
console.log(personobj);*/

//把JSON轉回OBJ
var personOBJ = JSON.parse(personjson);
console.log(personOBJ);
console.log(personjson);