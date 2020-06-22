function openModal(i) {
    if(i==0){
        document.getElementById("myModal1").style.display = "block";
	    console.log("the model1 is selected and displayed");
        
    }
    else if(i==1){
        document.getElementById("myModal2").style.display = "block";
        console.log("the model2 is selected and displayed");
    }
}
  function closeModal(i) {
    if(i==0){
        document.getElementById("myModal1").style.display = "none";
        console.log("the model1 is closed");
        }
    else if(i==1){
        document.getElementById("myModal2").style.display = "none";
        console.log("the model2 is closed");
        }
}
function currentSlide(n,no) {
    console.log("inside current slides trying to show image"+n+" "+no);
    showSlides(n,no);
    
    
  }
var slideIndex = [1,1];
console.log("slideIndex"+slideIndex[0]+" "+slideIndex[1]);
var slideId = ["slides1", "slides2"];
console.log("slideId"+slideId[0]+" "+slideId[1]);
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    console.log("inside plus slides trying to show image"+n+" "+no);
    showSlides(slideIndex[no] += n, no);
  }

function showSlides(n, no) {
    var i;
    console.log("slideid "+slideId[no]);
    var x = document.getElementsByClassName(slideId[no]);
    console.log(x.length);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }