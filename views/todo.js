const todoList=[
    {
        name: 'make dinner',
        dueDate: '2022-12-22'
    
    },
    {
        name: 'wash dishes',
        dueDate: '2022-12-22'
    }
    
    ];
    
    renderTodo();
    
    function renderTodo(){
    
        let todoListHTML ='';
    
        for(let i=0; i<todoList.length; i++)
        {
        const todoObject = todoList[i];
        const name = todoObject.name;
        //const {name} = todoObject;
        const dueDate = todoObject.dueDate;
        //const {dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
        
         <button onclick="
         todoList.splice(${i}, 1);
         renderTodo();
         " 
         class="delete-todo-button">Delete</button>
    
        `;
        todoListHTML += html;
        }
        console.log(todoListHTML);
    
        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    }
    
    function addTodo(){
        const inputEle = document.querySelector('.js-name-input');
        const name = inputEle.value;
    
        const dateInputEle = document.querySelector('.js-due-date-input');
        const dueDate = dateInputEle.value;
    
    
        todoList.push({
            
            name,
            dueDate // --> when name = property
        });
        console.log(todoList);
    
        inputEle.value = '';
        
        renderTodo();
    }
    