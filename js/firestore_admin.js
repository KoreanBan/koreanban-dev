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
	const btnCancel = document.getElementById("cancel");
	const btnVerify = document.getElementById("verify");
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
//			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
			btnLogin.classList.add('hide');
			adminForm.innerHTML = '<h2 id="currUser"></h2><object type="text/html" data="cuisine_database.html" id="formStyle"></object>';
			
			var user = firebase.auth().currentUser;
			
			if(user != null){
				var email_id = user.email;
				document.getElementById("currUser").innerHTML = "Welcome to Admin area!<br/>Administrator: " + email_id;
			}
			
		} else {
			console.log('User is not logged in.');
			btnLogout.classList.add('hide');
			btnLogin.classList.remove('hide');
			adminForm.innerHTML = '';
		}
	});
	
	// Add Email Verification Event
	btnVerify.addEventListener('click', e => {
		var user = firebase.auth().currentUser;
		
		user.sendEmailVerification().then(function(){
			alert("Email Verification Sent!");
		}).catch(function(error){
			alert("Error sending verification:" + error);
		})
	});
	
	// Add Logout Event
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		adminForm.innerHTML = '';
	});
	
	// Add Cancel Login Event
	btnCancel.addEventListener('click', e => {
		window.location.href = 'index.html';
	});
	
}());