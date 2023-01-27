{
    const tasks = [
        {
           content: "zrobić kanapki",
           done: false,
        },
        {
            content: "zaparzyć herbatę",
            done: true,
        },
    ];

const render = () => {
    let htmlString = "";

    for(const task of tasks){
        htmlString += `
        <li
         ${task.done ? " style=\"text-decoration: line-through\"" : ""}
         >
        ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
};

const addNewTask = () => {
    tasks.push({
        content: newTaskContent,
    });
    render();
};

    const init = () => {
render();

const form = document.querySelector(".js-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    
    if (newTaskContent === "") {
        return;
    }



});


    };

    init();
}