function height(){
    var viewportHeight = window.innerHeight;
    var sidebar = document.getElementById("sidebar");
    sidebar.style.height = (viewportHeight - 4) + "px";
}