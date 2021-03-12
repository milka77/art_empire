
// Navbar active link
$('#nav a').click(function(){
    $('#nav a').removeClass('active');
    $(this).addClass('active');
})

// For the new design 
// Display contact information
$('#v-pills-direct-contact-tab').click(function() {
    $('#direct-contact').toggleClass('hide-contact');
    $('#direct-contact').toggleClass('show-contact');
})


//Curent Year For Footer
let year = new Date();
let currentYear = year.getFullYear();

$('#year').text(currentYear);

//Random picture Our Books
const ourBooksArray = [
    "assets/images/comming-soon/at_the_zoo.jpg",
    "assets/images/comming-soon/farm.jpg",
    "assets/images/comming-soon/find_10_hidden_objects.jpg",
    "assets/images/comming-soon/my_village.jpg",
    "assets/images/comming-soon/numbers.jpg",
    "assets/images/comming-soon/professions.jpg",
    "assets/images/comming-soon/rhymes.jpg",
    "assets/images/comming-soon/work_machines.jpg"
];

let randomBooks = ourBooksArray[Math.floor(Math.random()*ourBooksArray.length)];

$('#random-our-books-link').attr("href", randomBooks);
$('#random-our-books-img').attr("src", randomBooks);

// Random pictire Coming Soon
const comingSoonArray = [
    "assets/images/comming-soon/at_the_zoo.jpg",
    "assets/images/comming-soon/farm.jpg",
    "assets/images/comming-soon/find_10_hidden_objects.jpg",
    "assets/images/comming-soon/my_village.jpg",
    "assets/images/comming-soon/numbers.jpg",
    "assets/images/comming-soon/professions.jpg",
    "assets/images/comming-soon/rhymes.jpg",
    "assets/images/comming-soon/work_machines.jpg"
];

let randomComingSoon = comingSoonArray[Math.floor(Math.random()*comingSoonArray.length)];

$('#random-coming-soon-link').attr("href", randomComingSoon);
$('#random-coming-soon-img').attr("src", randomComingSoon);

// Mobile menu
$('#btnHamburger').click(function(e) {
    $('#mobile-nav').toggleClass('mobile-nav-show');
    $('.bars').toggleClass('bg-dark-brown');
    $('.bars').toggleClass('bg-light-brown');
})

// Back to the top function
let backToTopBtn = document.getElementById('backToTopBtn');

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the page
function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, FireFox, IE and Opera
}
