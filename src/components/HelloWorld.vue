<script setup lang="ts">
import { ref } from "vue";
type Person = {
  name: string;
  age: number;
  dateOfBirth: string;
};
defineProps<{ msg: string }>();
// import VITE_APP_NAME from env.local
const users = ref<Person[]>([
  {
    name: "John Doe",
    age: 20,
    dateOfBirth: "2000-01-01",
  },
  {
    name: "Jane Doe",
    age: 20,
    dateOfBirth: "2001-01-01",
  },
]);

// create a value for formatting date of birth every time user.dateOfBirth changed
</script>

<template>
  <!-- display all users -->
  <div class="font-poppins container mx-auto">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="user in users" :key="user.name">
        {{ user.name }} is {{ user.age }} years old, born on
        {{ user.dateOfBirth }}
      </li>
    </ul>
  </div>
  <pre></pre>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
