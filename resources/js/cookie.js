
var cookie=Array.from(document.getElementsByClassName('cookies'))
Array.from(cookie[0].children)[1].addEventListener("click", function(){
  cookie[0].setAttribute('id', 'hide');
});
