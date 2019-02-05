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
		food_name:"",
		food_desc:"",
		food_origin:"",
		ingredient_list: [
			{
				quantity:"",
				list:""
			}
		],
		recipes_list: [
			{
				list:""
			}
		]
	},
	methods:{
		fetchContent: function(){
			firestore.collection('koreanbap-cuisines').where("tMD4weiXMH0zLOUB0raX", "==", "true").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          console.log(doc.id, "=>", doc.data());  
        });
      }).catch(function(error){
        console.log("Error getting documents:", error);
      });
		}
	}
});

