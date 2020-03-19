window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop >  10) {
    document.getElementById("nav").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("right").style.fontSize="15px";
    document.getElementsByTagName("a").style.padding="8px";
  } else {
    document.getElementById("nav").style.padding = "40px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("right").style.fontSize="20px";
  }
}