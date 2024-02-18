<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="submit" class="user-table">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="userCredentials.email" required>
  
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="userCredentials.password" required>
  
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ComponentData from '@/data/ComponetData';
  
  const userCredentials = ref({
    email: '',
    password: ''
  });
  
  const submit = () => {
    const user = ComponentData.find(user => user.email === userCredentials.value.email);
  
    if (user && user.password === userCredentials.value.password) {
      alert('Tienes acceso. ¡Bienvenido!');
    } else {
      alert('No tienes acceso. Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };
  </script>
  
  <style scoped>
  .login {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 20px;
  }
  </style>
  