<template>
  <li>
    <BaseCard>
      <template v-slot:default>
        <div>
          <header>
            <h3>{{ title }}</h3>
            <button>Delete</button>
          </header>
        </div>
        <p>{{ description }}</p>
        <nav>
          <a :href="link">View Resource</a>
        </nav>
      </template>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from '../base/BaseCard.vue';
export default {
  props: ['title', 'description', 'link'],
  components: {
    BaseCard,
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
