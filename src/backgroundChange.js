var images = ["http://localhost:5173/media/team/all.jpg", "http://localhost:5173/media/car/pic1.JPG", "http://localhost:5173/media/others/race1.JPG"];
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
