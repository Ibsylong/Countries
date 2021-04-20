<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <p>{{ dataContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dataContent() {
      return this.$store.state.data;
    },
  },
};
</script>
