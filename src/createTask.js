


let tasksContainer = document.getElementById('tasksContainer');
let header = document.getElementById('header')


let warningText = document.createTextNode('هیج تسکی وجود ندارد');

function countTasks(){
    if(tasksContainer.childElementCount === 0){
        let warningText = document.createElement('p');
        warningText.id = 'notaskmessage'
        warningText.innerHTML = 'هیچ تسکی وجود ندارد';
        tasksContainer.append(warningText);
        
    }else if(document.getElementById('notaskmessage')){
        let warningText = document.getElementById('notaskmessage')
        
        warningText.remove();
    }

}
function removeTask(event) {
    let task = event.currentTarget;
    let parent = task.parentElement;
    
    while(true){
        parent = parent.parentElement
        if(parent.className.includes('taskContainer')){
            parent.remove();
            countTasks()
            break;
        }
    }
}

function createTask(){

    if(checkInputValue()){
        let taskInput = document.getElementsByTagName('input')[0];
        let taskTitle = taskInput.value
        let allTaskTitle = document.querySelectorAll('.taskTitle');
        
        let taskHtmlCode = `<div class="w-1/2 flex flex-row justify-start items-center">
        
        <div>
            <p class="text-white text-[20px] iransans-bold hover:text-indigo-700 transition-{color} duration-300 ease-out taskTitle">${taskTitle}</p>
        </div>
    </div>
        <div class="w-1/2 text-left flex flex-row justify-end items-center">
        <div class="mx-2">
            <button>
                <i class="bi bi-card-checklist text-white text-[30px] hover:text-green-300 transition-{color} duration-300 ease-out" onclick="createDoneTask(event)"></i>
            </button>
        </div>
        <div class="mx-2">
            <button class="flex justify-center items-center ">
                <i class="bi bi-clipboard2-x-fill text-white text-[30px] hover:text-orange-300 transition-{color} duration-300 ease-out" onclick="undoTask(event)"></i>
                
            </button>
        </div>
        <div class="mx-2">
            <button>
                <i class="bi bi-eraser-fill text-white text-[30px] hover:text-rose-300 transition-{color} duration-300 ease-out" onclick="removeTask(event)"></i>
            </button>
        </div>
        </div>`;
        
        let newTask = document.createElement('div');
        newTask.className = 'flex flex-row justify-center items-center bg-slate-400 rounded-[8px] p-3 taskContainer my-3';
        newTask.innerHTML = taskHtmlCode;
        newTask.style.margin = '10px 0 10px 0';

        tasksContainer.append(newTask);
        
        countTasks()
    }

    


}

function createDoneTask(event){
    let checkIcon = `<i class="bi bi-check-circle-fill" style="color: green;margin:0 5px 0 5px"></i>`

    let currentElement = event.currentTarget
    let condition =true;
    while(condition){
        currentElement = currentElement.parentElement
        if(currentElement.className.includes('taskContainer')){
            condition = false; 
        }
    }

    
    
    let taskTitle = currentElement.children[0]
    
    

    if(!(taskTitle.children[0].className.includes('checktask'))){
        let iconDiv = document.createElement('div');
        iconDiv.className = 'checktask'
        iconDiv.innerHTML = checkIcon;
        taskTitle.prepend(iconDiv)
    }

    
     



    
}

function checkInputValue(){
    let input = document.getElementsByTagName('input')[0];
    if(!input.value){
        
    
        iziToast.error({
            title: 'خطا',
            message: 'لطفا عنوان تسک خود را وارد کنید',
            class:'iransans-bold',
            timeout:1500
        });
        return false;
    }else{
        return true;
    }
}


function undoTask(event){
    let currentElement = event.currentTarget
    let condition =true;
    while(condition){
        currentElement = currentElement.parentElement
        if(currentElement.className.includes('taskContainer')){
            condition = false; 
        }
    }

    let taskTitle = currentElement.children[0].children
    
    // Convert HTMLCollection to an array
    let taskTitleArray = Array.from(taskTitle);

    taskTitleArray.forEach((element) => {
    if (element.className.includes('checktask')) {
        element.remove();
    }
    });
}


