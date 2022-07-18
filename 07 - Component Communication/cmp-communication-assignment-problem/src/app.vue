<template>
  <active-user :username="username" :age="age" />
  <user-data @updateUserData="updateUserData" />
</template>

<script>
import ActiveUser from "./components/active-user.vue";
import UserData from "./components/user-data.vue";
export default {
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      username: "",
      age: 0,
    };
  },
  methods: {
    updateUserData(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>

<style></style>
