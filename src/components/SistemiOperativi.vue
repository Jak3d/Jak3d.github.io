<template >
    <div>

        <h3  id="1" class="subtitle is-3"> Cos'è un sistema operativo? (Lez. 1)</h3>
        <h4 class="subtitle is-5" id="1-1">Libri</h4>
        <p>
            Sistemi Operativi concetti ed esempi di Silver Shatz
        </p>
        <h4 class="subtitle is-5" id="1-2">Cos'è un SO</h4>
        <p>
            Il sistema operativo è il componente <strong> Software </strong> del computer , senza tale dispositivo, il
            computer
            sarebbe una macchina <strong>Hardware</strong>. Un esempio di un computer senza SO fu
            <strong>Eniac</strong>.
        </p>
        <img src="../../immagini/SO/img1_1.png" alt="" style="transform:scale(0.70)">
        <p>
            Il Sistema operativo gestisce/controlla due principali elementi: <strong> Risorse</strong> e <strong>
                Controlli</strong>
        </p>
        <p>
            Le <strong> Risorse </strong> gestite sono:
        </p>
        <ol>
            <li>Risorse HW (Ram, I/O)</li>
            <li>Risorse SW (File, Code di messaggi, Processi)</li>
            <li>Tempo</li>
        </ol>
        <p>
            I <strong> Controlli</strong> gestiti sono:
        <ol>
            <li>Programmi</li>
            <li>Sicurezza</li>
        </ol>
        </p>
        <h3 class="subtitle is-3 is-centered">Concetti Fondamentali</h3>
        <p>
            Negli anni '50 nacque il <strong> Primo</strong> SO: <span class="tag is-info"> IBM SERIE 701</span>
            Esistono due tipi di processamento input: <strong> SINGLE STREAM</strong> e <strong> BATCH
                PROCESSING</strong> System
            (Disegno 1.2)
        </p>
        <p>Un programma da eseguire è una <strong>Stringa di Istruzioni</strong> </p>
        <p>"i" di INPUT (Leggo dato da memoria senza utilizzare la CPU)</p>
        <p>"i" di OUTPUT (Scrivo dato in memoria senza utilizzare la CPU)</p>
        <p>Durante tutto questio persiodo di I/O la CPU rimane <strong>Inattiva</strong>. </p>
        <p>(Disegno 1.3)</p>
        <h3 class="subtitle is-3"> SO a 2 Jobs</h3>
        <p> Con l'evoluzione della tecnologia si iniziò a caricare 2 Jobs contemporaneamente per sfruttare al meglio la
            CPU. </p>
        <p>L'SO iniziò a tenere memorizzato il dato di <ins>Chi ha accesso alla CPU</ins>. L'SO de-allocherà la CPU al
            Job in esecuzione nel momento in cui smetterà di utilizzarla
            ; in quello stesso momento dedicherà la CPU ad un ulteriore Job che ne necessita.</p>
        <p>Nasce <strong>L'INTERLINING DELLE ISTRUZIONI</strong> ("Infogliamento")</p>
        <h3 class="subtitle is-3"> Time-Sharing</h3>
        <p>Con l'avvenire degli anni '60 vennero inventati computer composti da <strong>1 Elaboratore & + Operatori &
                +Terminali</strong> (Unità I/O)</p>
        <p>Nasce il concetto di <span class="tag is-info"> File</span></p>
        <p>La nascita del file comporta la nascita di problemi di <strong>Visibilità</strong>.</p>
        <h3 class="subtitle is-3">Nascita del Personal Computer</h3>
        <p>Negli anni '70 nacque il primo personal computer, la cui nascita rese <strong>Inutile</strong> i sistemi di
            protezione interni (c'era un singolo utente).</p>
        <h3 class="subtitle is-3"></h3>


        <p>
            <vue-mathjax :formula="formula"></vue-mathjax>
        </p>
    </div>
</template>
<script>
import { VueMathjax } from "vue-mathjax-next";

export default {
    name: 'SistemiOperativi',
    components: {
        "vue-mathjax": VueMathjax,
    },
    data() {
        return {
            formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
        }
    },
    methods: {
        jump(h) {
            document.getElementById(h).scrollIntoView({block:"nearest", behavior:"smooth"});
        },
    }
}
</script>
<style>
li {
    text-align: left;
}
h3{
    background-color: aliceblue;
    width: fit-content;
    padding: 2px;
    margin-top: 10px;
}
h4{
    background-color: whitesmoke;
    width: fit-content;
    padding: 2px;
    margin-top: 10px;
}
</style>