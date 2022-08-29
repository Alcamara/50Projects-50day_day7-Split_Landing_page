$(document).ready(readyNow);


function readyNow() {
    console.log('it works');

    $('.split.left').on('mouseenter', incrWidthLeft).on('mouseleave', decrWidthLeft);

    $('.split.right').on('mouseenter', incrWidthRight).on('mouseleave', decrWidthRight);
}

function incrWidthLeft(event) {
    console.log(event.currentTarget);
   $('.container').addClass('hover-left')
}
function decrWidthLeft(){
    $('.container').removeClass('hover-left')
}

function incrWidthRight(event) {
    console.log(event.currentTarget);
   $('.container').addClass('hover-right')
}
function decrWidthRight(){
    $('.container').removeClass('hover-right')
}