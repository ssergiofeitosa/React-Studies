var cont = document.getElementById("container");
var btn = document.getElementById("switch");
btn.addEventListener("click", function () {
    if (cont.className === "classeLight") {
        cont.className = "classeDark";
    }
    else {
        cont.className = "classeLight";
    }
});
