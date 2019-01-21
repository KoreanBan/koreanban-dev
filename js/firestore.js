// Initialize Firebase
var config = {
	apiKey: "AIzaSyCbvK3qfFlV69cunT68WTjZZehGS6laxho",
	authDomain: "koreanban-2019.firebaseapp.com",
	databaseURL: "https://koreanban-2019.firebaseio.com",
	projectId: "koreanban-2019",
	storageBucket: "koreanban-2019.appspot.com",
	messagingSenderId: "121373359348"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.collection('koreanbap-cuisines').doc();

const outputHeader = document.querySelector("#koreanOutput");
const food_desc = document.querySelector("#food_desc");
const food_name = document.querySelector("#food_name");
const food_origin = document.querySelector("#food_origin");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function(){
	const name = food_name.value;
	const description = food_desc.value;
	const origin = food_origin.value;
	console.log("Saving to Firestore DB:" + name, description, origin);
	firestore.collection("koreanbap-cuisines").add({
		food_name: name,
		food_desc: description,
		food_origin: origin
	}).then(function(docRef){
		console.log("Status saved!", docRef.id);
	}).catch(function(error){
		console.log(error);
	})
});