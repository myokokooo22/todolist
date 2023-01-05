var getforms = document.getElementById('forms');
var gettextbox = document.getElementById('textbox');
var getlists = document.querySelector('.lists');

getforms.addEventListener('submit',(e)=>{
    e.preventDefault();
    addnew();
});

function addnew(todos){
    var gettext = gettextbox.value;

    if(todos){
        gettext = todos.text;
    }

    if(gettext){
        var createli = document.createElement('li');
        createli.classList.add('lis');
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

    var gettodos = JSON.parse(localStorage.getItem('todos'));
    // console.log(gettodos)

   if(gettodos){
    gettodos.forEach((gettodo)=>{
       console.log(gettodo.text)
    // addnew(gettodo);
    });
   }
}