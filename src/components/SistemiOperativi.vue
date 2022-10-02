<template >
    <div>

        <h3  id="1" class="subtitle is-2"> Cos'è un sistema operativo? (Lez. 1)</h3>
        <h4 class="subtitle is-4" id="1-1">Libri</h4>
        <p>
            Sistemi Operativi concetti ed esempi di Silver Shatz
        </p>
        <h4 class="subtitle is-4" id="1-2">Cos'è un SO</h4>
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
        <h3 class="subtitle is-4 is-centered">Concetti Fondamentali</h3>
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
        <h3 class="subtitle is-4"> SO a 2 Jobs</h3>
        <p> Con l'evoluzione della tecnologia si iniziò a caricare 2 Jobs contemporaneamente per sfruttare al meglio la
            CPU. </p>
        <p>L'SO iniziò a tenere memorizzato il dato di <ins>Chi ha accesso alla CPU</ins>. L'SO de-allocherà la CPU al
            Job in esecuzione nel momento in cui smetterà di utilizzarla
            ; in quello stesso momento dedicherà la CPU ad un ulteriore Job che ne necessita.</p>
        <p>Nasce <strong>L'INTERLINING DELLE ISTRUZIONI</strong> ("Infogliamento")</p>
        <h3 class="subtitle is-4"> Time-Sharing</h3>
        <p>Con l'avvenire degli anni '60 vennero inventati computer composti da <strong>1 Elaboratore & + Operatori &
                +Terminali</strong> (Unità I/O)</p>
        <p>Nasce il concetto di <span class="tag is-info"> File</span></p>
        <p>La nascita del file comporta la nascita di problemi di <strong>Visibilità</strong>.</p>
        <h3 class="subtitle is-4">Nascita del Personal Computer</h3>
        <p>Negli anni '70 nacque il primo personal computer, la cui nascita rese <strong>Inutile</strong> i sistemi di
            protezione interni (c'era un singolo utente).</p>
        <h3 class="subtitle is-4"> Sequenza di accensione del pc</h3>
        <img src="../../immagini/SO/img1_2.png" alt="" style="transform:scale(0.70)">
        <p> Il SO è denotato dal suo <strong> comportamento reattivo</strong> cioè che reagisce ad eventi ricevuti e li gestisce</p>
        <p>Un evento si differenzia in due categorie: <strong>Trap(sw)</strong> o <strong>Interrupt(hw)</strong></p>
        <h3 class="subtitle is-2">Gestione degli eventi (Lez 2)</h3>
        <p>
            L'SO inizia un ciclo <u>Forever</u> caratterizzato da {wait until event --> <u>handle (the event)</u>} a ripetizione infinita.
            La procedura di <strong>handle</strong> richiede del <u>tempo</u>, per questo bisogna evitare che nuovi eventi generati non vengano persi durtante 
            l'handle precedente. <br>
            Viene introdotta la <strong>Coda Di Eventi.</strong>
        </p>
        <img src="../../immagini/SO/img2_1.png" alt="">
        <p>L1 selezionato --> viene inviato al componente <strong>Dispatcher</strong> (Smistatore) del SO come input, 
            lo dispatcher individua l'handler più adatto per gestire L1</p>
        <h3 class="subtitle is-4"> Array di Interrupt</h3>
        <p>
            L'SO sa gestire n tipologie di eventi predefiniti:
        </p>
        <img src="../../immagini/SO/img2_2.png" alt="">
        <p> Gli indirizzi i vengono salvati nel <strong>Vettore interruzioni</strong> (su RAM)</p>
        <img src="../../immagini/SO/img2_3.png" alt="">
        <h3 class="subtitle is-4"> Context Switch </h3>
        <p>Siccome sia un codice che l'SO hanno bisogno della CPU, occore usare il <strong>Context Switch</strong>: </p>
        <ol>
            <li>Context Switch "congela" il codice per liberare la CPU per l'SO e permettergli di gestire l'evento</li>
            <li>Al fine della gestione degli eventi presenti, si riprende l'esecuzione del cosice</li>
        </ol>
        <img src="../../immagini/SO/img2_4.png" alt="">
        <p>
            Nella gerarchi della memoria i registri sono i più veloci, ma con altrettanto alto costo; al fondo vi sono i nastri magnetici.
            L'SO è incaricato di gestire <strong>la CPU</strong>,<strong>le memorie</strong>,<strong>i dispositivi</strong> (sia i controller che i driver).
        </p>
        <h3 class="subtitle is-4">Dual Mode</h3>
        <h3 class="subtitle is-5"> Modello a Livelli </h3>
        <p>Nel modello a livelli l' <strong>instruzion set</strong> viene partizionato in due insiemi: <strong>Istruzioni comuni e Istruzioni privilegiate</strong>. 
        Nel caso si volesse utilizzare un'istruzione privilegiata, sarebbe necessario eseguire una <strong>System Call</strong> per chiederne l'esecuzione da parte dell'SO. <br>
        In architettura viene impostato un <strong>bit di modalità</strong> che alterna tra modalità <strong>utente</strong> e modalità <strong>kernel.</strong></p>
        <br> Ex:printf --> SystemCall --> Modalità kernel (dopo eventuali controlli).
        <h3 class="subtitle is-4"> System Call </h3>
        <p>
            Il System Call serve a 5 categorie:
            <ol>
                <li> Controllo/Gestione dei Processi</li>
                <li> Controllo/Gestione dei File</li>
                <li> Controllo/Gestione dei Dispositivi</li>
                <li> Controllo/Gestione delle Informazioni</li>
                <li> Controllo/Gestione della Comunicazione</li>
            </ol>
        </p>
        <p> (1) Processi: <br>
            Programma --> esecuzione 1 --> Processo &lt;-- Risorse assegnate da SO</p>
        <p> (2) File: <br>
            La manipolazione dei file è <strong>Critica</strong>, servono dei criteri di sicurezza. <br>
            l'invocazione di un file evoca numerose SystemCall:</p>
            <ol>
                <li>Avvia il nuovo processo di copiatura</li>
                <li>Apre progetto.c</li>
                <li>Apre progetto2.c</li>
                <li>Ciclo di lettura e Scrittura (tutte SysCall)</li>
                <li>Chiusura progetto.c</li>
                <li>Chiusura progetto2.c</li>
                <li>Comunicazione a terminale</li>
                <li>Terminazione del processo</li>
            </ol>
            <p> Per vedere le SysCall usare comando: "strace {comando} -cw" <br>
            Execve è una SysCall importante</p>
        <h3 class="subtitle is-4">Come si implementa un SO</h3>
        <p>
            <ol>
                <li>Scegliere il linguaggio ad alto livello (Non Assembly) per incrementare la portabilità del SO</li>
                <li>Generare politiche/Strategie che si appoggiano a <strong>Specifici Meccanismi</strong> per svolgere le operazioni di controllo e la gestione di Risorse</li>
            </ol>
            La Politica è la regola che si vuole implementare, il Meccanismo è lo strumento con la quale si può fare l'implementazione (Neutri rispetto alla politica)
        </p>
        <p>
            
            <vue-mathjax :formula="formula"></vue-mathjax>
        </p>
        <h3 class="subtitle is-2">Stratificazione del Sistema (Lez 3) </h3>
        <p>
            Per motivi di sicurezza è stata implementata la stratificazione a livelli sel SO, in questo modo un certo livello K potrà comunicare solo con 
            il livello K+1 e il K-1 fino ad arrivare al HW che comunicherà soltanto con il livello 1. Il livello più in alto si chiama <strong> Ambiente di lavoro utente.</strong>
        </p>
        <h3 class="subtitle is-4 is-centered"> Struttura Unix</h3>
        <img src="../../immagini/SO/img3_1.png" alt="">
        <table class="table">
            <thead>
                <th>Vantaggi</th>
                <th>Svantaggi</th>
            </thead>
            <tbody>
                <tr>
                    <td>Tecnica Semplice (Stratificata)</td>
                    <td>Esecuzione "Inefficiente"</td>
                </tr>
                <tr>
                    <td>Semplice Realizzazione</td>
                    <td>Difficile Organizzazione dei diritti sugli stati</td>
                </tr>
                <tr>
                    <td><strong>Semplice Debugging</strong></td>
                </tr>
            </tbody>
        </table>
        <h3 class="subtitle is-4"> Macchine Virtuali </h3>
        <img src="../../immagini/SO/img3_2.png" alt="">
        <h3 class="subtitle is-4"> Tecnica Micro-Kernel</h3>
        <p>Un'alternativa al sistema a livelli è la <strong>tecnica micro-kernel</strong>. <br>
        Il micro-kernel avrà il compito di gestire:
        <ul>
            <li>Processi</li>
            <li>Memoria</li>
            <li>Comunicazione (Scambio di messaggi)</li>
        </ul> 
        La tecnica micro-kernelpremette l'aggiunta di <strong>Moduli Aggiunti</strong>
        </p>
        <h3 class="subtitle is-4">SO Customization</h3>
        <p>
            I moduli aggiunti <strong>non possono comunicare tra di loro</strong> in quanto viene preso in considerazione che non sempre tutti i moduli aggiuntivi utilizzati
            saranno scaricati sul SO. <br>
            Un modulo che richiede l'utilizzo di un altro (Cliente), deve passare attraverso l'SO e chiedere servizi ad un altro modulo (Server). <br>
            Tutto questo passaggio causa un grande problema di <strong>Disaccoppiamento</strong>. <br>
            Il più grande problema è causato dalla possibile comparsa di un <strong>Bottleneck</strong> per il kernel, causando un rallentamento dell'esecuzione. <br>
            Se un modulo crolla, gli altri rimangono intoccati.
        </p>
        <h3 class="subtitle is-4">Organizzazione Kernel a Moduli</h3>
        <p>
            In questa organizzazione il kernel è <strong>Ridotto</strong>, ma i moduli hanno una loro interfaccia per essere <strong> utilizzati da altri moduli</strong>. <br> {Comando: "ls mod"}
        </p>
        <h3 class="subtitle is-4">Processi</h3>
        <p>
            Un Programma è un <strong>file</strong> che viene <strong>eseguito</strong>. Durante l'esecuzione un programma utilizza risorse RAM e CPU.
        </p>
        <img src="../../immagini/SO/img3_3.png" alt="">
        <p>
            Ricordare che quando più processi vengono eseguiti in contemporanea, si chiama parallelismo virtuale, in quanto sono eseguiti in "finta simultanea".
        </p>
        <p>
            <ul>
                <li>P1 passa ad attesa e si libera la CPU</li>
                <li>P2 passa ad esecuzione</li>
            </ul>
        </p>
        <p>
            Ogno processo viene identificato attraverso il <strong>PID</strong> (Process identifier (numero univoco)). <br>
            Inoltre ogni porcesso possiede anche il PCB, ovvero una lista che specifica lo stato e tutte le informazioni necessarie a ripristinare il processo, quando viene ripreso.
        </p>
        <h3 class="subtitle is-4">Stati dei Processi</h3>
        <img src="../../immagini/SO/img3_4.png" alt="">
        <p>
            <ul>
               <li>-A termine dell'esecuzione di un processo de-alloca tutto ciò che era assegnato e le dedica ad un altro Processo;</li>
               <li>-Waiting è in attesa di qualsoa di esterno, nel mentre de-alloca le sue risors;</li>
               <li>*Solo <strong>alucuni </strong>sistemi operativi possono <strong>sottrarre CPU</strong> ad un elemento in <strong>Esecuzione.</strong></li>
            </ul>
        </p>
        <h3 class=" subtitle is-4"> Context Switch</h3>
        <p>
            Se un processo P1 viene interrotto , la parte già eseguita viene <strong>Salvata nel PCB</strong>, dove verrà poi riottennuta quando dovrà riprendere. <br>
            Nel PCB si trovano tutti i registri da recuperare per riprendere in futuro l'esecuzione dal punto in cui si era interrotta. <br>
        </p>
        <p><strong>Transizione da Running a Terminato </strong></p>
        <ul>
            <li>-Un processo termina a causa di una SysCall (Terminazione Naturale SysCallExit);</li>
            <li>-In caso di Errore --> SysSall:Abort;</li>
            <li>-Processo "uccide  un altro processo" --> SysCall:Kill;</li>
            <li>Utente uccide un processo --> SysCall:</li>
        </ul>
        <p> <strong> Transizione da Running a Waiting (4 casi)</strong></p>
        <ol>
            <li>Invocazione operazione I/O;</li>
            <li>Sospensione Volontaria;</li>
            <li>Sospensione in attesa di un evento;</li>
            <li>Sincronizzazione (Semafori)</li>
        </ol>
        <p> 
        <strong> Strutture di Dati di Supporto</strong>
        </p>
        <ol>
            <li>Ready: Nella coda ready;</li>
            <li>I/O: Nella coda dispositivo (1 per dispositivo);</li>
            <li>Sincronizzazione semafori: Nella coda Semafori;</li>
        </ol>
        <h3 class="subtitle is-4">Scheduling</h3>
        <p>"Identificare il prossimo processo a cui assegnare una risorsa"</p>
        <p>3 Tipi:</p>
        <ul>
            <li>-Scheduling a lungo termine;</li>
            <li>-Scheduling a medio termine;</li>
            <li>-Scheduling a corto termine;</li>
        </ul>
    </div>
</template>
<script>
import { VueMathjax } from "vue-mathjax-next";

export default {
  name: "SistemiOperativi",
  components: {
    "vue-mathjax": VueMathjax,
  },
  data() {
    return {
      formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
    };
  },
  methods: {
    jump(h) {
      document
        .getElementById(h)
        .scrollIntoView({ block: "nearest", behavior: "smooth" });
    },
  },
};
</script>
<style>
li {
  text-align: left;
}
h3 {
  background-color: aliceblue;
  width: fit-content;
  padding: 2px;
  margin-top: 10px;
}
h4 {
  background-color: whitesmoke;
  width: fit-content;
  padding: 2px;
  margin-top: 10px;
}
</style>