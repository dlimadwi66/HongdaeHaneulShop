const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');


menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    hero.style.marginTop = '120px';
  } else {
    hero.style3.css = '80px';
  }
});



document.querySelector('.search-bar').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const query = e.target.value.toLowerCase(); // Get the input value and convert to lowercase
    const products = [
      { id: 'winter-jacket', name: 'winter jacket' },
      { id: 'winter Boots', name: 'winter Boots' },
      { id: 'Woolen Scarf', name: 'Woolen Scarf' },
    ];

    // Find the product that matches the query
    const product = products.find(p => p.name.includes(query));

    if (product) {
      // Scroll to the matched product and alert availability
      document.getElementById(product.id).scrollIntoView({ behavior: 'smooth' });
      alert(`The product "${product.name}" is available!`);
    } else {
      alert('Sorry, the product you searched for is not available.');
    }
  }
});



document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});


document.querySelectorAll('.feature').forEach(feature => {
  feature.addEventListener('mouseenter', () => {
    feature.style.transform = "translateY(-10px)";
  });
  feature.addEventListener('mouseleave', () => {
    feature.style.transform = "translateY(0)";
  });
});


document.querySelectorAll('.promotion').forEach(promotion => {
  promotion.addEventListener('mouseenter', () => {
    promotion.style.transform = "translateY(-10px)";
  });
  promotion.addEventListener('mouseleave', () => {
    promotion.style.transform = "translateY(0)";
  });
});


function submitMessage() {
  alert('Thank you for contacting us! We will get back to you soon.');
}