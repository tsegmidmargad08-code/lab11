// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submit
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email) {
    alert('Нэр болон и-мэйл хаягаа оруулна уу.');
    return;
  }

  alert(`Баярлалаа, ${name}! Таны мэдээлэл хүлээн авлаа.`);
  e.target.reset();
}
