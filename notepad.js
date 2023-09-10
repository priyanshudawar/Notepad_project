const textarea=document.getElementById('one');
if(localStorage.getItem("content")){
    textarea.value=localStorage.getItem("content");
}
function savedata(){
    localStorage.setItem("content",textarea.value);
    popup();
}
function cleardata(){
    localStorage.clear();
    textarea.value="";
    pop();
}
function popup() { 
    window.alert("The changes have been updated");
 }
function pop(){
    window.alert("The data have been deleted successfully");
}