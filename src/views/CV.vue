<script setup >

import PDFViewer from 'pdf-viewer-vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf } = usePDF('https://raw.githubusercontent.com/Jak3d/CV/main/Curriculum_Vitae.pdf')


</script>
<template padding-left>
    <div v-if="this.bigEnought2">
        <div style="bottom: 20px;">

            <div v-if="!low_res_mode">
                <div> Pdf not loading? Your browser might not support it. Try the <span @click="toggleLowRes()" style="color:blue;cursor: pointer;">low resolution</span> version instead or get it directly from the <a href="https://github.com/Jak3d/CV/blob/main/Curriculum_Vitae.pdf" target="_blank" style="color: blue;">source.</a></div>
                <div style="text-align: center; margin-left: 3%; margin-right: 3%;">
                    <PDFViewer :source="url" style="height: 90vh;" @download="handleDownload" />
                </div>

            </div>
            <div v-if="low_res_mode" style=" text-align: center;botto">Click <span @click="toggleLowRes()" style="color:blue; cursor: pointer;">here</span> to disable low resolution mode.
                <div class="level-item has-text-centered">
                    <div style="border-style: inset; border-color: gray;">
                        <VuePDF :pdf="pdf" />
                    </div>
                </div>
            </div>
        </div>
        <p style="top: 5px;">
            &nbsp;
        </p>
    </div>
    <div v-else style="max-width: 100%;max-height: 100%;">
        <img src="../CV.jpg" alt="Curricul Vitae Leonardo Marro" style="height: 100%;">
    </div>
</template>

<script>
export default {
    components: {
        PDFViewer,
    },
    name: 'CV',
    data() {
        return {
            url: 'https://raw.githubusercontent.com/Jak3d/CV/main/Curriculum_Vitae.pdf',
            low_res_mode: false,
            bigEnought2: false,
            windowWidth: window.innerWidth,
            loaded:false,
        }
    },
    methods: {
        toggleLowRes() {
            this.low_res_mode = !this.low_res_mode;
            console.log(this.low_res_mode);
        },
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
                this.bigEnought2 = false;
                console.log('CorrectSize -- Updated CV');
            }else{
                this.bigEnought2 = true;
                console.log('CorrectSize -- Updated CV');
            } 
            console.log(this.bigEnought2);
        }
    },
    mounted(){
        window.onload = () =>{
            
            console.log('loaded CV');
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 1000) {
                this.bigEnought2 = false;
            }else{
                this.bigEnought2 = true;
            } 
            console.log(this.bigEnought2);
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
        this.resizeOnLoad();
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    
}
</script>
<style>
.div {
    background-color: #ffe2d1;
    ;
}
</style>