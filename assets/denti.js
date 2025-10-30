(function () {
  const ready = (fn) => {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  ready(() => {
    const scrollLinks = document.querySelectorAll('[data-scroll-to]');
    scrollLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const target = document.querySelector(targetId);
          if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    const stickyEnabled = document.body.dataset.stickyEnabled !== 'false';
    if (stickyEnabled) {
      const stickyCta = document.querySelector('[data-sticky-cta]');
      const toggleSticky = () => {
        if (!stickyCta) return;
        const isVisible = window.scrollY > 400;
        stickyCta.classList.toggle('is-visible', isVisible);
      };
      window.addEventListener('scroll', toggleSticky, { passive: true });
      toggleSticky();
    }

    const stockEl = document.querySelector('[data-stock-count]');
    if (stockEl) {
      const savedStock = parseInt(sessionStorage.getItem('dentiStock') || '', 10);
      const initialStock = Number.isFinite(savedStock) ? savedStock : Math.floor(Math.random() * 5) + 11;
      let currentStock = initialStock;
      const renderStock = () => {
        stockEl.textContent = currentStock;
      };
      renderStock();
      setInterval(() => {
        if (currentStock > 5) {
          currentStock -= Math.random() > 0.6 ? 1 : 0;
          sessionStorage.setItem('dentiStock', String(currentStock));
          renderStock();
        }
      }, 15000);
    }

    const deliveryTimer = document.querySelector('[data-delivery-timer]');
    if (deliveryTimer) {
      const renderTimer = () => {
        const now = new Date();
        const cutoff = new Date();
        cutoff.setHours(20, 0, 0, 0);
        if (now > cutoff) {
          cutoff.setDate(cutoff.getDate() + 1);
        }
        const diff = cutoff - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hh = String(hours).padStart(2, '0');
        const mm = String(minutes).padStart(2, '0');
        deliveryTimer.textContent = `Commande avant ${hh}h${mm} pour expédier aujourd'hui`;
      };
      renderTimer();
      setInterval(renderTimer, 60000);
    }

    const revealEls = document.querySelectorAll('[data-reveal]');
    const revealEnabled = document.body.dataset.revealEnabled !== 'false';
    if (!revealEnabled) {
      revealEls.forEach((el) => el.classList.add('is-revealed'));
    } else if (window.IntersectionObserver && revealEls.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('is-revealed'));
    }

    const testimonialsTrack = document.querySelector('[data-testimonials-track]');
    if (testimonialsTrack) {
      const slides = testimonialsTrack.children;
      let index = 0;
      let offset = 0;
      const calculateOffset = () => {
        if (!slides.length) return 0;
        const style = window.getComputedStyle(testimonialsTrack);
        const gap = parseFloat(style.columnGap || style.gap || '0');
        const width = slides[0].getBoundingClientRect().width;
        offset = width + gap;
        testimonialsTrack.style.transform = `translateX(-${index * offset}px)`;
      };
      calculateOffset();
      window.addEventListener('resize', calculateOffset);
      if (slides.length > 1) {
        const cycle = () => {
          index = (index + 1) % slides.length;
          testimonialsTrack.style.transform = `translateX(-${index * offset}px)`;
        };
        setInterval(cycle, 6000);
      }
    }
  });
})();
