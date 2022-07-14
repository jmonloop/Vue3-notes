const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputValue: "",
      isActive: true,
    };
  },
  watch: {},
  compute: {},
  methods: {
    addTask() {
      if (this.inputValue !== "") {
        this.tasks.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toggleList() {
      this.isActive = !this.isActive;
    },
  },
});

app.mount("#assignment");
