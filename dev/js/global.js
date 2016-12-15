jQuery(document).ready(function($) {
    
    /* Mobile menu toggle */
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $(this).parents('body').toggleClass('lockme')
    });

    /* Dropdown toggle */
    $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown').toggle();
    });

    /* Close dropdown when click DOM */
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
            $('.dropdown').hide();
        }
    });

    /* Click disable hash disable */
    $(document).on('click', '.dropdown-toggle', function(event) {
    	return false;
    });

    /* tab section */
    /*$('.tab-wrapper .tab-section').hide();
    $('.tab-panel a').on('click', function(e) {
        $('.tab-panel a.tab-active').removeClass('tab-active');
        $('.tab-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('tab-active');
        e.preventDefault();
    });
    setTimeout(function() {
        $('.tab-panel a:first').trigger('click');
    }, 230);*/
});
