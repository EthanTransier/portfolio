function seeProjectAnimation(containerID){
    document.getElementById(containerID).classList.add('seeProjectContainerOpenAnimationClass');
    document.getElementById(containerID).classList.remove('seeProjectContainerCloseAnimationClass');

    document.getElementById(containerID + "Blur").classList.add('seeProjectBlurOpenAnimationClass');
    document.getElementById(containerID + "Blur").classList.remove('seeProjectBlurCloseAnimationClass');

    document.getElementById(containerID + "Link").style.fontSize = "30px";
}

function seeProjectAnimationEnd(containerID){
    document.getElementById(containerID).classList.add('seeProjectContainerCloseAnimationClass');
    document.getElementById(containerID).classList.remove('seeProjectContainerOpenAnimationClass');

    document.getElementById(containerID + "Blur").classList.remove('seeProjectBlurOpenAnimationClass');
    document.getElementById(containerID + "Blur").classList.add('seeProjectBlurCloseAnimationClass');

    document.getElementById(containerID + "Link").style.fontSize = "0px";
}