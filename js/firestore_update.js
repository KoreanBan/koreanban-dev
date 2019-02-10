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

var update = new Vue({
	el:"#cuisines_update",
	data:{
		d_u:{ 
			food_image:"",
			food_name:"",
			food_desc:"",
			food_origin:"",
			food_url:"",
			ingredient_list: [
				{
					quantity:"",
					list:""
				}
			],
			food_recipes: [
				{
					list:""
				}
			]
		}
	},
	methods:{
		updateData: function(){
			var image = d_u.food_image;
			var name = d_u.food_name;
			var description = d_u.food_desc;
			var origin = d_u.food_origin;
			var origin_url = d_u.food_url;
			var ingredients = d_u.ingredient_list;
			var recipes = d_u.food_recipes;
			console.log("Saving to Firestore DB!");
			firestore.collection("koreanbap-cuisines").document("tMD4weiXMH0zLOUB0raX").update({
				food_image: image,
				food_name: name,
				food_desc: description,
				food_origin: origin,
				food_url: origin_url,
				food_ingredients: ingredients,
				food_recipes: recipes
			}).then(function(docRef){
				console.log("Status updated!", docRef.id);
			}).catch(function(error){
				console.log(error);
			})
		}
	},
	mounted:function(){
		firestore.collection('koreanbap-cuisines').doc("tMD4weiXMH0zLOUB0raX").get().then((doc)=>{
			console.log(doc.data());
			//        querySnapshot.forEach((doc)=>{
			//          console.log(doc)
			//          console.log(doc.id, "=>", doc.data());
			//          var obj = doc.data();
			//          this.food = obj
			//        });
			var obj = doc.data();
			this.d_u = obj;
		}).catch(function(error){
			console.log("Error getting documents:", error);
		});
	}
});