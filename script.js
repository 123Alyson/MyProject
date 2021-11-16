/**
MEANINGFUL INTERACTION #1
Users click on different hotel categories to switch to the corresponding room images.
*/
function edit1(){
    document.getElementById('img').style.backgroundImage="url('images/hotel9.jpg')"
}
function edit2(){
    document.getElementById('img').style.backgroundImage="url('images/hotel4.jpg')"
}
function edit3(){
    document.getElementById('img').style.backgroundImage="url('images/hotel2.jpg')"
}

/**
MEANINGFUL INTERACTION #2
Using JavaScript to determine whether the form is empty, 
if it is not empty then the user is prompted that they have successfully submitted the form, 
otherwise the user is prompted to fill in the form information. 
*/
function check(){
    if(document.getElementById("username").value==""){
        alert("Please input the username!");
        document.getElementById("username").focus();
        return false;
    }
    if(document.getElementById("email").value==""){
        alert("Please input the email!");
        document.getElementById("email").focus();
        return false;
    }
    if(document.getElementById("message").value==""){
        alert("Please input the message!");
        document.getElementById("message").focus();
        return false;
    }
    alert("Successfully submitted!")
    return true;
} 


/**
MEANINGFUL INTERACTION #3
Control the style of the navigation bar, when the user selects a navigation, the corresponding navigation bar will remain highlighted.
*/
$(function(){
    $('li').click(function(){
        $(this).toggleClass('nav_style').siblings().removeClass('nav_style');
    });
});


/**
MEANINGFUL INTERACTION #4
The effect of the slides, it can automatically play different pictures.
*/

var slideIndex = 0;
showSlides();
function showSlides(){
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Switching time is 2 seconds
}
      