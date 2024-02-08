<template>
  <div class="card-container">
    <!-- First Card -->
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <img
            class="align-end text-white"
            src="https://www.pngarts.com/files/9/Commercial-Swimming-Pool-PNG-Image-Transparent.png"
          >
        </div>
        <div class="card-text">
          <div>สระว่ายน้ำ</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Add any setup logic specific to the home page
  
  </script>
  
  <style scoped>
  .home-page {
    text-align: center;
    margin-top: 60px;
  }
  
  h1 {
    color: #333;
  }
  </style>
  
=======

    <!-- Second Card -->
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <img
            src="https://i.postimg.cc/6QQ5r3wV/fitness.png"
            alt="Fitness"
          >
        </div>
        <div class="card-text">
          <div>ฟิตเนส</div>
        </div>
      </div>
    </div>

    <!-- Third Card -->
    <div class="card">
      <div class="card-content">
        <div class="card-image">
          <img
            src="https://i.postimg.cc/bw0fZjtx/image.png"
            alt="Other"
          >
        </div>
        <div class="card-text">
          <div>สนามอื่นๆ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped>
.card-container {
  margin-left: 500px;
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card {
  margin-left: 30px;
  background-color: #EAF4FF;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card-content {
  padding: 15px;
}

.card-image img {
  width: 80%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-text {
  color: black;
  text-align: center;
  margin-top:2px;
  font-size: 18px;
}
</style>

