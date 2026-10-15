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
    price: 349,
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
const razorpayBtn = document.getElementById('razorpayBtn');

// product modal elements
const productModal = document.getElementById('productModal');
const closeProduct = document.getElementById('closeProduct');
const productDetail = document.getElementById('productDetail');

function formatPrice(value) {
  return `₹${value.toLocaleString('en-IN')}`;
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getOrderTotal() {
  return getCartTotal();
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
    button.addEventListener('click', (e) => {
      // prevent triggering card click handler when button clicked
      e.stopPropagation();
      addToCart(Number(button.dataset.id));
    });
  });
}

/* Modified addToCart to accept quantity (default 1) */
function addToCart(productId, qty = 1) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ ...product, quantity: qty });
  }

  updateCart();
  openModal(cartModal);
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
      <div style="display:flex; gap:12px; align-items:center;">
        <img src="${item.image}" alt="${item.name}" style="width:64px; height:64px; object-fit:cover; border-radius:8px;"/>
        <div>
          <h4 style="margin:0 0 6px;">${item.name}</h4>
          <div style="display:flex; gap:8px; align-items:center;">
            <button class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
            <span class="qty">${item.quantity}</span>
            <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
          </div>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
        <span class="price">${formatPrice(item.price * item.quantity)}</span>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(Number(button.dataset.id)));
  });

  document.querySelectorAll('.qty-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const action = btn.dataset.action;
      changeQuantity(id, action === 'increase' ? 1 : -1);
    });
  });

  const subtotal = getCartTotal();
  const tax = 0;
  const total = subtotal + tax;

  subtotalEl.textContent = formatPrice(subtotal);
  taxEl.textContent = formatPrice(tax);
  totalEl.textContent = formatPrice(total);
  finalTotalEl.textContent = formatPrice(total);
}

function changeQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  updateCart();
}

function openModal(modal) {
  if (modal) modal.classList.add('open');
}

function closeModal(modal) {
  if (modal) modal.classList.remove('open');
}

/* Open product detail modal */
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  productDetail.innerHTML = `
    <div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
      <div style="flex:0 0 320px; max-width:320px;">
        <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:12px; object-fit:cover;">
      </div>
      <div style="flex:1; min-width:220px;">
        <h3 id="productTitle" style="margin-top:0">${product.name}</h3>
        <p style="color:var(--muted)">${product.description}</p>
        <p style="font-weight:800; font-size:1.25rem; margin:12px 0; color:var(--primary-dark)">${formatPrice(product.price)}</p>

        <div style="display:flex; gap:8px; align-items:center; margin-bottom:12px;">
          <label style="font-weight:600">Quantity:</label>
          <button id="pd-decrease" class="qty-btn">-</button>
          <span id="pd-qty">1</span>
          <button id="pd-increase" class="qty-btn">+</button>
        </div>

        <div style="display:flex; gap:10px; margin-top:8px;">
          <button id="pd-add" class="shop-btn">Add to cart</button>
          <button id="pd-buy" class="checkout-btn">Buy Now</button>
        </div>
      </div>
    </div>
  `;

  // quantity controls
  let pdQty = 1;
  const qtyEl = productDetail.querySelector('#pd-qty');
  productDetail.querySelector('#pd-decrease').addEventListener('click', () => {
    if (pdQty > 1) { pdQty--; qtyEl.textContent = pdQty; }
  });
  productDetail.querySelector('#pd-increase').addEventListener('click', () => {
    pdQty++; qtyEl.textContent = pdQty;
  });

  // Add to cart from modal
  productDetail.querySelector('#pd-add').addEventListener('click', () => {
    addToCart(productId, pdQty);
    closeModal(productModal);
    openModal(cartModal);
  });

  // Buy now -> add and open checkout
  productDetail.querySelector('#pd-buy').addEventListener('click', () => {
    addToCart(productId, pdQty);
    closeModal(productModal);
    closeModal(cartModal);
    openModal(checkoutModal);
  });

  openModal(productModal);
  // scroll modal to top
  const modalContent = productModal.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
}

if (closeProduct) closeProduct.addEventListener('click', () => closeModal(productModal));

/* Attach click handler to product cards so clicking the card (not the internal button) opens modal */
function attachProductCardHandlers() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // ignore if clicked on a button or link inside the card (so Add to cart still works)
      if (e.target.closest('button') || e.target.closest('a')) return;
      const btn = card.querySelector('.product-btn');
      if (!btn) return;
      const id = Number(btn.dataset.id);
      openProductModal(id);
    });
  });
}

function openRazorpayWithCustomer(customer = {}) {
  const subtotal = getCartTotal();
  if (subtotal <= 0) {
    alert('Your cart is empty. Please add products first.');
    return;
  }

  const tax = 0;
  const total = subtotal + tax;
  const amountPaise = Math.round(total * 100);

  const options = {
    key: 'rzp_test_ToIYRn9AGYATrV',
    amount: amountPaise,
    currency: 'INR',
    name: 'Vasundhara Electronics',
    description: 'Order Payment',
    prefill: {
      name: customer.name || '',
      email: customer.email || '',
      contact: customer.phone || ''
    },
    theme: { color: '#F97316' },
    handler: function (response) {
      const itemList = cart.map((item) => `- ${item.name} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`).join('\n');
      const mailSubject = encodeURIComponent('Paid Order - Vasundhara Electronics');
      const mailBody = encodeURIComponent(
        `Payment ID: ${response.razorpay_payment_id}\n\n` +
        `Customer: ${customer.name}\nPhone: ${customer.phone}\nEmail: ${customer.email}\n\n` +
        `Items:\n${itemList}\n\n` +
        `Total: ${formatPrice(total)}`
      );

      window.location.href = `mailto:gd299231@gmail.com?subject=${mailSubject}&body=${mailBody}`;
      setTimeout(() => {
        checkoutForm.reset();
        cart.length = 0;
        closeModal(checkoutModal);
        updateCart();
      }, 400);
    }
  };

  const razorpay = new Razorpay(options);
  razorpay.open();
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

  closeModal(checkoutModal);
  openRazorpayWithCustomer({
    name: customerName,
    phone: customerPhone,
    email: customerEmail
  });
});

if (razorpayBtn) {
  razorpayBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add products first.');
      return;
    }
    closeModal(cartModal);
    openModal(checkoutModal);
  });
}

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

window.addEventListener('click', (event) => {
  if (event.target === cartModal) closeModal(cartModal);
  if (event.target === checkoutModal) closeModal(checkoutModal);
  if (event.target === productModal) closeModal(productModal);
});

// initial render and handlers
renderProducts();
attachProductCardHandlers();
updateCart();
