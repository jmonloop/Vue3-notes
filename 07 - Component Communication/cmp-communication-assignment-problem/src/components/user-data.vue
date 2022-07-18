<template>
  <label for="username">Username: </label>
  <input type="text" name="username" v-model="username" />
  <label for="age">Age: </label>
  <input type="number" v-model="age" @keyup.enter="submitData"/>
  <button @click="$emit('updateUserData', username, age)">
    Update User Data
  </button>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: null,
    };
  },
  methods:{
    submitData(){
        this.$emit('updateUserData', this.username, this.age)
        this.username = '';
        this.age = null;
    }
  },
  emits:['update-user-data']
};
</script>
