<script setup >

import PDFViewer from 'pdf-viewer-vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf, pages, info } = usePDF('https://raw.githubusercontent.com/Jak3d/CV/main/Curriculum_Vitae.pdf')

console.log(`Document has ${pages} pages`)
console.log(`Document info: ${info}`)
</script>
<template padding-left>
    <div style="bottom: 20px;">
        
        <div v-if="!low_res_mode">
            <div> Pdf not loading? Your browser might not support it. Try the <span @click="toggleLowRes()" style="color:blue;cursor: pointer;">low resolution</span> version instead or get it directly from the <a href="https://github.com/Jak3d/CV/blob/main/Curriculum_Vitae.pdf" target="_blank" style="color: blue;">source.</a></div>
            <div style="text-align: center; margin-left: 3%; margin-right: 3%;">
                <PDFViewer :source="url" style="height: 90vh; width: 100%;" @download="handleDownload" />
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
        }
    },
    methods: {
        toggleLowRes() {
            this.low_res_mode = !this.low_res_mode;
            console.log(this.low_res_mode);
        }
    },
}
</script>
<style>
.div {
    background-color: #ffe2d1;
    ;
}
</style>