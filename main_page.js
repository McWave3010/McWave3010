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

    }
    //Stating students with homepage and student sign up
    // document.querySelector("#student-button").onclick = function() {
    //     document.querySelector(".main").style.display = 'none';
    //     document.querySelector(".students-main-div").style.display = 'flex';
    //     document.querySelector(".links-lists").style.display = 'flex';
    //     document.querySelector("#lists-of-links").style.display = 'flex';
    //     document.querySelector(".gridding-pictures").style.display = 'flex';
    //     document.querySelector(".main-gridding-container").style.display = 'grid';
    //}
    document.querySelector("#signer-sign-in").onclick = function() {
        document.querySelector(".main").style.display = 'flex';
        document.querySelector(".students-main-div").style.display = 'none';
        document.querySelector(".links-lists").style.display = 'none';
        document.querySelector("#lists-of-links").style.display = 'none';
        document.querySelector(".gridding-pictures").style.display = 'none';
        document.querySelector(".main-gridding-container").style.display = 'none';
    
}
document.querySelector("#linker").onclick = function() {
    document.querySelector("#svg-menu").style.display = 'none';
    document.querySelector(".navbar-nav").style.display = 'grid';

}
    
document.querySelector("#svg-close").onclick = function() {
    document.querySelector(".navbar-nav").style.display = 'none';
    document.querySelector("#svg-menu").style.display = 'flex';
  
}
document.querySelector("#signer-signing-in").onclick = function() {
    document.querySelector(".students-main-div").style.display = 'none';
    document.querySelector(".gridding-pictures").style.display = 'none';
    document.querySelector(".about-section").style.display = 'none';
    document.querySelector(".main").style.display = 'flex';
}

}
)