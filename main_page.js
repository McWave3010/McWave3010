document.addEventListener('DOMContentLoaded', function(){
    
    document.querySelector('#sign-up-color').onclick = function(){
        document.querySelector('.form-class-div').style.display = 'none';
        document.querySelector('.choose-options').style.display = 'flex';//starting choosing options page
        document.querySelector('.signing-buttons').style.display = 'flex';
    }
    //starting the manger sign up section
    document.querySelector('#master-button').onclick = function() {
        document.querySelector('.choose-options').style.display = 'none';
        document.querySelector('.signing-buttons').style.display = 'none';
        document.querySelector('.manager-sign-up-page').style.display = 'flex';
    
        //function to capitalize inputs 
        
      function form() {
        let inputted = document.querySelector(".inputted_4");
        for (let x = 0; x<inputted.lenght;x++){
            if (inputted[x] === "text"){
                return x.toUpperCase();
            }
        }
        console.log(form());
      }

    }
}
)