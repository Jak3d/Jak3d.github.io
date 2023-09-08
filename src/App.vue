<template>
  <span style="background-color: aquamarine;">
    <router-link to="/" @click="setActivePage('Home')">
      <h1 class="title is-1">Leonardo Marro</h1>
    </router-link>


    <transition>
      <div class="tabs is-centered  is-boxed is-medium">
        <ul>
          <!-- <li @click="goHome" :class="[activePage === 'Home' ? 'is-active': '']"><a>Pictures</a></li> -->

          <li @click="setActivePage('Projects')" :class="[activePage === 'Projects' ? 'is-active' : '']">
            <router-link to="/Projects"><font-awesome-icon icon="fa-solid fa-diagram-project" />&zwnj; Projects</router-link>
          </li>
          <li @click="setActivePage('Home')" :class="[activePage === 'Home' ? 'is-active' : '']">
            <router-link to="/"><font-awesome-icon icon="fa-solid fa-user" />&zwnj; About</router-link>
          </li>
          <li @click="setActivePage('CV')" :class="[activePage === 'CV' ? 'is-active' : '']">
            <router-link to="/CV"><font-awesome-icon icon="fa-solid fa-book" />&zwnj; CV </router-link>
          </li>

        </ul>
      </div>
    </transition>


    <transition>
      <div>
        <router-view :actualPosition="[oldPosition === 'right' ? 'left' : 'right;background-color: #0c1821;']" :activePageFromParent="this.activePage"></router-view>

        <body v-if="activePage === 'Home'">
          <div style="border-style: inset; border-color: grey;  text-align: center; margin-left: 25%; margin-right: 25%;">
            <div class="level-item has-text-centered">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-256x256">
                    <img src="./FotoProfiloLeo.png" width="256" height="256"  >
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p><br>
                      I am Leonardo Marro, currently a Bachelor's student at UniTo in Computer Science, where I can explore
                      my interest in Artificial Intelligence applied to object detection.
                      <br>
                      I'm currently working on an AI powered security system that alerts authorities when detecting potential threats.
                      <br>
                      I'm continously looking to broaden my range of known languages, frameworks and libraries.
                      <br>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <br>
          <div style="top: 10px;">
            <p>
          <a href="https://it.linkedin.com/in/leonardo-marro" style="color: black;"><font-awesome-icon icon="fa-brands fa-linkedin" size="4x"/></a> &nbsp;
          <a href="https://github.com/Jak3d" style="color: black;"><font-awesome-icon icon="fa-brands fa-github" size="4x"/></a> &nbsp;
        </p>
          </div>
        </body>
      </div>
    </transition>
    
  </span>
  <div style="position: fixed; bottom: 0px; width: 100%; height:20px ;">
  <footer class="footer" :style="[this.activePage !== 'Home' ? ' clear: both;width 100%;' : ' clear: both; width=100%; ']">
    <div class="content has-text-centered">
    </div>
  </footer>
</div>
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
