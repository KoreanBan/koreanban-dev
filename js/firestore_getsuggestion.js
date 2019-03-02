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

var suggestion_get = new Vue({
	el:"#suggestionList",
	data:{
		allSuggestion:[]
	},
	created: async function(){
		var snaps = await firestore.collection('koreanbap-suggestion').get();
		
		var arrSuggest = [];
		snaps.forEach((docs)=>{
			arrSuggest.push(docs.data());
			console.log(docs.data());
		})
		this.allSuggestion = arrSuggest;
		console.log(this.allSuggestion);
	}
});