<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="navbar-right-menu">
        <ul class="nav navbar-nav navbar-right">
          <router-link v-for="(link,index) in TopBarLinksStore.topBarLinks" :to="link.path" tag="li" :ref="link.name">
            <a>
              <i :class="link.icon"></i>
              <p>{{link.name}}
              </p>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import TopBarLinksStore from '../../../stores/TopBarLinksStore'

  export default {
    computed: {
      routeName() {
        const { name } = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data() {
      return {
        TopBarLinksStore: TopBarLinksStore.data,
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown() {
        this.activeNotifications = false
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
