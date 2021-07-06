<template>
  <Navbar />
  <div class="hero-section">
    <div class="background-overlay">
      <div class="inner-container">
        <div class="left-section">
          <h1>
            Where is your favourite <span class="artist">artist</span> or
            <span class="song">song</span>
            charting in the world?
          </h1>
          <button>Let's Find Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Padauk", sans-serif;
}
.hero-section {
  background-image: url("../assets/heroBackground.png");
  background-size: cover;
  height: 95vh;
  width: 100%;
  position: relative;
  margin-top: -80px;
}
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    156.85deg,
    rgba(15, 5, 5, 0.87) -9.17%,
    rgba(0, 0, 0, 0.93) 34.75%,
    rgba(0, 0, 0, 0.79) 98.65%,
    rgba(0, 0, 0, 0.76) 98.65%
  );
}
.inner-container {
  color: #fff;
  max-width: 1200px;
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.inner-container .left-section {
  width: 58%;
}

.inner-container .left-section h1 {
  font-size: 72px;
  line-height: 76px;
  word-spacing: -0.2em;
  paint-order: stroke fill;
  -webkit-text-stroke: 1.2px #fff;
}

.left-section h1 .artist {
  color: #75f90d;
  -webkit-text-stroke: 1.2px #75f90d;
}

.left-section h1 .song {
  color: #e5dd19;
  -webkit-text-stroke: 1.2px #e5dd19;
}

.left-section button {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  padding: 24px 64px;
}
</style>
