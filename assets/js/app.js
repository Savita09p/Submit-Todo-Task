let cl=console.log;

const todoArr=[
    {
        todoItem:"HTML",
        todoId:'123'
    },
    {
        todoItem:"CSS",
        todoId:'124'
    },
    {
        todoItem:"Bootstrap",
        todoId:'125'
    }
]

const todoForm=document.getElementById("todoForm");
const todoContainer=document.getElementById("todoContainer");
const todoItem=document.getElementById("todoItem");

const templatingofTodos=()=>{
   let result=`<ul class="list-group">`;

   todoArr.forEach(todo =>{
        result +=`<li class="list-group-item d-flex justify-content-between">
                 <strong>${todo.todoItem}</strong>
                 <span>
                   <button class="btn btn-sm btn-outline-primary">Edit</button>
                   <button class="btn btn-sm btn-outline-danger">Remove</button>
                 </span>
                </li>`
    })
    result +=`</ul>`

    todoContainer.innerHTML=result;
}

templatingofTodos()

const onTodoSubmit=(eve) =>{
    eve.preventDefault();
    
    let newTodo ={
        todoItem: todoItem.value,
        
    }
    todoForm.reset();

    todoArr.push(newTodo)

    templatingofTodos(todoArr)
}

todoForm.addEventListener('submit', onTodoSubmit);