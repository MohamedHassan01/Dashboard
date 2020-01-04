<template>
  <div>
    <v-app-bar dark color="#292D36" elevate-on-scroll hide-on-scroll class>
      <v-app-bar-nav-icon @click="toggleSidebar()"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggleFullscreen()">
        <v-icon ref="screenIcon" v-text="screenIcon"></v-icon>
      </v-btn>

      <v-menu bottom left offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" class="notifications-container">
            <div class="notifications-count">{{ notifications.length }}</div>
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>

        <v-list dark max-width="260" max-height="500">
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

      <v-menu bottom left offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon text class="user-btn">
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Mohamed" />
            </v-avatar>
          </v-btn>
        </template>

        <v-card dark max-width="250" flat>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Mohamed" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Mohamed Hassan</v-list-item-title>
                <v-list-item-subtitle>Front-End Developer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-icon left>mdi-face-profile</v-icon>My Account
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon left>mdi-settings</v-icon>Settings
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon left>mdi-help-circle-outline</v-icon>Suppprt
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon left>mdi-logout</v-icon>Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
let elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullScreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.msRequestFullScreen) {
    elem.msRequestFullScreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

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
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing."
      }
    ],

    screenIcon: "mdi-fullscreen"
  }),

  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },

    openNotification(noti) {
      console.log(noti.title);
    },

    toggleFullscreen() {
      if (this.screenIcon == "mdi-fullscreen") {
        this.screenIcon = "mdi-fullscreen-exit";
        openFullscreen();
      } else {
        this.screenIcon = "mdi-fullscreen";
        closeFullscreen();
      }
    }
  }
};
</script>
