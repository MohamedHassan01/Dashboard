<template>
  <div class="page home-page">
    <Sidebar />

    <div class="content-area">
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";

export default {
  name: "home",

  components: {
    Sidebar
  }
};
</script>
