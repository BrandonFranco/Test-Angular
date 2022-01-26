jQuery(document).ready(function() {
    $('span.icon-menu').click(function() {
    $(this).toggleClass('active');
    $(this).parent().find('.container-header').first().slideToggle();
    });
});