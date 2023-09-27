<template>
    <div>

        <body>
            <div id="profileBox" :style="[bigEnought === false ? 'margin-left:2%; margin-right:2%;' : '']">
                <div class="card">
                    <div class="media">
                      
                        <img src="../FotoProfiloLeo.png" alt="Leonardo Marro" style="max-width: 100%; max-height: 100%;" class="center">
                        <div v-if="bigEnought" class="media-content" style="width: 100%; margin-top: auto; margin-bottom: auto;">
                            <!--  {{ windowWidth }} -->
                            <!-- mettere un metodo e controllare true or false-->
                            <div class="content">



                                I am Leonardo Marro, currently a Bachelor's student at UniTo in Computer Science, where I can explore
                                my interest in Artificial Intelligence applied to object detection.
                                <br>
                                I'm currently working on an AI powered security system that alerts authorities when detecting potential threats.
                                <br>
                                I'm continously looking to broaden my range of known languages, frameworks and libraries.
                                <br>

                            </div>
                        </div>
                    </div>
                    <div v-if="!bigEnought" class="media-content" style="width: 100%">
                        <!--  {{ windowWidth }} -->
                        <!-- mettere un metodo e controllare true or false-->
                        <div class="content">



                            I am Leonardo Marro, currently a Bachelor's student at UniTo in Computer Science, where I can explore
                            my interest in Artificial Intelligence applied to object detection.
                            <br>
                            I'm currently working on an AI powered security system that alerts authorities when detecting potential threats.
                            <br>
                            I'm continously looking to broaden my range of known languages, frameworks and libraries.
                            <br>

                        </div>
                    </div>

                </div>
            </div>
            <br>
            <div style="top: 10px;">
                <p>
                    <a href="https://it.linkedin.com/in/leonardo-marro" style="color: black;"><font-awesome-icon icon="fa-brands fa-linkedin" size="4x" /></a> &nbsp;
                    <a href="https://github.com/Jak3d" style="color: black;"><font-awesome-icon icon="fa-brands fa-github" size="4x" /></a> &nbsp;
                </p>
            </div>
        </body>
    </div>
</template>
<script>
export default {
    props: ['pj'],
    components: {

    },
    name: 'ProfilePage',
    data() {

        return {
            windowWidth: window.innerWidth,
            bigEnought: true,
           
        }
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 1000) {
                this.bigEnought = false;
            }else{
                this.bigEnought = true;
            }
            console.log(this.loaded);
        },
        window.onload = () =>{
            
            console.log('loaded');
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 1000) {
                this.bigEnought = false;
            }else{
                this.bigEnought = true;
            } 
            console.log(this.bigEnought);
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
        this.resizeOnLoad();
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler(e) {
            console.log('cought e');
            console.log(e);
            console.log(e.type);
            if(e.type=="resize"){
                this.windowWidth=window.innerWidth;
                console.log('resize');
            }
        },
        resizeOnLoad(){
            console.log('loaded');
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 1000) {
                this.bigEnought = false;
            }else{
                this.bigEnought = true;
            } 
            console.log(this.bigEnought);
        }
    },
}
</script>
<style>
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;

}
</style>