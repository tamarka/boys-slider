var slideImages = new Array();
slideImages[0] = {src: "images/without-hat.png"};
slideImages[1] = {src: "images/hat.png"};
slideImages[2] = {src: "images/hat.png"};
var ulSlides;
var interval=1000;
$(document).ready(function () {
    showSlides(slideImages, 0);
});
function showSlides(array, n) {
    ulSlides=document.getElementById("slides");
    if( ulSlides.childNodes)
    {
        $('#slides').empty();
    }
    for(var i=0; i<array.length; i++)
    {
        var img=new Image();
        img.src=array[i].src;
        img.className="slide";
        var liElem=document.createElement('div');
        liElem.classList.add('div-slides');
        liElem.appendChild(img);
        ulSlides.appendChild(liElem);
    }
}

var indexToRemove;
function moveSlide(n) {
    var allSlides = document.getElementsByClassName("div-slides");
    var allSlidesToArray= Array.from(allSlides);
    for(var i=0; i<allSlidesToArray.length; i++)
    {
        allSlidesToArray[i].classList="";
        allSlidesToArray[i].style="";
        allSlidesToArray[i].classList.add('div-slides')
    }
    if(indexToRemove == 0)
    {
        ulSlides.removeChild(ulSlides.lastChild);
        allSlidesToArray.pop();
    }
    else if(indexToRemove == 1)
    {
        ulSlides.removeChild(ulSlides.firstChild);
        allSlidesToArray.shift();
    }
    if(n>0)
    {
        var img=new Image();
        img.src=allSlidesToArray[allSlidesToArray.length-1].childNodes[0].src;
        img.className="slide";
        var liElem=document.createElement('div');
        liElem.classList.add('div-slides');
        liElem.setAttribute('style', 'display:none; opacity: 0');
        liElem.appendChild(img);
        ulSlides.insertBefore(liElem, ulSlides.firstChild);
        allSlidesToArray.unshift(liElem);

        var lastItem=allSlidesToArray[allSlidesToArray.length-1];

        lastItem.classList.add('slide-right-disappear');

        setTimeout(function () {
            allSlidesToArray[0].classList.add('slide-right-appear');
            for(var i=allSlidesToArray.length-2; i>0; i--)
            {
                allSlidesToArray[i].classList.add('slide-right');
            }
        }, interval*0.8)
        indexToRemove = 0;
    }
    else if(n<0)
    {
        var img=new Image();
        img.src=allSlidesToArray[0].childNodes[0].src;
        img.className="slide";
        var liElem=document.createElement('div');
        liElem.classList.add('div-slides');
        liElem.setAttribute('style', 'display:none; opacity: 0');
        liElem.appendChild(img);

        ulSlides.appendChild(liElem);
        allSlidesToArray.push(liElem);

        allSlidesToArray[0].classList.add('slide-left-disappear');

        setTimeout(function () {
            allSlidesToArray[allSlidesToArray.length-1].classList.add('slide-left-appear');
            for(var i=1; i<allSlidesToArray.length; i++)
            {
                allSlidesToArray[i].classList.add('slide-left');
            }
        }, interval*0.8);
        indexToRemove = 1;
    }
}
