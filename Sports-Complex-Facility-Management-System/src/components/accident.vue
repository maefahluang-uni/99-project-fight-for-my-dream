<template>
  <div class="accident-page">
    <h1 class="heading">รายงานอุบัติเหตุ</h1>
    <div class="form-container">
      <label for="location" class="black-text">เลือกสถานที่:</label>
      <select id="location" v-model="selectedLocation" class="select-box">
        <option value="">เลือกสถานที่...</option>
        <option value="basketball">สนามบาสเกตบอล</option>
        <option value="badminton">สนามแบดมินตัน</option>
      </select>

      <label for="field" class="black-text">เลือกสนาม:</label>
      <select id="field" v-model="selectedField" class="select-box">
        <option value="">เลือกสนาม...</option>
        <template v-if="selectedLocation === 'basketball'">
          <option v-for="i in 4" :value="'Court ' + i">สนามบาสเกตบอล {{ i }}</option>
        </template>
        <template v-if="selectedLocation === 'badminton'">
          <option v-for="i in 4" :value="'Court ' + i">สนามแบดมินตัน {{ i }}</option>
        </template>
      </select>

      <label class="black-text">ระดับความเจ็บ:</label>
      <div class="pain-level-container">
        <label class="pain-level-label">
          <input type="checkbox" v-model="painLevels.minor" @change="checkOnlyOne('minor')">
          <span class="pain-level-text minor">ระดับเล็กน้อย</span>
        </label>
        <label class="pain-level-label">
          <input type="checkbox" v-model="painLevels.moderate" @change="checkOnlyOne('moderate')">
          <span class="pain-level-text moderate">ระดับปานกลาง</span>
        </label>
        <label class="pain-level-label">
          <input type="checkbox" v-model="painLevels.severe" @change="checkOnlyOne('severe')">
          <span class="pain-level-text severe">ระดับรุนแรง</span>
        </label>
      </div>

      <div v-if="painLevels.minor || painLevels.moderate || painLevels.severe" class="cause-container">
        <label for="cause" class="black-text">สาเหตุ:</label>
        <input type="text" id="cause" v-model="accidentCause" class="text-input">
      </div>

      <button @click="submitReport" class="submit-button">Submit</button>
    </div>

    <div v-if="reportSubmitted" class="confirmation-message">
      <p class="black-text">รายงานอุบัติเหตุเรียบร้อยแล้ว</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedLocation = ref('');
const selectedField = ref('');
const painLevels = ref({
  minor: false,
  moderate: false,
  severe: false
});
const accidentCause = ref('');
const reportSubmitted = ref(false);

function submitReport() {
  reportSubmitted.value = true;
}

function checkOnlyOne(level) {
  for (const key in painLevels.value) {
    if (key !== level) {
      painLevels.value[key] = false;
    }
  }
}
</script>

<style scoped>
.accident-page {
  text-align: center;
  margin-top: 60px;
}

.form-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-box,
.text-input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.confirmation-message {
  margin-top: 20px;
  font-weight: bold;
}

.pain-level-container {
  display: flex;
  margin-bottom: 10px;
}

.pain-level-label {
  margin-right: 10px;
}

.pain-level-text {
  padding: 3px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.minor {
  background-color: yellow;
}

.moderate {
  background-color: orange;
}

.severe {
  background-color: red;
}

.black-text {
  color: black;
}

.heading {
  color: black;
}
</style>
