<template>
  <div v-if="true"> <!-- !isMobile()-->
    <span id="mainPage">
      <router-link to="/" @click="setActivePage('Home')">
        <h1 class="title is-1">Leonardo Marro</h1>
      </router-link>


      <transition>
        <div class="tabs is-centered  is-boxed is-medium">
          <ul>
            <!-- <li @click="goHome" :class="[activePage === 'Home' ? 'is-active': '']"><a>Pictures</a></li> -->

            <li @click="goTo('Projects'), setActivePage('Projects'), updWhere('Projects')" :class="[activePage === 'Projects' ? 'is-active' : '']">
              <a href="#"><font-awesome-icon icon="fa-solid fa-diagram-project" />&zwnj; Projects</a>
              <!--  <router-link :to="{ path: '/Profile/' + 'Projects' }"></router-link>-->
            </li>
            <li @click="setActivePage('Home'), updWhere('')" :class="[activePage === 'Home' ? 'is-active' : '']">
              <router-link to="/Profile"><font-awesome-icon icon="fa-solid fa-user" />&zwnj; About</router-link>
            </li>
            <li @click="goTo('CV'), setActivePage('CV'), updWhere('CV')" :class="[activePage === 'CV' ? 'is-active' : '']">
              <a href="#"><font-awesome-icon icon="fa-solid fa-book" />&zwnj; CV</a>
              <!-- <router-link :to="{ path: '/Profile/' + 'CV'   }"></router-link>-->
            </li>

          </ul>
        </div>
      </transition>


      <transition name="fade">
        <div v-if="!exiting">
          <router-view v-slot="{ Component }">
            <transition :name="transitionName" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>

        </div>
      </transition>
    </span>
    <div style="position: fixed; bottom: 0px; width: 100%; height:20px ;">
      <footer class="footer" :style="[this.activePage !== 'Home' ? ' clear: both;width 100%;' : ' clear: both; width=100%; ']">
        <!--Se si rimuove non funziona più niente, non so come, non so perché, non toccare-->
        <div class="content has-text-centered">
        </div>
      </footer>
    </div>
  </div>
  <div v-if="false"> <!-- isMobile()-->
    <h1 class="title is-1">
      Leonardo Marro
    </h1>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  props: ['fromWhere'],
  name: "App",
  components: {


  },
  setup() {

    const currentRoute = useRoute();
    const transitionName = ref('fade');

    watch(
      () => currentRoute.path,
      (to, from) => {
        console.log(transitionName.value);
        console.log('Current Route:', currentRoute.name);
        console.log('To:', to, 'From:', from); // Log the names of the routes.
        // Example of setting transitionName based on specific routes
        if (from === '/Profile' && to === '/Profile/CV') {
          transitionName.value = 'slide-fade2';
          console.log('Going to CV');
        }
        else if (from === '/Profile' && to === '/CV') {
          transitionName.value = 'slide-fade';
        } else if (from === '/Profile' && to === '/Projects') {
          transitionName.value = 'slide-fade2';
        } else if (from === '/Projects' && to === '/Profile') {
          transitionName.value = 'slide-fade';
        } else if (from === '/CV' && to === '/Profile') {
          transitionName.value = 'slide-fade2';
        } else if (from === '/Profile/CV' && to === '/CV') {
          transitionName.value = 'slide-fade';
        } else if (from === '/Projects' && to === '/CV') {
          transitionName.value = 'slide-fade';
        } else if (from === '/CV' && to === '/Projects') {
          transitionName.value = 'slide-fade2';
        } else if (from === '/Profile/Projects' && to === '/Projects') {
          transitionName.value = 'slide-fade2';
        } else {
          console.log('Default');
          transitionName.value = 'fade'; // Fallback transition
        }
      },
    );


    return { transitionName };
  },

  data() {
    return {
      activePage: "Home",
      oldPosition: "left",
      borderColor: "gray",
      mainBGColor: "white",
      exiting: true,
      whereTo: "Home",
      dest: "",
    };
  },
  created() {

    window.addEventListener("transitionend", () => {
      console.log(this.whereTo);
      if (this.whereTo == "CV") {
        console.log('In');
        this.jumpTo("CV");
      } else if (this.whereTo == "") {
        console.log('In');
        this.jumpTo("/");
      } else if (this.whereTo == "Projects") {
        console.log('In');
        this.jumpTo("Projects");
      }
    });
    window.addEventListener('load', () => {
      this.$router.replace({ path: '/Profile' })
      this.exiting = false;
    })
    window.addEventListener('beforeunload', () => {
      this.exiting = true;
    })
    //this.$router.push(`/${this.activePage}`) 
  },

  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    updWhere(dest) {
      this.whereTo = dest;
    },
    setActivePage(Page) {
      this.activePage = Page;
    },
    goHome() {
      this.activePage = "Home";
    },
    jumpTo(whereTo) {

      this.$router.replace({ path: '/' + whereTo });
    },
    goTo(dest) {
      if (dest == 'CV' && this.activePage == 'Home') {
        this.$router.replace({ path: '/CV' })
      } else if (dest == 'CV' && this.activePage == 'Projects') {
        this.$router.replace({ path: '/CV' })
      } else if (dest == 'Projects' && this.activePage == 'CV') {
        this.$router.replace({ path: '/Projects' })
      } else if (dest == 'Projects' && this.activePage == 'Home') {
        this.$router.replace({ path: '/Projects' })
      }
    }

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

#profileBox {
  border-style: inset;
  border-color: v-bind('borderColor');
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
}

#mainPage {
  background-color: v-bind('mainBGColor');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;

}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(-1750px);
  opacity: 0;
}


.slide-fade2-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade2-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade2-enter-from {
  transform: translateX(-1750px);
  opacity: 1;
}

.slide-fade2-leave-to {
  transform: translateX(1750px);
  opacity: 0;
}
</style>
