






var database = firebase.database();
var input = document.getElementById('demo');
var list = document.getElementById('list');
//to Store a value
function add() {

    var user = {
        name: input.value,
        age: 23,
        num: +923212134142
    }
    database.ref('/').child('user').push(user);
    input.value = '';
}




//to get data back
//.On 2 param leta he 
//build in he firebase ka
database.ref('/').child('user').on('child_added',
    function (snap) {
        console.log(snap.val());
        render(snap.val());
    })


function render(user) {
    var li = document.createElement("LI");
    var text = document.createTextNode(user.name);
    li.appendChild(text);
    list.appendChild(li);

}