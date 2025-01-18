<template>
    <header class="header">
        <div class="logo-container">
            <!-- <h1 class="title">Restaurant Management</h1> -->
        </div>
        <nav class="nav-bar">
            <!-- Home Link -->
            <router-link to="/" class="nav-link">Home</router-link>

            <!-- Dropdown for Signup/Login/Logout -->
            <div class="dropdown">
                <router-link to="/singup" class="nav-link">Signup</router-link>
                <div class="dropdown-content">
                    <router-link to="/login" class="nav-link">Login</router-link>
                    <a v-on:click="lougout" href="#">Logout</a>
                </div>
                <span class="dropdown-icon">▼</span> <!-- Changed to downward arrow -->
            </div>

            <!-- Center Align the Menu Links -->
            <div class="dropdown">
                <router-link to="/Restrant" class="nav-link">Menu</router-link>
                <div class="dropdown-content">
                    <router-link to="/addrest" class="nav-link">Healthy Food</router-link>
                    <router-link to="/addrest" class="nav-link">Jancly</router-link>
                    <router-link to="/updaterest" class="nav-link">Dessert</router-link>
                </div>
                <span class="dropdown-icon">▼</span> <!-- Changed to downward arrow -->
            </div>

            <!-- Dropdown for Restaurant Management -->
            <div class="dropdown">
                <router-link to="/Restrant" class="nav-link">Restrant</router-link>
                <div class="dropdown-content">
                    <router-link to="/addrest" class="nav-link">AddRestrant</router-link>
                    <router-link to="/updaterest" class="nav-link">UpdateRestrant</router-link>
                </div>
                <span class="dropdown-icon">▼</span> <!-- Changed to downward arrow -->
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponents',
    methods: {
        lougout() {
            localStorage.clear();
            this.$router.push({ name: 'login' });
        }
    }
}
</script>

<style scoped>
.header {
 
    justify-content: space-between;
    align-items: center;
    
    color: white;
}

.logo-container {
    display: flex;
    align-items: center;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.nav-bar {
    display: flex;
    justify-content: center;  /* Center-align the nav links */
    width: 100%;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 18px;
}

.nav-link:hover {
    text-decoration: underline;
    color: #DAA760;
    text-decoration: none;
}

/* Dropdown Menu Styles */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #000000;
    min-width: 160px;
    z-index: 1;
}

.dropdown-content .nav-link {
    display: block;
    padding: 10px;
    text-align: left;
}

.dropdown-content .nav-link:hover {
    background-color: #575757;
}

/* Dropdown Icon Style */
.dropdown-icon {
    font-size: 11px; /* Adjust size as needed */
    color: #DAA760;
    cursor: pointer;
    margin-left: 5px; /* Space between link and icon */
}
</style>
