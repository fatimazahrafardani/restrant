<template>
    <header class="header">
        <div class="logo-container">
            <img src="../assets/pngo.png" alt="Restaurant Logo" class="logo">
            <h1 class="title">Restaurant Management</h1>
        </div>
        <nav class="nav-bar">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/singup" class="nav-link">Singup</router-link>
            <router-link to="/login" class="nav-link">Login</router-link>
            <router-link to="/addrest" class="nav-link">AddRestrant</router-link>
            <router-link to="/updaterest" class="nav-link">UpdateRestrant</router-link>
            <a v-on:click="lougout"  href="#">Lougout</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponents',
    methods:{

        lougout(){
            localStorage.clear();
            this.$router.push({name: 'login'});
            }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #600000;
    color: white;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.nav-bar {
    display: flex;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 18px;
}

.nav-link:hover {
    text-decoration: underline;
}
</style>
