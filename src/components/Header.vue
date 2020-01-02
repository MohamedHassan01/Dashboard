<template>
  <div>
    <v-app-bar
      dark
      color="#25294A"
      dense
      elevate-on-scroll
      hide-on-scroll
    >
      <v-app-bar-nav-icon @click="toggleSidebar()"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'header',

  methods: {
    toggleSidebar() {
      this.$store.commit('toggleSidebar');
    }
  }
}
</script>
