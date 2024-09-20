const slides = document.querySelectorAll('.hero-slider .item');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index)
{
	slides.forEach((slide, i) =>
	{
		slide.style.display = i === index ? 'block' : 'none';
	});
}

// Show the first slide
showSlide(currentSlide);

// Function to go to the next slide
function nextSlide()
{
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);
