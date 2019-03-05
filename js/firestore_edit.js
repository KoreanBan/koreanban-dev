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
	methods:{
		editKFC: function(e){
			window.location.href = 'cuisine_edit_update_kfc.html';
		},
		deleteData: function(e){
			firestore.collection('koreanbap-cuisines').doc('c').delete(e).then(function(){
				console.log("Dummy file successfully deleted");
			}).catch(function(error){
				console.log("Error deleting file:", error);
			});
		}
	},
	created: async function(){
		var snapCuisines = await firestore.collection('koreanbap-cuisines').get();
		
		var arrCuisines = [];
		snapCuisines.forEach((docs)=>{
			arrCuisines.push(docs.data());
			console.log(docs.data());
		})
		this.editCuisines = arrCuisines;
		console.log(this.editCuisines);
	}
});