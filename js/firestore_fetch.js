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

const docRef = firestore.collection('koreanbap-cuisines');

var cuisines_fetch = new Vue({
	el:"#cuisineFetch",
	data:{
		food_name:"This is title",
		food_desc:"This is description",
		food_origin:"This is origin",
		ingredient_list: [
			{
				quantity:"1000",
				list:"Test"
			}
		],
		recipes_list: [
			{
				list:"Test"
			}
		]
	},
	methods:{
		fetchContent: function(){
			firestore.collection('koreanbap-cuisines').get().then(function(doc){
				if(doc.exists){
					console.log(doc.data());
				} else {
					console.log("No doc here");
				}
			}).catch(function(error){
				console.log("Error getting docs:", error)
			});
		}
	}
});

