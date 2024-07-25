var nameInput = document.getElementById("nameInput");
var passwordInput = document.getElementById("passInput");
var emailInput = document.getElementById("emailInput");
var welcomePage = document.getElementById("total")


var dateList= [];

function add(){
    if (nameInput.classList.contains("is-valid") && passInput.classList.contains("is-valid"))
    {
        var Date = {
            name : nameInput.value,
            password : passwordInput.value,
        };
        dateList.push(Date);
        localStorage.setItem("dateList", JSON.stringify(dateList));
        welcome()
        console.log(localStorage)
    }
}
function adddd(){
    if (nameInput.classList.contains("is-valid") && passInput.classList.contains("is-valid")&& emailInput.classList.contains("is-valid"))
    {
        var Date = {
            name : nameInput.value,
            password : passwordInput.value,
            email : emailInput.value,
        };
        dateList.push(Date);
        localStorage.setItem("dateList", JSON.stringify(dateList));
        welcome()
        console.log(localStorage)
    }
}
    


function validateInputs(element)
{
    var regex =
    {
        nameInput : /^[a-zA-Z0-9_]{3,}$/,
        passInput : /^[a-zA-Z0-9_]{8,13}$/,
        emailInput : /^[a-zA-Z0-9]{3,10}@(email|yahoo)\.com$/
        
    }
    
    if (regex[element.id].test(element.value) == true)
    {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
    }else
    {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
    }
}

function welcome(){
    var cartona = "";
   for(var i=0; i<dateList.length; i++)
   {
    cartona+= 
    ` 
    <div class="welcome">
            <nav class="d-flex justify-content-between align-items-center px-4">
                <h3>Home</h3>
                <a href="./index.html" class="text-white">logout</a>
            </nav>
            <p class="text-white fs-1 fw-medium text-center my-5 py-5">welcome ${dateList[i].name}</p>
        </div>
    `
   }

   total.innerHTML = cartona;
}