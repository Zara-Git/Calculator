function fill (value){
    document.getElementById("result").textContent+=value;}


function delet(){
    document.getElementById("result").textContent=" ";

}function delSteg(){
    let del=document.getElementById("result").textContent.slice(0,-1);
    document.getElementById("result").textContent=del;
}
function calculate(){
    run = document.getElementById("result").textContent;
    document.getElementById("result").textContent=eval(run);
}