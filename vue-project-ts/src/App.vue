<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="grey-darken-3"></v-system-bar> -->


      <v-navigation-drawer color="grey-darken-1" permanent width="150" v-model="drawer" temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list></v-navigation-drawer>



      <v-app-bar color="grey" height="48" flat>
        <v-app-bar-nav-icon @click="drawer = !drawer" icon="mdi-menu-open"></v-app-bar-nav-icon>

      </v-app-bar>


      <v-main>
        <v-container style="min-height: 100vh;">
          <router-view></router-view>
        </v-container>
      </v-main>
      <!-- <v-app-bar color="grey-lighten-2" flat height="48" location="bottom"></v-app-bar> -->
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>