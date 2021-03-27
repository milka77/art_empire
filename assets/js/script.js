
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

//Random video presentation
const ourBooksVideos = [
    "https://youtube.com/embed/2-BN4jzWMuA",
    "https://www.youtube.com/embed/In5t6EU9234",
    "https://youtube.com/embed/_A_a29GuG3E",
    "https://youtube.com/embed/lG0HYFem_Os",
    "https://youtube.com/embed/zUPFKjUkNRU",
    "https://youtube.com/embed/KRuWjf0blEE"
];

let randomVideo = ourBooksVideos[Math.floor(Math.random()*ourBooksVideos.length)];


//Random picture Our Books
const ourBooksArray = [
    "assets/images/books_clear1.png",
    "assets/images/books_clear2.png",
    "assets/images/books_clear3.png",
    "assets/images/books_clear4.png"
];

let randomBooks = ourBooksArray[Math.floor(Math.random()*ourBooksArray.length)];

if(randomBooks == "assets/images/books_clear1.png") {
    $('#random-our-books-link').attr("href", "assets/images/books1.jpg");
    $('#random-our-books-img').attr("src", randomBooks);

} else if (randomBooks == "assets/images/books_clear2.png") {
    $('#random-our-books-link').attr("href", "assets/images/books2.jpg");
    $('#random-our-books-img').attr("src", randomBooks);

} else if (randomBooks == "assets/images/books_clear3.png") {
    $('#random-our-books-link').attr("href", "assets/images/books3.jpg");
    $('#random-our-books-img').attr("src", randomBooks);

} else {
    $('#random-our-books-link').attr("href", "assets/images/books4.jpg");
    $('#random-our-books-img').attr("src", randomBooks);
}

// Random pictire Coming Soon
const comingSoonArray = [
    "assets/images/coming-soon/at_the_zoo.jpg",
    "assets/images/coming-soon/farm.jpg",
    "assets/images/coming-soon/find_10_hidden_objects.jpg",
    "assets/images/coming-soon/my_village.jpg",
    "assets/images/coming-soon/numbers.jpg",
    "assets/images/coming-soon/professions.jpg",
    "assets/images/coming-soon/rhymes.jpg",
    "assets/images/coming-soon/work_machines.jpg"
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
const backToTopBtn = document.getElementById('backToTopBtn');
const topNav = document.getElementById("topnav");

// When the user scrolls down 500px from the top, show the topvan and the back to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backToTopBtn.style.right = "30px";
        topNav.style.top = "0";

    } else {
        backToTopBtn.style.right = "-60px";
        topNav.style.top = "-60px";
    }
}

// When the user clicks on the button, scroll to the top of the page
function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, FireFox, IE and Opera
}
