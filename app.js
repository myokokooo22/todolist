var getforms = document.getElementById('forms');
var gettextbox = document.getElementById('textbox');
var getlists = document.querySelector('.lists');

getforms.addEventListener('submit',(e)=>{
    e.preventDefault();
    addnew();
});

function addnew(todos){
    var gettext = gettextbox.value;

    //get the data from localstorge 
    if(todos){
        gettext = todos.text;
    }

    // if the data had in gettext, create li
    if(gettext){
        var createli = document.createElement('li');
    }

    // if the the todos contains 'done', do this step (for complete)
    if(todos && todos.done){
        createli.classList.add('done');
    }

    createli.textContent = gettext;
    getlists.appendChild(createli); 
    gettextbox.value = "";

    createli.addEventListener('click',()=>{
        createli.classList.toggle('done');
        updateLocalStorage();
    });

    createli.addEventListener('contextmenu',(e)=>{
        createli.remove();
        e.preventDefault();
        updateLocalStorage();
    });

    updateLocalStorage();
}

function updateLocalStorage(){
    var getalllis = document.querySelectorAll('li');
    var todos = [];
    getalllis.forEach((getallli)=>{
        todos.push({
            text: getallli.textContent,
            done: getallli.classList.contains('done')
        })
        // console.log(todos)
       localStorage.setItem('todos',JSON.stringify(todos))
    });

}

var gettodos = JSON.parse(localStorage.getItem('todos'));
    // console.log(gettodos)

   if(gettodos){
    gettodos.forEach((gettodo)=>{
       console.log(gettodo.text)
    addnew(gettodo);
    });
}