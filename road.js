
var pane = $('#pane'),
box = $('#box'),
wh = pane.width() - box.width(),
wv = pane.height() - box.height(),
d = {},
arrowScrollSpeed = 10, // Scroll speed when using arrow keys
boxMoveSpeed = 6; // Box movement speed

function newh(v, a, b) {
var n = parseInt(v, 10) - (d[a] ? boxMoveSpeed : 0) + (d[b] ? boxMoveSpeed : 0);
return n < 0 ? 0 : n > wh ? wh : n;
}

function newv(v, a, b) {
var n = parseInt(v, 10) - (d[a] ? boxMoveSpeed : 0) + (d[b] ? boxMoveSpeed : 0);
return n < 0 ? 0 : n > wv ? wv : n;
}

$(window).keydown(function(e) {
d[e.which] = true;
// If arrow key pressed, scroll the page
if ([37, 38, 39, 40].indexOf(e.which) > -1) {
    switch (e.which) {
        case 37: // Left arrow
            window.scrollBy(-arrowScrollSpeed, 0);
            break;
        case 38: // Up arrow
            window.scrollBy(0, -arrowScrollSpeed);
            box.addClass('inverted');
            break;
        case 39: // Right arrow
            window.scrollBy(arrowScrollSpeed, 0);
            break;
        case 40: // Down arrow
            window.scrollBy(0, arrowScrollSpeed);
            break;
    }
}
});

$(window).keyup(function(e) {
d[e.which] = false;
if (e.which === 38) { // Up arrow
    box.removeClass('inverted');
}
});

setInterval(function() {
box.css({
    left: function(i, v) {
        return newh(v, 37, 39);
    },
    top: function(i, v) {
        return newv(v, 38, 40);
    }
});
wh = pane.width() - box.width();
wv = pane.height() - box.height();
}, 20);

window.addEventListener("keydown", function(e) {
if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
    e.preventDefault();
}
}, false);