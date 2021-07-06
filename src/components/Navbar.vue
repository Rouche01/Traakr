<template>
  <div class="navbar">
    <div class="inner-container">
      <h2 class="logo">traakr</h2>
      <ul>
        <li><a href="#">Signup</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  height: 80px;
  position: relative;
  z-index: 4;
  color: #fff;
}

.inner-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 36px;
}

.inner-container ul {
  display: flex;
  list-style: none;
}

.inner-container ul li {
  margin-left: 45px;
}

.inner-container ul li a {
  font-weight: 700;
  text-decoration: none;
  font-size: 19px;
  color: #fff;
}
</style>
