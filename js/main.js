// Animated typing text for hero section
const animatedText = document.querySelector('.animated-text');
const phrases = [
  'I build modern web website.',
  'I love clean code with perfect layout pixels perfect.',
  'Let\'s create something amazing!'
];
let phraseIndex = 0, letterIndex = 0, isDeleting = false;
function type() {
  if (!animatedText) return;
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    animatedText.textContent = currentPhrase.substring(0, letterIndex--);
    if (letterIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 40);
    }
  } else {
    animatedText.textContent = currentPhrase.substring(0, letterIndex++);
    if (letterIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 80);
    }
  }
}
type();

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar active link highlight on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Animate skill bars on scroll
function animateSkills() {
  const skillBars = document.querySelectorAll('.progress');
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute('style').replace('width:', '');
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills); 