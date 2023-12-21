let taskHtmlCode = `<div class="flex flex-row justify-center items-center bg-slate-400 rounded-[8px] p-3">
<div class="w-1/2">
    <p class="text-white text-[20px] iransans-bold hover:text-indigo-700 transition-{color} duration-300 ease-out">عنوان تسک</p>
</div>
<div class="w-1/2 text-left flex flex-row justify-end items-center">
    <div class="mx-2">
        <button>
            <i class="bi bi-card-checklist text-white text-[30px] hover:text-green-300 transition-{color} duration-300 ease-out"></i>
        </button>
    </div>
    <div class="mx-2">
        <button class="flex justify-center items-center ">
            <i class="bi bi-clipboard2-x-fill text-white text-[30px] hover:text-orange-300 transition-{color} duration-300 ease-out"></i>
            
        </button>
    </div>
    <div class="mx-2">
        <button>
            <i class="bi bi-eraser-fill text-white text-[30px] hover:text-rose-300 transition-{color} duration-300 ease-out"></i>
        </button>
    </div>
</div>
</div>`;


let tasksContainer = document.getElementById('tasksContainer');
let tasksContainerHtml = `<div class="bg-slate-700 w-[70%] rounded-[8px] mx-auto p-4 mt-14" id="tasksContainer">`;
console.log(tasksContainerHtml)
console.log(tasksContainerHtml.children)
let header = document.getElementById('header')

function createTodoTask(){
    
}

function checkInputValue(){
    let input = document.getElementsByTagName('input')[0];
    if(input.value){
        
    }else{
        let warningElementContent = `باید عنوان تسک خود را وارد کنید`
        let warningElement = document.createElement('p')
        warningElement.className = 'text-center text-3xl mt-10 transition-{opacity} duration-100 ease-out'
        warningElement.classList.add('warning');
        warningElement.style.color = 'red'
        warningElement.style.fontSize= '25px'
        warningElement.innerHTML = warningElementContent
        header.after(warningElement)
        warningElement.style.color = 'red'

        let message = document.querySelectorAll('.warning')
        console.log(message)
        // setTimeout(() => {

        //     message.forEach((item)=> {item.style.color ='red'; ; })
        // }, 1000);
        setTimeout(() => {

            message.forEach((item)=> {item.style.transition ='opacity 0.4s'; item.style.opacity = '0'})
        }, 1000);
        setTimeout(() => {

            message.forEach((item)=> {item.remove()})
        }, 3000);

        return false;
    }
}
