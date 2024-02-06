<template>
  <div class="login-page">
    <form @submit.prevent="login">
      <label for="username" class="black-text">Username: (admin)</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password" class="black-text">Password: (1234)</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit" class="black-text">Login</button>
    </form>

    <p v-if="errorMessage" style="color: red;" class="black-text">{{ errorMessage }}</p>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const login = () => {
    // Your login logic here
    // For example, if login is successful, navigate to home page
    if (username.value === 'admin' && password.value === '1234') {
      router.push('/home'); // Change '/home' to your desired home route
    } else {
      errorMessage.value = 'Invalid username or password';
    }
  };
  </script>
  
  <style scoped>

.black-text {
  color: black;
}
  .login-page {
    text-align: center;
    margin-top: 60px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input {
    margin-bottom: 16px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  