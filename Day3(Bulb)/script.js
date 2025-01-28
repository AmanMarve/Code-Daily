console.log("connected")

var bulb = document.getElementById("bulb");
var btn = document.getElementById("button");
var flag = 0;

btn.addEventListener('click',
    function () {
        if (flag == 1) {
            bulb.style.backgroundColor = "transparent";
            flag = 0;
        } else {
            bulb.style.backgroundColor = "yellow";
            flag = 1;
        }
    }
)