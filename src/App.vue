<template>
  <router-link to="/" @click="setActivePage('Home')"><h1  class="title is-1">Leonardo Marro</h1></router-link>
  

  <transition>
    <div class="tabs is-centered  is-boxed is-medium">
      <ul>
        <!-- <li @click="goHome" :class="[activePage === 'Home' ? 'is-active': '']"><a>Pictures</a></li> -->
        
        <li
          @click="setActivePage('Projects')"
          :class="[activePage === 'Projects' ? 'is-active' : '']"
        >
          <router-link to="/Projects"><font-awesome-icon icon="fa-solid fa-diagram-project" />&zwnj; Projects</router-link>
        </li>
        <li @click="setActivePage('Home')" :class="[activePage === 'Home' ? 'is-active' : '']">
          <router-link to="/"><font-awesome-icon icon="fa-solid fa-user" />&zwnj; About</router-link>
        </li>
        <li
          @click="setActivePage('CV')"
          :class="[activePage === 'CV' ? 'is-active' : '']"
        >
          <router-link to="/CV"><font-awesome-icon icon="fa-solid fa-book" />&zwnj; CV  </router-link>
        </li>
        
      </ul>
    </div>
  </transition>
  <router-view
    :actualPosition="[oldPosition === 'right' ? 'left' : 'right']"
    :activePageFromParent="this.activePage"
  ></router-view>
  <transition>
    <body v-if="activePage === 'Home'">
      <div
      :style="[
          oldPosition === 'right'
            ? 'text-align: centre; width: 50%; padding-left: 70px'
            : 'text-align: centre; width: 50%; float:right',
        ]"
      >
        <h1 class="title">Ciao ?</h1>
       
        <h1>
          TESTO PERSONALE
        </h1>
      </div>
    </body>
  </transition>
  <footer class="footer" :style="[this.activePage !== 'Home' ? 'bottom:3px ; clear: both;width 95%;' :'bottom:3px ; clear: both' ]">
    
    <div class="content has-text-centered">
    
      <router-link to="/Appunti" @click="setActivePage(Appunti)"> Appunti Personali</router-link>
    
  </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      activePage: "Home",
      oldPosition: "left",
    };
  },
  created() {
    
    //this.$router.push(`/${this.activePage}`) 
  },
  methods: {
    setActivePage(Page) {
      this.activePage = Page;
    },
    goHome() {
      this.activePage = "Home";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
