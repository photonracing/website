var images = ["http://localhost:5173/media/team/all.jpg", "http://localhost:5173/media/car/pic1.jpg", "http://localhost:5173/media/others/race1.JPG"];
$(function () {
    var i = 0;
    $(".bg").css("background", "url(" + images[i] + ")   center / cover no-repeat");
    setInterval(function () {
        $(".bg2").css("background", "url(" + images[i] + ")  center / cover no-repeat");
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".bg").fadeOut("fast", function () {
            $(this).css("background", "url(" + images[i] + ")  center / cover no-repeat");
            $(this).fadeIn("fast");
        });
    }, 20000);
});
