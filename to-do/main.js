window.addEventListener("load", () => {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#new-task-id");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (el) => {
        el.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Please fill the task");
            return;
        }
        const task_el = document.createElement("div");  /*crreate the div dom*/
        task_el.classList.add("task");     /* adds the class task to the div*/

        const task_content_el = document.createElement("div");    /* creates the div element*/
        task_content_el.classList.add("content");         /* adds the class content to it */

        task_el.appendChild(task_content_el);      /* append the task_content_el to task_el */

        const task_input_el = document.createElement("input");   /* creates the input element */
        task_input_el.classList.add("text");                  // adds the class text to it
        task_input_el.type = "text";                        // creates the text input type
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");     // sets the attribute of input to readonly

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");    // creating div for action buttons edit and delete
        task_actions_el.classList.add("actionButtons");


        const task_edit_el = document.createElement("button");    // creating the edit button 
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");    // creating the delete button
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);       // appending the edit and delete buttons to task_actions
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);   // appending the buttons of task_actions to task_el

        list_el.appendChild(task_el);           // finally appending the task_el to the list of elements 

        input.value = "";


        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";   // toggle from Edit to Save
            }
            else {
                task_input_el.setAttribute("readonly", "readonly");
                // if the text is Save clicking on it changes to Edit
                task_edit_el.innerText = "Edit";
            }

        });

        task_delete_el.addEventListener('click', () => {           // removing the item from list_el
            list_el.removeChild(task_el);

        });

    });

});