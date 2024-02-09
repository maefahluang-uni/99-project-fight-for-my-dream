<template>
  <div id="app">
    <div class="navbar">
    <button class="toggle-btn" @click="toggleTapbar">☰</button>
    <img src="./components/pics/logo.png" alt="Logo" class="logo">
    <div class="tapbar" :class="{ 'active': isTapbarOpen }">
      <router-link to="/home">Home</router-link>
      <router-link to="/schedule">Schedule</router-link>
      <router-link to="/accident">Accident</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isTapbarOpen = ref(false);

const toggleTapbar = () => {
  isTapbarOpen.value = !isTapbarOpen.value;
};
</script>

<style scoped>


.tapbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 120px;
  height: 100%;
  background-color: #183D69;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}

.tapbar.active {
  transform: translateX(0);
}

.tapbar a {
  color: white;
  text-decoration: none;
  margin: 10px 0;
  padding: 8px 16px;
  border: 2px solid transparent; /* เพิ่มเส้นขอบโปร่งใส */
  border-radius: 20px; /* เพิ่มขอบโค้ง */
  transition: border-color 0.3s ease; /* เพิ่มการเปลี่ยนสีเส้นขอบโปร่งใสเมื่อ hover */
}

.tapbar a:hover {
  text-decoration: underline;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: white; /* เปลี่ยนสีของเส้นขอบโปร่งใสเมื่อ hover */
}

.main-content {
  margin-left: 100px;
}

.toggle-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: transparent;
  color: black;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  z-index: 999;
}
.navbar {
  position: fixed; /* ตั้งค่าเป็น fixed เพื่อให้ navbar ติดกับด้านบนของหน้าจอ */
  top: 0; /* ตั้งค่าให้ navbar ติดกับด้านบนของหน้าจอ */
  background-color: #183D69;
  color: white;
  padding: 10px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  width: 100%; /* ตั้งค่าให้ navbar ขยายตามความกว้างของหน้าจอ */
  z-index: 999; /* ตั้งค่า z-index เพื่อให้ navbar อยู่ด้านบนของเนื้อหา */
  
}

.logo {
  width: auto; /* ปรับให้ความกว้างของโลโก้ปรับตามขนาดของรูป */
  height: 100%; /* ให้ความสูงของโลโก้เท่ากับความสูงของแถบนำทาง */
  max-height: 100%; /* ให้ความสูงของโลโก้ไม่เกินความสูงของแถบนำทาง */
  margin-right: 10px; /* ปรับขอบข้างของโลโก้ตามต้องการ */
}

</style>