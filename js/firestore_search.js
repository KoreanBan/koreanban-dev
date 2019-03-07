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

var search = new Vue({
  el: "#searchFunc",
  data: {
    allSearch: [],
    search: ""
  },
  methods: {
    searchButton: async function () {
      var search = await firestore.collection('koreanbap-cuisines');
      var query =  await search.where("food_name", "==", "Pancake").get();
      
      // do exactly like getall
      var arr = [];
      query.forEach((docs)=>{
        var obj = docs.data();
        
        arr.push(obj);
        console.log(obj);
      })
      this.allSearch = arr;
      console.log(this.allSearch);
    }
  }
});
