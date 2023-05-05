{
    const tasks = [
        {
            content: "zaparzyć herbatę",
            done: true,
        },
        {
            content: "ugotować obiad",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

    }
    const render = () => {
        let htmlString = "";


        for (const task of tasks) {
            htmlString += `
            <li
            class="tasks__item js-task"
            >
            <button class="tasks__button tasks__button--toggleDone js-toggleDone">
               ${task.done ? "V" : ""}
               </button>

               <span class="tasks__content${ task.done ? "tasks__content--done" : ""}">${task.content}</span>

            <button class="tasks__button tasks__button--remove js-remove">
            X
            </button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();

    };




    const init = () => {
        render();

        const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }


            addNewTask(newTaskContent);
        }

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };
    init();
}