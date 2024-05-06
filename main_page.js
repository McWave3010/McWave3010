document.addEventListener('DOMContentLoaded', function(){
    
    document.querySelector('#sign-in').onclick = function() {
        const user = document.querySelector('#username').value;
        const password = document.querySelector("#password").value;
       if (user == null && password == null) {
            console.log("Empty data");
       }else if(password.lenght <= 8){
        password.clear;
       }else{
            console.log(`Username: ${user} `);
            console.log(`Password: ${password} `);
       }
    }
    document.querySelector('#sign-up-color').onclick = function(){
        document.querySelector('.form-class-div').style.display = 'none';
        document.querySelector('.choose-options').style.display = 'flex';//starting choosing options page
        document.querySelector('.signing-buttons').style.display = 'flex';
    }
}
)