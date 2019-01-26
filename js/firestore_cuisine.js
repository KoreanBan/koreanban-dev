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

var cuisines_admin = new Vue({
	el:"#cuisines",
	data:{
		food_image:"",
		food_name:"",
		food_desc:"",
		food_origin:"",
		food_url:"",
		items: [
			{ingNum:"", ingField:"<input type='text'/>"}
		]
	},
	methods:{
		saveButton: function(){
			var image = this.food_image;
			var name = this.food_name;
			var description = this.food_desc;
			var origin = this.food_origin;
			var origin_url = this.food_url;
			console.log("Saving to Firestore DB:" + image, name, description, origin, origin_url);
			firestore.collection("koreanbap-cuisines").add({
				food_image: image,
				food_name: name,
				food_desc: description,
				food_origin: origin,
				food_url: origin_url
			}).then(function(docRef){
				console.log("Status saved!", docRef.id);
			}).catch(function(error){
				console.log(error);
			})
		},
		addInputIng: function(){
			var obj = {ingredientList}
			this.items.push(obj)
		}
	}
});