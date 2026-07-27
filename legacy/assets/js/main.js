/**
 * Hotel Prabhupada - Main Interactive Script
 * Milestone 1: Header Scroll Behavior, Mobile Drawer Navigation, Hero Carousel Slider
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Navigation Header Scroll Effect ---
  const header = document.getElementById('mainHeader');
  
  function handleHeaderScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Initialize on page load

  // --- 2. Mobile Slide-In Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileNavToggle');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');

  function openDrawer() {
    mobileDrawer.classList.add('is-active');
    mobileOverlay.classList.add('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('is-active');
    mobileOverlay.classList.remove('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  // --- 3. Hero Slider Carousel Logic ---
  const slides = document.querySelectorAll('.hero-slide');
  const slideTexts = document.querySelectorAll('.hero-slide-text');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const isActive = i === index;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', !isActive);
    });

    slideTexts.forEach((text, i) => {
      text.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startSlider() {
    stopSlider();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlider() {
    if (slideInterval) clearInterval(slideInterval);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startSlider();
    });
  });

  if (slides.length > 0) {
    startSlider();
  }
});
