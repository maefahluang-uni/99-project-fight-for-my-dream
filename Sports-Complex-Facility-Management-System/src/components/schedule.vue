<template>
  <div class="schedule-page">
    <h1>Welcome to the Schedule Page</h1>
    
    <div class="padding-50">
      <VueTable :headers="header" :data="data" :keys="keys" :editable="editMode" @updateData="updateData" @editRow="editRow" @deleteRow="deleteRow" />
    </div>

    <div>
      <button @click="toggleEditMode">{{ editMode ? 'Save' : 'Edit' }}</button>
    </div>
  </div>
</template>

<script setup>
import { VueTable } from "@harv46/vue-table";
import "@harv46/vue-table/dist/style.css";

const header = ["Name", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const keys = ["name", "monday", "tuesday", "wednesday", "thursday", "friday"];

let data = [
  { name: "Basketball Court", monday: "LADA YODPHOSRI", tuesday: "VITSARUT LIMKARNJANAWAT", wednesday: "LADA YODPHOSRI", thursday: "THANATPORN RATTANARODJANAKUL", friday: "LADA YODPHOSRI" },
  // Add more data as needed
];

let editMode = false;
let editedRowIndex = -1;

const toggleEditMode = () => {
  if (editMode) {
    // Save changes when exiting edit mode
    editedRowIndex = -1;
  } else {
    // Reset editedRowIndex when entering edit mode
    editedRowIndex = -1;
  }
  editMode = !editMode;
};

const updateData = (updatedData) => {
  data = [...updatedData];
};

const editRow = (index, editedRow) => {
  if (editMode) {
    // Save changes when clicking "Edit" again
    if (editedRowIndex !== -1) {
      data.splice(editedRowIndex, 1, editedRow);
      editedRowIndex = -1;
    }
  } else {
    // Enter edit mode when clicking "Edit" for the first time
    editedRowIndex = index;
  }
};

const deleteRow = (index) => {
  data.splice(index, 1);
};
</script>

<style scoped>
.schedule-page {
  text-align: center;
  margin-top: 60px;
}

button {
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  font-family: inherit;
  font-size: 18px;
  background-image: linear-gradient(130deg, #7d2923, #bd8f5d);
  background-size: 300% 100%;
  box-shadow: 0 3px 10px rgba(160, 46, 39, 0.2);
  color: #fff;
  transition: all 0.3s;
  cursor: pointer;
}

h1 {
  color: #333;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: inherit;
  font-size: 24px;
}

.padding-50 {
  padding: 50px;
}
</style>
