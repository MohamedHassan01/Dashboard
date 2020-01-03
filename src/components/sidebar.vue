<template>
  <div :class="['sidebar', { 'min-sidebar': minSidebar }]">
    <div class="logo font-weight-black">Speed</div>

    <ul class="links-area list-unstyle">
      <li v-for="(item, i) in items" :key="i">
        <router-link :to="item.router" ref="link">
          <v-icon left v-text="item.icon"></v-icon>
          <span class="link-text">{{ item.text }}</span>
          <v-icon
            small
            right
            v-if="item.options"
            @click.prevent
            class="arrow-icon"
          >mdi-arrow-down-drop-circle</v-icon>
        </router-link>

        <ul class="child-links" ref="childLinks" v-if="item.options">
          <li v-for="(child, i) in item.childLinks" :key="i">
            <router-link :to="child.router">
              <v-icon left v-text="child.icon"></v-icon>
              <span class="link-text">{{ child.text }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      { text: "Dashboard", icon: "mdi-view-dashboard-outline", router: "/" },
      {
        text: "Forms",
        icon: "mdi-view-dashboard",
        router: "/forms",
        options: true,
        childLinks: [
          { text: "Input", icon: "mdi-view-dashboard", router: "/forms/input" },
          {
            text: "Textarea",
            icon: "mdi-view-dashboard",
            router: "/forms/textarea"
          },
          {
            text: "Checkbox",
            icon: "mdi-view-dashboard",
            router: "/forms/checkbox"
          },
          { text: "Radio", icon: "mdi-view-dashboard", router: "/forms/radio" }
        ]
      },
      {
        text: "Charts",
        icon: "mdi-view-dashboard",
        router: "/charts",
        options: true,
        childLinks: [
          {
            text: "Users",
            icon: "mdi-view-dashboard",
            router: "/charts/users"
          },
          {
            text: "Clients",
            icon: "mdi-view-dashboard",
            router: "/charts/clients"
          }
        ]
      }
    ]
  }),

  mounted() {
    let arrowIcons = document.querySelectorAll(".arrow-icon");

    arrowIcons.forEach(a => {
      a.addEventListener("click", () => {
        let childLink = a.parentElement.nextElementSibling;

        if (!childLink.style.height || childLink.style.height == 0 + "px") {
          childLink.style.height = `${childLink.scrollHeight}px`;
          a.classList.add("down"); // To rotate arrow icon
        } else if (childLink.style.height) {
          childLink.style.height = 0;
          a.classList.remove("down");
        }
      });
    });
  },

  computed: {
    minSidebar() {
      return this.$store.state.minSidebar;
    }
  }
};
</script>
