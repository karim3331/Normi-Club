<script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
	<script>
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyDWcn2CopM9pc629SPPWhJw2yLjcsLa268",
			authDomain: "normi-207d2.firebaseapp.com",
			databaseURL: "https://normi-207d2.firebaseio.com",
			projectId: "normi-207d2",
			storageBucket: "normi-207d2.appspot.com",
			messagingSenderId: "723584380288"
			};
			firebase.initializeApp(config);
	</script>

db.Normi("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.Normi("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});