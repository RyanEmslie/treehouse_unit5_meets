
var person;
var nameFirst;
var nameLast;
var email;
var street;
var city;
var state;
var postcode;
var picThumb;
var phone;
var birthday;
var dob;
var address;



var url = 'https://randomuser.me/api/?nat=us&results=12&noinfo';
var dataType = 'json';


//Function returns the current four-digit year
const thisYear = () => {
	let d = new Date();
	let currentYear = d.getFullYear();
	return currentYear;
}//end thisYear()

//Function input string - output first letter capitalized
const capitalize = (lowercase) => {
	let newWord = lowercase[0].toUpperCase() + lowercase.substr(1);
	return newWord;
}//end capitalize()




function listPerson (data) {
	person = data;
	for (let i = 0; i < person.results.length; i++){


		
		nameFirst = capitalize(person.results[i].name.first);
		nameLast = capitalize(person.results[i].name.last);
		email = person.results[i].email;
		street = capitalize(person.results[i].location.street);
		city =  capitalize(person.results[i].location.city);
		state = capitalize(person.results[i].location.state);
		postcode = person.results[i].location.postcode;
		dob = person.results[i].dob.date;
		picThumb = person.results[i].picture.medium
		
		
		var dobYear = (dob.slice(0,4));
		var dobMonth = (dob.slice(5,7));
		var dobDay = (dob.slice(8,10));
		birthday = `${dobMonth}/${dobDay}/${thisYear()}`;
		address = `${street},${city},${state}`
		console.log(`Name: ${nameFirst} ${nameLast}
					 Email: ${email}
					 Street: ${street}
					 City: ${city}
					 State: ${state}
					 PostCode: ${postcode}
					 Birthday: ${birthday}
					 Address: ${address}
			`);
		
		$('.card-img').attr('src', picThumb);
		
	}//end for loop
}//end listPerson()

$.getJSON(url,dataType,listPerson);



$('.modal-container').hide();



