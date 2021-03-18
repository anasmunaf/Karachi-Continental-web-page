var navOpen=document.querySelector("#menu");
var navClose=document.querySelector("#cross");
const nav=document.querySelector("nav");
var ul=	document.querySelector("ul");

navOpen.addEventListener("click", function(){
	navOpen.style.display="none"
	nav.classList.remove("navbar2");
	nav.classList.add("navbar");
	ul.classList.add("links")
});
navClose.addEventListener("click",function() {
	navOpen.style.display="block"	
	nav.classList.remove("navbar")
	nav.classList.add("navbar2");
	ul.classList.remove("links")

});
