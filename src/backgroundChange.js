var images = ["https://photonracing.github.io/website/media/team/all.jpg", "https://photonracing.github.io/website/media/car/pic1.jpg", "https://photonracing.github.io/website/media/others/race1.JPG"];
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
