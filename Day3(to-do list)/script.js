let taskInput = document.getElementById("input");
let listContainer = document.getElementById("task-container");
let btn = document.getElementById("submit")


function addTask() {
    //select value of input
    const taskText = taskInput.value;
    //created li 
    if (taskText == '') {
        alert("Kuch to likho")
    } else {
        const li = document.createElement("li");
        // li ke andar input value
        li.textContent = taskText;

        //remove btn banayi uska code likha
        const removeBtn = document.createElement("Button");
        //inside text of btn
        removeBtn.textContent = "remove";
        //className diyaa
        removeBtn.className = 'removeBtn';
        //click pr ek arrow function chalaya
        removeBtn.onclick = () => removeTask(li);

        //yaha se btn appear hui remove ki
        li.appendChild(removeBtn);

        //yaha se list appear hui
        listContainer.appendChild(li)

        //empty value set kr di input ki
        taskInput.value = '';

        //remove task btn ka function.
        function removeTask() {
            listContainer.removeChild(li);
        }
    }


}



btn.addEventListener('click', function () {
    addTask();
})