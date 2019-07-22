/*('.carousel').carousel({
    interval: 3000,
    keyboard: false,
    pause: 'hover',
    ride: 'carousel',
    wrap: false
  });
(function () {
  // метод cycle
  ('.btn').click(function () {
    var action = (this).attr('data-action');
    if (action.indexOf('to') >= 0) {
      var action = parseInt(action.substring(3))-1;
    }
    ('#carousel').carousel(action);
  });
});

//*/

var modal = document.getElementById('modal');


var btn = document.getElementById("modalbtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}