<template>
  <div class="page home-page">
    <Sidebar />

    <div :class="['content-area', { 'min-sidebar': minSidebar }]">
      <Header />
      <div class="content">
        <h1>Home</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default {
  name: "home",

  components: {
    Sidebar,
    Header
  },

  computed: {
    minSidebar() {
      return this.$store.state.minSidebar;
    }
  }
};
</script>
