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

var cuisines_edit = new Vue({
	el:"#cuisines_edit",
	data:{
    d:{ 
      food_name:"",
      food_desc:"",
      food_origin:"",
      food_ingredients: [
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
			this.d = obj;
		}).catch(function(error){
			console.log("Error getting documents:", error);
		});
	}
});