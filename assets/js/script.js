// Display contact information
$('#contact-button').click(function(e) {
    $('#contact-row').toggleClass('hide');
    $('#contact-row').toggleClass('show');
})

// Navbar active link
$('#navbarNavDropdown li').click(function(){
    $('#navbarNavDropdown li').removeClass('active');
    $(this).addClass('active');
})