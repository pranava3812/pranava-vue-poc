<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <router-view></router-view>
    <!--This sidebar appears only for screens smaller than 992px-->
    <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
      <ul class="nav navbar-nav">
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown">
            <p>Home</p>
          </a>
        </li>
        <li>
          <a>
            <p>Test 1</p>
          </a>
        </li>
        <li>
          <a>
            <p>Test 2</p>
          </a>
        </li>
        <li>
          <a>
            <p>Test 3</p>
          </a>
        </li>
        <li>
          <a>
            <p>Test 4</p>
          </a>
        </li>
        <li class="divider"></li>
      </ul>
    </side-bar>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss"></style>
