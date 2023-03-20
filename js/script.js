{
    const tasks = [
        {
            content:"zaparzyć herbatę",
            done: false,
        },
        {
            content: "ugotować obiad",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";


        for(const task of tasks) {
            htmlString +=`
            <li>
            ${task.content}
            </li>
            `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    };

    const init = () => {
        render();

    };
    init();
}