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
    editCuisines: []
	},
  created: async function(){
		var snapCuisines = await firestore.collection('koreanbap-cuisines').get();
		
		var arrCuisines = [];
		snapCuisines.forEach((docs)=>{
			var obj = docs.data();
      obj.id = docs.id;
      
      arrCuisines.push(obj);
			console.log(obj);
		})
		this.editCuisines = arrCuisines;
		console.log(this.editCuisines);
	},
	methods:{
		editKFC: function(e){
			//modal
		},
		deleteData: function(e){
			firestore.collection('koreanbap-cuisines').doc(e.id).delete().then(function(){
				alert("File successfully deleted!");
			}).catch(function(error){
				alert("Error deleting file:", error);
			});
		}
	},
	
});