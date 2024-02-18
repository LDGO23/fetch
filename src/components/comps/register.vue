<template>
      <div class="registro">
    <h2>Registro</h2>
    <form @submit.prevent="sumit" class="user-table">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="userData.name" placeholder="Ingrese su nombre" required>

      <label for="lastname">Apellido:</label>
      <input type="text" id="lastname" v-model="userData.lastname" placeholder="Ingrese su apellido" required>

      <label for="age">Edad:</label>
      <input type="text" id="age" v-model="userData.age" placeholder="Ingrese su edad" required>

      <label for="phone">Teléfono:</label>
      <input type="text" id="phone" v-model="userData.phone" placeholder="Ingrese su teléfono" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="userData.email" placeholder="Ingrese su correo electrónico" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="userData.password" placeholder="Ingrese su contraseña" required>

      <button type="submit">Registrar</button>
    </form>
  </div>
</template>
  
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ComponentData from '@/data/ComponetData';
  
  const userData = ref({
    id: 0,
    name: '',
    lastname: '',
    age: '',
    phone: '',
    email: '',
    password: ''
  });
  

  const sumit = () => {
    const exists = ComponentData.some(user => user.email === userData.value.email);
  
    if (exists) {
        alert('Este correo ya está registrado.');
    } else {
        console.log('Datos de usuario a registrar:', userData.value);
    }
  };
  </script>
  <style scoped>
  .registro{
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
  