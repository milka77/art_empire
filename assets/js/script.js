// Display contact information
$('#contact-button').click(function(e) {
    $('#contact-row').toggleClass('hide');
    $('#contact-row').toggleClass('show');
})

// Navbar active link
$('#navbarNavDropdown li a').click(function(){
    $('#navbarNavDropdown li a').removeClass('selected');
    $(this).addClass('selected');
})