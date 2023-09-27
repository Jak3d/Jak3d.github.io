<template>
    <div>

        <body>
            <div id="profileBox">
                <div class="level-item has-text-centered">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-256x256">
                                <img src="../FotoProfiloLeo.png" width="256" height="256" alt="Leonardo Marro">
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
                    <a href="https://it.linkedin.com/in/leonardo-marro" style="color: black;"><font-awesome-icon icon="fa-brands fa-linkedin" size="4x" /></a> &nbsp;
                    <a href="https://github.com/Jak3d" style="color: black;"><font-awesome-icon icon="fa-brands fa-github" size="4x" /></a> &nbsp;
                </p>
            </div>
        </body>
    </div>
</template>
<script>
export default {
    props:['pj'],
    components: {

    },
    name: 'ProfilePageCV',
    data() {
        return {

        }
    },
    methods: {
    },
}
</script>