
// Navbar active link
$('#navbarNavDropdown li a').click(function(){
    $('#navbarNavDropdown li a').removeClass('selected');
    $(this).addClass('selected');
})

// For the new design 
// Display contact information
$('#v-pills-direct-contact-tab').click(function(e) {
    $('#direct-contact').toggleClass('hide-contact');
    $('#direct-contact').toggleClass('show-contact');
})
