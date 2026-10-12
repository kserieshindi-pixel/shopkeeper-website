const products = [
  {
    id: 1,
    name: 'Speaker Woofer Printed',
    price: 749,
    rating: 4.8,
    description: 'High quality speaker woofer with excellent sound output.',
    image: 'https://i.ibb.co/v6qyvWNP/IMG-20260915-190814149.jpg'
  },
  {
    id: 2,
    name: 'Ganesh Ji Pratima',
    price: 799,
    rating: 4.7,
    description: 'Beautiful religious statue for home decor.',
    image: 'https://i.ibb.co/vvMF7T0d/IMG-20260914-150302376.jpg'
  },
  {
    id: 3,
    name: 'Toothpick Took',
    price: 699,
    rating: 4.6,
    description: 'Premium quality toothpick holder set.',
    image: 'https://i.ibb.co/Wvt22z9p/IMG-20260914-150138961-HDR.jpg'
  },
  {
    id: 4,
    name: 'Saraswati Mata',
    price: 799,
    rating: 4.8,
    description: 'Elegant Saraswati goddess statue for worship.',
    image: 'https://i.ibb.co/JwY0Yw5X/IMG-20260914-150343298.jpg'
  },
  {
    id: 5,
    name: 'Astronaut Product',
    price: 699,
    rating: 4.7,
    description: 'Collectible astronaut figurine for display.',
    image: 'https://i.ibb.co/JWy1cz6P/IMG-20260914-150103661.jpg'
  },
  {
    id: 6,
    name: 'Eiffel Tower',
    price: 799,
    rating: 4.8,
    description: 'Premium Eiffel Tower replica model.',
    image: 'https://i.ibb.co/KcLDQL75/IMG-20260914-145953191-HDR.jpg'
  },
  {
    id: 7,
    name: 'Plastic Box',
    price: 649,
    rating: 4.5,
    description: 'Durable plastic storage box for organizing items.',
    image: 'https://i.ibb.co/p6zBhKD9/IMG-20260914-150459149-HDR.jpg'
  },
  {
    id: 8,
    name: 'Mask',
    price: 799,
    rating: 4.6,
    description: 'High-quality protective mask.',
    image: 'https://i.ibb.co/DDrdfS2Z/IMG-20260914-145957762-HDR.jpg'
  },
  {
    id: 9,
    name: 'Robotic Arm',
    price: 749,
    rating: 4.9,
    description: 'Advanced robotic arm model for learning and play.',
    image: 'https://i.ibb.co/ym9n8LqC/IMG-20260914-150613063-HDR.jpg'
  },
  {
    id: 10,
    name: 'Cube',
    price: 599,
    rating: 4.7,
    description: 'Innovative puzzle cube game.',
    image: 'https://i.ibb.co/PR982Sn/IMG-20260914-153108743-HDR.jpg'
  },
  {
    id: 11,
    name: 'Laser Light All Colors',
    price: 649,
    rating: 4.8,
    description: 'Multi-color laser light for parties and events.',
    image: 'https://i.ibb.co/ds38JQCn/IMG-20260914-150649424-HDR.jpg'
  },
  {
    id: 12,
    name: 'Premium Cable',
    price: 599,
    rating: 4.6,
    description: 'High-speed premium quality cable.',
    image: 'https://i.ibb.co/0jLBY0vt/IMG-20260914-150521740.jpg'
  },
  {
    id: 13,
    name: 'Glue Gun',
    price: 749,
    rating: 4.7,
    description: 'Professional hot glue gun for crafts and repairs.',
    image: 'https://i.ibb.co/TqTh9h0z/IMG-20260914-150931954-HDR.jpg'
  },
  {
    id: 14,
    name: 'Desolder Machine',
    price: 649,
    rating: 4.8,
    description: 'Efficient desoldering tool for electronics work.',
    image: 'https://i.ibb.co/gb76B3Mp/IMG-20260914-150733154-HDR.jpg'
  },
  {
    id: 15,
    name: 'Soldering Iron',
    price: 649,
    rating: 4.7,
    description: 'Professional soldering iron with temperature control.',
    image: 'https://i.ibb.co/46v9ksS/IMG-20260914-150539840-HDR.jpg'
  },
  {
    id: 16,
    name: 'Multimeter',
    price: 599,
    rating: 4.8,
    description: 'Digital multimeter for electrical measurements.',
    image: 'https://i.ibb.co/QvDVbDHq/IMG-20260914-151156193-HDR.jpg'
  },
  {
    id: 17,
    name: 'Arduino',
    price: 799,
    rating: 4.9,
    description: 'Arduino microcontroller development board.',
    image: 'https://i.ibb.co/qY7YG0Y8/IMG-20260914-152914060-HDR.jpg'
  },
  {
    id: 18,
    name: 'Heat Sleeve',
    price: 749,
    rating: 4.6,
    description: 'Heat shrink tubing for wire protection.',
    image: 'https://i.ibb.co/KghVQD1/IMG-20260914-151146683-HDR.jpg'
  },
  {
    id: 19,
    name: 'Electric Screwdriver (5 pieces)',
    price: 349,
    rating: 4.7,
    description: 'Set of 5 electric screwdrivers for convenience.',
    image: 'https://i.ibb.co/rKmQ7HQr/IMG-20260914-152458800-HDR.jpg'
  },
  {
    id: 20,
    name: 'Electric Screwdriver',
    price: 499,
    rating: 4.8,
    description: 'Cordless electric screwdriver with multiple bits.',
    image: 'https://i.ibb.co/GfQ0vSf8/IMG-20260914-151216145.jpg'
  },
  {
    id: 21,
    name: 'Disco Bulb',
    price: 749,
    rating: 4.7,
    description: 'Colorful disco LED bulb for parties and ambiance.',
    image: 'https://i.ibb.co/7JycJmLr/IMG-20260914-153025589.jpg'
  }
  {{
  id: 22,
  name: 'Home Decore Ganesh ji',
  price: 699,
  rating: 4.8,
  description: 'Beautiful round shape Ganesha idol for home decor.',
  image: 'https://ibb.co'
},

];

const cart = [];

const productsCarousel = document.getElementById('productsCarousel');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const finalTotalEl = document.getElementById('finalTotal');
const checkoutModal = document.getElementById('checkoutModal');
const cartModal = document.getElementById('cartModal');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

function formatPrice(value) {
  return `₹${value.toLocaleString('en-IN')}`;
}

function renderProducts() {
  productsCarousel.innerHTML = products.map((product) => `
    <article class="product-card" aria-label="${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="product-rating"><i class="fas fa-star"></i> ${product.rating}</span>
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="product-btn" data-id="${product.id}">Add to cart</button>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.product-btn').forEach((button) => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.id)));
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalItems;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    subtotalEl.textContent = '₹0';
    taxEl.textContent = '₹0';
    totalEl.textContent = '₹0';
    finalTotalEl.textContent = '₹0';
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <span class="qty">Qty: ${item.quantity}</span>
      </div>
      <span class="price">${formatPrice(item.price * item.quantity)}</span>
      <button class="remove-item" data-id="${item.id}">Remove</button>
    </div>
  `).join('');

  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(Number(button.dataset.id)));
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  subtotalEl.textContent = formatPrice(subtotal);
  taxEl.textContent = formatPrice(tax);
  totalEl.textContent = formatPrice(total);
  finalTotalEl.textContent = formatPrice(total);
}

function openModal(modal) {
  modal.classList.add('open');
}

function closeModal(modal) {
  modal.classList.remove('open');
}

cartBtn.addEventListener('click', () => openModal(cartModal));
closeCart.addEventListener('click', () => closeModal(cartModal));
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add products before checkout.');
    return;
  }
  closeModal(cartModal);
  openModal(checkoutModal);
});
closeCheckout.addEventListener('click', () => closeModal(checkoutModal));

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const customerName = document.getElementById('customerName').value.trim();
  const customerPhone = document.getElementById('customerPhone').value.trim();
  const customerEmail = document.getElementById('customerEmail').value.trim();
  const customerAddress = document.getElementById('customerAddress').value.trim();
  const customerCity = document.getElementById('customerCity').value.trim();
  const customerZip = document.getElementById('customerZip').value.trim();

  if (!customerName || !customerPhone || !customerEmail || !customerAddress || !customerCity || !customerZip) {
    alert('Please fill in all required fields.');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const itemList = cart.map((item) => `- ${item.name} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`).join('\n');

  const mailSubject = encodeURIComponent('New Order from Vasundhara Electronics');
  const mailBody = encodeURIComponent(
    `Hello Vasundhara Electronics,\n\n` +
    `New Order Received!\n\n` +
    `=== CUSTOMER DETAILS ===\n` +
    `Name: ${customerName}\n` +
    `Phone: ${customerPhone}\n` +
    `Email: ${customerEmail}\n` +
    `Address: ${customerAddress}\n` +
    `City: ${customerCity}\n` +
    `Postal Code: ${customerZip}\n\n` +
    `=== ORDER ITEMS ===\n${itemList}\n\n` +
    `=== ORDER TOTAL ===\n` +
    `Subtotal: ${formatPrice(subtotal)}\n` +
    `Tax (18%): ${formatPrice(tax)}\n` +
    `Total Amount: ${formatPrice(total)}\n\n` +
    `Please confirm this order at your earliest convenience.`
  );

  window.location.href = `mailto:gd299231@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  setTimeout(() => {
    checkoutForm.reset();
    cart.length = 0;
    closeModal(checkoutModal);
    updateCart();
    alert('Thank you for your order! Order details have been sent to our email. We will contact you soon to confirm.');
  }, 500);
});

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

window.addEventListener('click', (event) => {
  if (event.target === cartModal) closeModal(cartModal);
  if (event.target === checkoutModal) closeModal(checkoutModal);
});

// Initialize
renderProducts();
updateCart();
