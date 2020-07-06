dD = document.getElementById("dropDown");
dDOne = document.getElementById("dropDownOne");
dDTwo = document.getElementById("dropDownTwo");

dD.addEventListener("mouseover", function() {
    dDOne.style.top = "40px";
    dDOne.style.transitionDuration = "500ms";
    dDTwo.style.top = "83px";
    dDTwo.style.transitionDuration = "700ms";
})

dD.addEventListener("mouseout", function() {
    dDOne.style.top = "0px";
    dDOne.style.transitionDuration = "1s";
    dDTwo.style.top = "0px";
    dDTwo.style.transitionDuration = "1s";
})