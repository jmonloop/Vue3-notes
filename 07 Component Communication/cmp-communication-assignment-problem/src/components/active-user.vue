<template>
  <div v-if="username !== undefined && age !== 0">
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
  </div>
  <div v-else>
    <h3>There is not user data yet</h3>
  </div>
</template>

<script>
export default {
  props: ["username", "age"],
};
</script>
