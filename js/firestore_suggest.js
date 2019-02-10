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

const docRef = firestore.collection('koreanbap-suggestion');

var suggest_form = new Vue({
  el:"#suggestForm",
  data: {
		suggest_name:"",
		suggest_email:"",
		suggest_content:""
	},
	methods:{
		addSuggestion: function(){
			var name = this.suggest_name;
			var email = this.suggest_email;
			var suggest = this.suggest_content;
			console.log("Submitting to DB:" + name, email, suggest);
			firestore.collection('koreanbap-suggestion').add({
				suggest_name: name,
				suggest_email: email,
				suggest_content: suggest
			}).then(function(docRef){
				console.log("Suggestion submitted!", docRef.id);
			}).catch(function(error){
				console.log(error);
			})
		}
	}
});

