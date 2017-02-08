/*global $*/
$(document).ready(function(){
var word;
word="ScriptEd";
var word2;
word2="scripted";
var word3;
word3="Scripted";
var input;
input=$("input").val();

$("button").click(function(){
    var input;
input=$("input").val();
if(input===word){
   $("h2").append("OOOOOOOOHHHH SNAP YOU GOT THE WORD!!!");}
   else if(input===word2){
       $("h2").append("OOOOOOOOHHHH SNAP YOU GOT THE WORD!!!");}
       else if(input===word3){
           $("h2").append("OOOOOOOOHHHH SNAP YOU GOT THE WORD!!!");}
    
});
});