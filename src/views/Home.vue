<template>
  <div class="page home-page">
    <Sidebar />

    <div :class="['content-area', { 'min-sidebar': minSidebar }]">
      <Header />
      <v-container>
        <div class="content">
          <PageHead :pageTitle="pageTitle" />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PageHead from "@/components/PageHead";

export default {
  name: "home",

  data: () => ({
    pageTitle: "Home"
  }),

  components: {
    Sidebar,
    Header,
    PageHead
  },

  computed: {
    minSidebar() {
      return this.$store.state.minSidebar;
    }
  }
};
</script>
