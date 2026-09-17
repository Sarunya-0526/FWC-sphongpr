$(document).ready(function() {
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIdx = 0;

    function updateBalloon() {
        $('#balloon').css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[colorIdx]
        });
    }

    $('#balloon').click(function() {
        size += 10;
        if (size > 420) size = 200;
        colorIdx = (colorIdx + 1) % colors.length;
        updateBalloon();
    });

    $('#balloon').mouseleave(function() {
        if (size > 200) size -= 5;
        colorIdx = (colorIdx - 1 + colors.length) % colors.length;
        updateBalloon();
    });
});