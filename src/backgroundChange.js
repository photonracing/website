var images = ["https://photonracing.github.io/website/media/team/all.jpg", "https://photonracing.github.io/website/media/car/pic1.JPG", "https://photonracing.github.io/website/media/others/race1.JPG"];
$(function () {
    var i = 0;
    $(".bg").css("background", "url(" + images[i] + ") fixed repeat 100%");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".bg").fadeOut("slow", function () {
            $(this).css("background", "url(" + images[i] + ") fixed repeat 100%");
            $(this).fadeIn("slow");
        });
    }, 20000);
});
