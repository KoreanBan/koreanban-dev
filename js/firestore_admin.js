(function(){
	
	// Initialize Firebase
	const config = {
		apiKey: "AIzaSyCbvK3qfFlV69cunT68WTjZZehGS6laxho",
		authDomain: "koreanban-2019.firebaseapp.com",
		databaseURL: "https://koreanban-2019.firebaseio.com",
		projectId: "koreanban-2019",
		storageBucket: "koreanban-2019.appspot.com",
		messagingSenderId: "121373359348"
	};
	firebase.initializeApp(config);
	
	// Get Elements
	const inpEmail = document.getElementById("email");
	const inpPass = document.getElementById("password");
	const btnLogin = document.getElementById("login");
	const btnLogout = document.getElementById("logout");
	const adminForm = document.getElementById("form");
	
	// Add Login Event
	btnLogin.addEventListener('click', e => {
		//Get Email and Password Value
		const email = inpEmail.value;
		const password = inpPass.value;
		const auth = firebase.auth();
		//Loggin In
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));
	});
	
	// Add a Realtime Listener
	firebase.auth().onAuthStateChanged(function(firebaseUser) {
		if(firebaseUser){
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
			btnLogin.classList.add('hide');
			adminForm.innerHTML = '<object type="text/html" data="cuisine_database.html" id="formStyle"></object>'
		} else {
			console.log('User is not logged in.');
			btnLogout.classList.add('hide');
			btnLogin.classList.remove('hide');
			adminForm.innerHTML = '';
		}
	});
	
	// Add Logout Event
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		adminForm.innerHTML = '';
	});
	
}());