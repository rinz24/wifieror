// jQuery for smooth scrolling
$(document).ready(function () {
    $('a.section-link').on('click', function (e) {
        e.preventDefault();

        var targetSection = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: targetSection.offset().top
        }, 800);
    });
});
