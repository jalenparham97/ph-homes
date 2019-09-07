<template>
  <div class="navbar">
    <md-toolbar md-elevation="0" class="nav">
      <img
        src="../assets/img/ph-logo.png"
        alt="P & H Real Estate Solutions"
        class="logo"
        @click="changePage('/', 'home')"
      />
      <div class="md-toolbar-section-end">
        <md-button
          v-for="(item, i) in menu"
          :key="i"
          @click="changePage(item.to, item.page)"
          class="nav-link"
          :class="activePage === item.page ? 'active-page' : ''"
        >{{ item.page }}</md-button>
        <md-button @click="showNavigation = true" class="md-icon-button nav-menu">
          <md-icon class="menu-icon md-accent">
            <i class="fas fa-bars"></i>
          </md-icon>
        </md-button>
      </div>
    </md-toolbar>

    <md-app-drawer :md-active.sync="showNavigation" :md-elevation="1">
      <md-list>
        <md-list-item v-for="(item, i) in menu" :key="i" @click="changePage(item.to)">
          <md-icon class="link-icon">
            <i :class="item.icon"></i>
          </md-icon>
          <span class="md-list-item-text">{{ item.page }}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["activePage", "menu", "go"],
  data: () => ({
    showNavigation: false
  }),
  methods: {
    changePage(to, page) {
      this.showNavigation = false;
      this.go(to, page);
    }
  }
};
</script>

<style lang="scss" scoped>
// Colors
// #C82027 Red
// #051B3B Blue
$primary-color: #c82027;
$accent-color: #051b3b;

// Navigation transparent
.md-toolbar.nav {
  background: #eee;
  padding: 10px 20px;
  border-top: 3px solid $primary-color;
}

.logo {
  width: 140px;
  cursor: pointer;
}

button.nav-link {
  color: $accent-color;
  margin-left: 10px;

  &:hover {
    background: $primary-color;
    color: #fff;
  }
}

.nav-menu {
  display: none;
}

.md-list-item-text {
  font-size: 1rem;
}

.active-page {
  background: $primary-color;
  color: #fff !important;
}

@media only screen and (max-width: 746px) {
  .nav-link {
    display: none;
  }

  .nav-menu {
    display: block;
  }
}
</style>
