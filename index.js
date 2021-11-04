var q = 0;
setInterval(() => {
    if(q == 0) {
        document.getElementsByClassName('plane')[0].setAttribute('class','flying');
        q = 1;
    }
    else if(q == 1) {
        document.getElementsByClassName('flying')[0].setAttribute('class','land');
        q = 2;
    }
    else if(q == 2) {
        document.getElementsByClassName('land')[0].setAttribute('class','static');
        q = 3;
    }
    else {
        document.getElementsByClassName('static')[0].setAttribute('class','plane');
        q = 0;
    }
}, 4000);