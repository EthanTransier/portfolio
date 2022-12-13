function scrolled(){
    console.log(window.scrollY)
    if(window.scrollY >= 50){
        console.log("worked")
        document.getElementById("infoBoxHiderID").classList.add("appearAnimation");
    }
}