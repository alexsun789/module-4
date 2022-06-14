(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var byeSpeaker = "Good Bye";
    var helloSpeaker = "Hello";
    
    for (var i = 0; i < names.length; i++){
        var firstLetter = names[i].charAt(0).toLocaleLowerCase();
        if (firstLetter === 'j') {
            console.log ( byeSpeaker + " " + names[i]);
        }
        else {
            console.log ( helloSpeaker + " " + names[i]);
        }
    }
}) ()
