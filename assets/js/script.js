
// Navbar active link
$('#nav a').click(function(){
    $('#nav a').removeClass('active');
    $(this).addClass('active');
})

// For the new design 
// Display contact information
$('#v-pills-direct-contact-tab').click(function(e) {
    $('#direct-contact').toggleClass('hide-contact');
    $('#direct-contact').toggleClass('show-contact');
})


//Curent Year For Footer
let year = new Date();
let currentYear = year.getFullYear();

$('#year').text(currentYear);
