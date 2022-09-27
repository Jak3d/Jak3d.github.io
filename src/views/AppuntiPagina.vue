<template>
  <div>
    <div class="card">
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="setAppunti('EPS')"
          >Elementi di Prob. e Stat.</a
        >
        <a href="#" class="card-footer-item" @click="setAppunti('SO')"
          >Sistemi Operativi</a
        >
        <a href="#" class="card-footer-item" @click="setAppunti('LFT')"
          >Linguaggi For. e Trad.</a
        >
      </footer>
    </div>
  </div>
  <div style="float: left; width: 15%; position: sticky; top: 1px; left: 5px;">
    <transition name="slide-fade-left">
    
    
    <div v-if="this.activeNotes==='SO'" class="box has-background-grey-lighter" >
    
      <aside class="menu" >
        <p class="menu-label">Sistemi Operativi</p>
        <ul class="menu-list">
          <li>
            <a @click="jumpTo('1')" class="is-active">Introduzione</a>
            <ul>
              <li ><a @click="jumpTo('1-1')">Libri</a></li>
              <li><a @click="jumpTo('1-2')">Cos'è un SO</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    </div>
  </transition>
  <transition name="slide-fade-left">
    
    
    <div v-if="this.activeNotes==='EPS'" class="box has-background-grey-lighter">
    
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li><a>Team Settings</a></li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    </div>
  </transition>
  <transition name="slide-fade-left">
    
    
    <div v-if="this.activeNotes==='LFT'" class="box has-background-grey-lighter">
    
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li><a>Team Settings</a></li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    </div>
  </transition>
  </div>
  
  <div>
    <Transition name="slide-fade">
      <body v-if="this.activeNotes === 'EPS'" style="width: 75%; float: right; text-align: left;">
        <ElemProbStat />
        
      </body>
    </Transition>
    <Transition name="slide-fade">
      <body  v-if="this.activeNotes === 'SO'" style="width: 75%; float: right; text-align: left;"  >
        <SistemiOperativi ref="refSO" />
      </body>
    </Transition>
  </div>
</template>

<script >

import SistemiOperativi from "../components/SistemiOperativi.vue";
import ElemProbStat from '../components/ElementiDiPRobStat.vue';

//import 'node_modules/mathjax/es5/tex-chtml.js';

export default {
  name: "AppuntiPage",
  components: {
    ElemProbStat,
    SistemiOperativi,
    
},
  data() {
    return {
      activeNotes: "",
      formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
    };
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"
    );
    document.head.appendChild(recaptchaScript);
  },

  metaInfo: {
    script: [
      {
        src: "https://polyfill.io/v3/polyfill.min.js?features=es6",
      },
      {
        // type:'text/javascript', id:'MathJax-script', async:true, src:'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
      },
    ],
  },
  MathJax: {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
  },
  methods: {
    async setAppunti(Corso) {
      this.activeNotes = "";
      await this.delay(900);
      this.activeNotes = Corso;
    },
    async delay(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    },
    jumpTo(whereTo){
      this.$refs.refSO.jump(whereTo)

    }
  },
};
</script>
<style>
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
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
