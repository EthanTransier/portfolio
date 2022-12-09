var sideBarState = 1;

function sideBarAnimation(){
    if(sideBarState == 1){
        sideBarState = 2;
        document.getElementById("sideBar").classList.add("sideBarOpenAnimationClass");
    }
}