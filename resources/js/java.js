var imghover=Array.from(Array.from(document.getElementsByClassName('imghover'))[0].children)
// imghover.forEach(function(){
//   this.addEventListener("click", function(e) {
//     // this.style.display="block";
//     console.log(this);
//
//   });
// });


for (var i = 0; i < imghover.length; i++) {
  imghover[i].addEventListener("click", function(){
    let clone=this.outerHTML;
    document.getElementById("front").innerHTML=clone;
    document.getElementById("front").style.display="flex";
    document.getElementById("back").style.display="block";
  });
}

document.getElementById('back').addEventListener("click", function(){

    document.getElementById("front").innerHTML="";
    document.getElementById("front").style.display="none";
    document.getElementById("back").style.display="none";
});
document.getElementById('front').addEventListener("click", function(){

    document.getElementById("front").innerHTML="";
    document.getElementById("front").style.display="none";
    document.getElementById("back").style.display="none";
});
