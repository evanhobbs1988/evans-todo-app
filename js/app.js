var todoList = [
	'Walk the dog',
	'Pick up some milk',
	'Put the kids to bed',
	'Drink... A LOT'
];

var todo = document.getElementById('todo');

function drawTodoList(){
	// First Delete the old list
	todo.innerHTML = '';
	// Now add our updated array as the new list
	for(var i = 0; i < todoList.length; i++){
		todo.innerHTML += "<li>" + todoList[i] + "</li>";
	}
}

function addTodoItem(){
	var action = document.getElementById("activity");

	if(action.value === ''){
		alert("Enter something in the todo list box");
	} else {
		todoList.push(action.value);
		action.value = '';
		drawTodoList();
	}
}
