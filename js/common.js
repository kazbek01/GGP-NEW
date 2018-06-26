//COLUMS
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}

$(document).ready(function () {
    setEqualHeight($(".sertificate-box > div"));
});
//
$(document).ready(function () {
    $(".gpp-block").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
//POPUP
$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.popup-bg').show();
})
$('.popup-bg').click(function() {
    $('.popup-bg, .popup').hide();
})
//HEIGHT
$('.screenMask').height($(document).height());
//
$(document).ready(function() {
    $('#fullpage').fullpage();
});
//FULPAGE
if ($(window).width() < 767) {
    $('#fullpage').removeAttr('id');
}
//
