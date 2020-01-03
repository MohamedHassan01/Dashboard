<template>
  <div>
    <v-app-bar dark color="#25294A" dense elevate-on-scroll hide-on-scroll>
      <v-app-bar-nav-icon @click="toggleSidebar()"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <div class="notifications-count">{{ notifications.length }}</div>
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>

        <v-list
          dark
          max-width="260"
          max-height="500"
        >
          <div class="noti-head">
            <span>Notifications</span>
          </div>

          <v-list-item
            v-for="(noti, i) in notifications"
            :key="i"
            three-line
            @click="openNotification(noti)"
          >
            <v-icon left v-text="noti.icon"></v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ noti.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ noti.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <div class="noti-footer">
            <a href="/">View all notifications</a>
          </div>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "header",

  data: () => ({
    notifications: [
      {
        title: "First notification",
        icon: "mdi-face-agent",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Second notification",
        icon: "mdi-face-profile",
        description: "Lorem ipsum dolor sit amet consectetur."
      },
      {
        title: "Third notification",
        icon: "mdi-face-agent",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing."
      },
      {
        title: "Fourd notification",
        icon: "mdi-face-profile",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing."
      }
    ]
  }),

  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },

    openNotification(noti) {
      console.log(noti.title)
    }
  }
};
</script>
