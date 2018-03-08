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
        <!--<router-link v-for="(link, index) in sidebarLinks" :to="link.path" tag="li" :ref="link.name">-->

        <ul class="nav navbar-nav navbar-right">
          <router-link v-for="(link,index) in sidebarLinks" :to="link.path" tag="li" :ref="link.name">
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
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        sidebarLinks: [
          {
            name: 'Home',
            icon: 'ti-panel',
            path: '/admin/overview'
          },
          {
            name: 'Test 1',
            icon: 'ti-user',
            path: '/admin/stats'
          },
          {
            name: 'Test 2',
            icon: 'ti-view-list-alt',
            path: '/admin/table-list'
          },
          {
            name: 'Test 3',
            icon: 'ti-text',
            path: '/admin/typography'
          },
          {
            name: 'Test 4',
            icon: 'ti-pencil-alt2',
            path: '/admin/icons'
          }
        ],
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
