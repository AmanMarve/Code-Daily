console.log("Connected");

const box = document.querySelectorAll('.box');
const body = document.querySelector('body');

console.log(body)
box.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // if (e.target.id === 'red') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'green') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id==='grey'){
        //     body.style.backgroundColor=e.target.id
        // }
        // if(e.target.id==='blue'){
        //     body.style.backgroundColor=e.target.id
        // }

        switch (e.target.id) {
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            case "red":
                body.style.backgroundColor = e.target.id
                break;
            case "green":
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
});