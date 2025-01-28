<template>
  <div class="home">
    <HeaderComponent />
    
    <!-- Hero Section -->
    <section class="hero">
      <!-- <img src="../assets/cock.jpg" alt="" class="papper"> -->
      <div class="hero-content">

        <span class="subtitle">Welcome to</span>
        <h1>LUXE DINING</h1>
        <p class="tagline">A CULINARY JOURNEY OF TASTE AND ELEGANCE</p>
        <button class="primary-btn">Book A Table</button>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="about-content">
          <span class="section-subtitle">About Us</span>
          <h2>A Unique Culinary Experience</h2>
          <p>Discover a world of exquisite flavors and masterful culinary artistry at LUXE. Our passionate chefs create unforgettable dining experiences using the finest ingredients and innovative techniques.</p>
          <div class="features-grid">
            <div class="feature-item">
              <h3>Fresh Ingredients</h3>
              <p>We source only the finest local and seasonal ingredients</p>
            </div>
            <div class="feature-item">
              <h3>Expert Chefs</h3>
              <p>Our world-class culinary team brings years of expertise</p>
            </div>
            <div class="feature-item">
              <h3>Perfect Ambiance</h3>
              <p>Elegant atmosphere for an unforgettable dining experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Preview Section -->
    <section class="menu-preview">
      <div class="container">
        <span class="section-subtitle">Our Menu</span>
        <h2>Signature Dishes</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="menu-image">
              <img src="../assets/test.jpg" alt="Signature Dish">
            </div>
            <div class="menu-details">
              <h3>Main Course</h3>
              <p>Explore our carefully curated selection of main dishes</p>
            </div>
          </div>
          <div class="menu-item">
            <div class="menu-image">
              <img src="../assets/happy.jpg" alt="Appetizers">
            </div>
            <div class="menu-details">
              <h3>Appetizers</h3>
              <p>Start your meal with our delectable appetizers</p>
            </div>
          </div>
          <div class="menu-item">
            <div class="menu-image">
              <img src="../assets/ananadia.jpg" alt="Drinks">
            </div>
            <div class="menu-details">
              <h3>Beverages</h3>
              <p>Complement your meal with our signature drinks</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reservation Section -->
    <section class="reservation">
      <div class="container">
        <div class="reservation-content">
          <span class="section-subtitle">Reservations</span>
          <h2>Book Your Table</h2>
          <p>Join us for an unforgettable dining experience</p>
          <button class="primary-btn">Make a Reservation</button>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>LUXE DINING</h3>
            <p>123 Gourmet Street<br>Culinary District<br>Contact: (555) 123-4567</p>
          </div>
          <div class="footer-hours">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 11am - 11pm<br>Saturday - Sunday: 10am - 12am</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 LUXE Dining. Fardani All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponents.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
.papper{
  background-position: left;
}
.home {
  background-color: var(--background-color);
  color: var(--text-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('../assets/Эстетика.jpg') center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-position: right;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--primary-color);
  display: block;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

h1 {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 4px;
}

.tagline {
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

/* About Section */
.about {
  padding: 8rem 0;
  background-color: #1a1a1a;
}

.about-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.section-subtitle {
  color: var(--primary-color);
  font-size: 1.2rem;
  display: block;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.feature-item {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.feature-item h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

/* Menu Preview Section */
.menu-preview {
  padding: 8rem 0;
  background-color: #151515;
  text-align: center;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.menu-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-10px);
}

.menu-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.menu-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
}

/* Reservation Section */
.reservation {
  padding: 8rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('../assets/ana.jpg') center/cover fixed;
  text-align: center;
}

.primary-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background-color: var(--primary-color);
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.primary-btn:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
}

/* Footer */
.footer {
  background-color: #0f0f0f;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  
  .features-grid,
  .menu-grid,
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .menu-item {
    margin-bottom: 2rem;
  }
}
</style>