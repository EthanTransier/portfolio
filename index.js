var sideBarState = 1;

function sideBarAnimation(){
    if(sideBarState == 1){
        sideBarState = 2;
        document.getElementById("sideBar").classList.add("sideBarOpenAnimationClass");
        document.getElementById("sideBar").classList.remove("sideBarCloseAnimationClass");
    }else if(sideBarState == 2){
        sideBarState = 1;
        document.getElementById("sideBar").classList.remove("sideBarOpenAnimationClass");
        document.getElementById("sideBar").classList.add("sideBarCloseAnimationClass");
    }
}