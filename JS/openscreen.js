function openScreen(screenName) {
    var i;
    var x = document.getElementsByClassName("screen");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(screenName).style.display = "block";
}