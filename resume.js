
/* SMOOTH SCROLL APPROACH 1*/

// var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

// for(var i=0;i<navMenuAnchorTags.length;i++)
// {
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();  /* to prevent default action*/

//         var targetSectionId=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetSectionId);
        
       
//         var interval= setInterval(function() {
//             var targetSectionCoordinates=targetSection.getBoundingClientRect();

//             if(targetSectionCoordinates.top<=0)
//             {
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
//         }, 20);


//     })
// }




/* SMOOTH SCROLL APPROACH 2*/

// var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

// var interval;
// for(var i=0;i<navMenuAnchorTags.length;i++)
// {
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();  /* to prevent default action*/

//         var targetSectionId=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetSectionId);
        
       
//         interval= setInterval(verticalScroll, 20,targetSection);


//     })
// }

// function verticalScroll(targetSection){
//     var targetSectionCoordinates=targetSection.getBoundingClientRect();

//     if(targetSectionCoordinates.top<=0)
//     {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0,50);
// }



/* SMOOTH SCROLL APPROACH 3 */

var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

var interval;
for(var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();  /* to prevent default action*/

        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        
       
        interval= setInterval(function(){
            verticalScroll(targetSection);
        }, 20);


    })
}

function verticalScroll(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();

    if(targetSectionCoordinates.top<=0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}


/* FILL BAR ANIMATION */

var barProgress=document.querySelectorAll('.skill-progress');
var skillContainer=document.getElementById('skill-display');
var animationDone=false;

window.addEventListener('scroll', checkScroll);

function intialiseBars(){
    for(let bar of barProgress)
    {
        bar.style.width=0+'%';

    }

}

intialiseBars();

function fillBar(){
    for(let bar of barProgress)
    {
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>=targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },10);
    }
} 

function checkScroll(){
    var coordinates=skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight) 
     /* "window.innerHeigth" is used to get height of viewport*/
     {
        animationDone=true;
        fillBar();
     }
     else if(coordinates.top > window.innerHeight)
     {
        animationDone=false;
        intialiseBars;
     }
}