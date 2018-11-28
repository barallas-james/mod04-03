document.getElementById('reg').onclick = () => {

	document.getElementById('username').innerHTML = document.getElementById('firstname-nameBox').value + " " + document.getElementById('lastname-nameBox').value;

}

////////////////////////////////////////////////////////////////////////////////////////////////

function reuseAdd(add){

	document.getElementById('do-' + add).innerHTML = document.getElementById('to-do-' + add).value;
	document.getElementById('btn-remove-' + add).style.display = "block";
	document.getElementById('do-' + add).classList.add("black-out"); //CALLING OUT A CLASS IN CSS
	document.getElementById('to-do-' + add).value = "";

}

document.getElementById('add-to-do-1').onclick = () => {
	reuseAdd(1);
}

document.getElementById('add-to-do-2').onclick = () => {
	reuseAdd(2);
}

document.getElementById('add-to-do-3').onclick = () => {
	reuseAdd(3);
}

document.getElementById('add-to-do-4').onclick = () => {
	reuseAdd(4);
}

document.getElementById('add-to-do-5').onclick = () => {
	reuseAdd(5);
}

document.getElementById('add-to-do-6').onclick = () => {
	reuseAdd(6);
}


/////////REMOVE BUTTONS

function reuseRemove(remove){
	document.getElementById('do-' + remove).innerHTML = "";
	document.getElementById('btn-remove-' + remove).style.display = "none";
}

document.getElementById('btn-remove-1').onclick = () => {

	reuseRemove(1);
	
}

document.getElementById('btn-remove-2').onclick = () => {

	reuseRemove(2);
	
}

document.getElementById('btn-remove-3').onclick = () => {

	reuseRemove(3);
	
}

document.getElementById('btn-remove-4').onclick = () => {

	reuseRemove(4);
	
}

document.getElementById('btn-remove-5').onclick = () => {

	reuseRemove(5);
	
}

document.getElementById('btn-remove-6').onclick = () => {

	reuseRemove(6);
	
}


////////


function reuseRemoveToDo(remove){
	document.getElementById('do-' + remove).innerHTML = "";
	document.getElementById('btn-remove-' + remove).style.display = "none";
}

document.getElementById('do-1').ondblclick = () => {

	reuseRemoveToDo(1);
	
}

document.getElementById('do-2').ondblclick = () => {

	reuseRemoveToDo(2);
	
}

document.getElementById('do-3').ondblclick = () => {

	reuseRemoveToDo(3);
	
}

document.getElementById('do-4').ondblclick = () => {

	reuseRemoveToDo(4);
	
}

document.getElementById('do-5').ondblclick = () => {

	reuseRemoveToDo(5);
	
}

document.getElementById('do-6').ondblclick = () => {

	reuseRemoveToDo(6);
	
}





















//past version
function alertExternal1(){
	alert('This is External');
}

//es6 version
const alertExternal2 = function(){
	alert('This is External');
}

//with arrow notation => future version
const alertExternal3 = () =>{
	alert('This is External');
}

//sample arguments
function add(num1,num2){
	console.log(num1 + num2);

}

add(32, 45);

function sayhello(name){
	alert("hello " + name);

}

sayhello("James");






document.getElementById('btn1').onclick = () =>{
	sayhello("Button 1")
}

document.getElementById('btn2').onclick = () =>{
	sayhello("Button 2")
}

document.getElementById('btn3').onclick = () =>{
	sayhello("Button 3")
}

document.getElementById('btn4').onclick = () =>{
	sayhello("Button 4")
}

document.getElementById('btn5').onclick = () =>{
	sayhello("Button 5")
}




document.getElementById('btnShow').onclick = () => {

	const name = document.getElementById('showName').value;

	function wassap(haha){
		document.getElementById('lol').value = ('Hello ' + haha);

	}

	wassap(name);


}


