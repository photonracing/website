var images = ["http://localhost:5173/media/team/all.jpg", "http://localhost:5173/media/car/pic1.JPG", "http://localhost:5173/media/others/race1.JPG"];
$(function () {
    var i = 0;
    $(".bg").css("background", "url(" + images[i] + ") fixed 100%");
    setInterval(function () {
        $("body").css("background", "url(" + images[i] + ") fixed 100%");
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".bg").fadeOut("fast", function () {
            $(this).css("background", "url(" + images[i] + ") fixed  100%");
            $(this).fadeIn("fast");
        });
    }, 20000);
});
