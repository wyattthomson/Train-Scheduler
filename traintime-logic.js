console.log("trial1");
var config = {
    apiKey: "AIzaSyCT1NGxZFTKzgFzZ6SdLLPCHf4wQyROrKw",
    authDomain: "train-scheduler-53b7f.firebaseapp.com",
    databaseURL: "https://train-scheduler-53b7f.firebaseio.com",
    projectId: "train-scheduler-53b7f",
    storageBucket: "train-scheduler-53b7f.appspot.com",
    messagingSenderId: "371008475301"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref('/test').on('value', function(snapshot) {
    console.log(snapshot.val());
})



$('#final-train-info').click(function(e) {
    e.preventDefault();
    console.log('click submit btn');


    var trainName = $('#train-id').val();
    var trainDestination = $('#dest').val();
    var trainStartTime = $('#start-time').val();
    var trainFrequency = $('#freq').val();

    var newTrain = {
        trainName: trainName,
        trainDestination: trainDestination,
        trainStartTime: trainStartTime,
        trainFrequency: trainFrequency
    };

    console.log(newTrain);

    var newPostKey = firebase.database().ref("/trains").push().key;

    database.ref('/trains/' + newPostKey).set(newTrain);

});