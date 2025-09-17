document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('lead-form');
  // Smooth scroll init

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          ev.preventDefault();
          target.scrollIntoView({behavior:'smooth'});
        }
      }
    });
  });

  if(!form) return;

  form.addEventListener('submit', async (e) => {
    // Basic client-side validation
    const email = form.querySelector('#email')?.value || '';
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      e.preventDefault();
      alert('올바른 이메일을 입력해주세요.');
      return false;
    }

    // Optional: show lightweight success state when using Formspree (will redirect)
    // If you swap to Google Forms, this handler can be removed.
  });
});