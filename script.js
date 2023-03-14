let menu_button = document.body.querySelector('.navbar_menu_button');
let popup = document.body.querySelector('.popup_menu');
menu_button.addEventListener('click', function(event) {
    event.preventDefault();
    popup.hidden = false;
    setTimeout(() => popup.style.height = '100%', 0);
    document.body.style.overflow = 'hidden';
});

let popup_button = document.body.querySelector('.popup_navbar_menu_button');
popup_button.addEventListener('click', function(event) {
    event.preventDefault();
    popup.style.height = '0';
    popup.hidden = true;
    document.body.style.overflow = 'visible';
});

let feedback_button = document.body.querySelectorAll('.feedback_button');
let feedback_popup_flex = document.body.querySelector('.popup_feedback_flex');
let feedback_popup = document.body.querySelector('.popup_feedback');

for( let button of feedback_button ) {
    button.addEventListener('click', function(event) {
    event.preventDefault();
    feedback_popup_flex.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
}

let close_button = document.body.querySelector('.close_icon_image');

close_button.addEventListener('click', function() {
    feedback_popup_flex.style.display = 'none';
    document.body.style.overflow = 'visible';
});
