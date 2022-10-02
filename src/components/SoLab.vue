<template>
  <div class="content is-medium">
    <h3 class="subtitle is-3">Lez 3</h3>
    <p>
      Usando il valore di ptr si può accedere al valore memorizzato nella
      variabile i, pur essendo questo passaggio possibile, tale azione risulta
      più lento, in quanto esegue una multipla lettura. Più sono i puntatori,
      più è lunga la "catena" aumentando il tempo necessario per leggere il
      valore della variabile. <br />
      In ogni modo bisogna utilizzare la deferenzazione per ottenere il valore
      in sé. <br />
      <code class="language-c"> int a = *ptr + 20 </code> (in Questo caso avremmo aumentato il valore di i di 20;
      abbiamo derefenziato ptr con *).
    </p>
    <h2 class="subtitle is-4">Operazioni di controllo flusso</h2>

    DA SISTEMARE AL MOMENTO E' ORRIBILE <br />
    <pre><code class="language-c">
While(expt){
 ..... 
 } do { 
 .... 
};
    </code></pre>
    <pre><code class="language-c">

    </code></pre>
    <pre><code class="language-c">
while(exp){

};
for (expr;expr;expr) {

};
    </code></pre>
    <p>
      Notare che un'espressione con valore 0
      vale False, un'espressione con valore diverso da 0 vale True. <code class="language-c">While(1){}</code>
      //causerà un ciclo infinito. <code class="language-c"> While(a){}</code> //ciclo finchè a != 0.
      <code class="language-c">While(a=n){} </code>//assegnamento, finche a=n è diverso da 0. <code class="language-c"> for(i=0;
      no_registered(); i++){} </code>.
    </p>
    <p>
      Example:
    <pre><code class="language-c">
if(ptr!= NULL && *ptr==10){
    ... 
} 
else{ 
    ... 
} 
        </code></pre>

    </p>
    <pre><code class="language-c">
#include
int main(){
    int i = 5;
}
    </code></pre>
    <pre><code class="language-c">
Switch(expr){
    case a: ...; 
}; 
    </code></pre>

    <p>
      MAI USARE LABEL: <br />
    <pre><code class="language-c">
goto label; <br />
... 
...
label: 
    </code></pre>

    </p>
    <p>
      <code class="language-c"> .... break; </code> //comporta l'uscita dal ciclo interno attivo (Non esce da
      tutti i cicli annidati)
    </p>
    <p>
      Quando viene dichiarata una stringa (<code class="language-c"> char *str ='Hello World'</code> ) essendo un
      array di char, viene aggiunto anche il carattere di fine stringa:
      <strong> "\0" </strong> come ultimo carattere della stringa. <br />
      Ogni carattere della stringa avrà il corrispondente valore
      <strong> ASCII</strong> per indicarne la lettere o il simbolo. char *str
      "Punterà" <strong>Solo</strong> al primo carattere della stringa; per
      ottenere H sarà necessario deferenziare la variabile mentre per i
      successivi bisognerà <strong>sommare</strong> la posizione richiesta
      all'indirizzo.
      <code class="language-c">
*str + 6 == W; //Darà True
</code>

    </p>
    <p>
      Esercizio: Srivere un programma che analizza un testo carattere per
      carattere e in caso trovi un carattere maiuscolo, la trasforma in
      minuscolo.
    </p>
    <div class="button" @click="openCard('Es_1')"> Da sostituire ad icona </div>
    <div :style="[Es_1 === false ? 'display:none;' :'' ]">
      <pre> <code class="language-c">
int isuppercase(char c){
  return c>'A' && c &lt;= 'Z';
};
char tolowercase(char c){
  return c-('A' - 'a');
};
int main(){
  char c;
  char *s = "Hello woRLd! Today's temperature is 34C.";
  c=*s;
  while(c!='\0'){
    if(isuppercase(*c)){
      putchar( tolowercase(c));
    }
    else{ 
      putchar(c);
    }
    c=*s++;
  }
}
    </code></pre>
    </div>

    <h3 class="subtitle is-3"> Lezione 4 </h3>
    <h4 class="subtitle is-4"> Simbolismi in Stringa </h4>
    <pre> <code class="language-c">
      
//all in strings
"\n : line feed";
"\r : carriage return";
"\t : tabulazione";
"\f : format feed";
"\b : backspace";
"\\ : carattere \";
"\" : carattere " ";
"%% : carattere %";

//Alcuni sistemi operativi usano codifiche 
//differenti per il fine linea:
Windows: "\r \n";
UNIX: "\n";
Machintosh: "\r";
</code></pre>
    <h4 class="subtitle is-4"> Caratteri di controllo in Stringa </h4>
    <p>
      La stringa può anche possedere dei <strong> caratteri di controllo </strong> designati da %.
    </p>

    <pre><code class="language-c">
    "%d %i per gli interi";
    "%u per gli interi unsigned";
    "%ld per gli interi long";
    "%c per i caratteri";
    "%s per le stringhe";
    "%f %lf per i float ed i double";
    "%e %E notazione esponenziale";
    "%g %G";
    "%p per i valori puntatori"; 
  </code></pre>
    <p>
      I caratteri di formato possono essere preceduti da due numeri separati da un punto (n.m). Essi indicano quante
      cifre usare rispettivamente per la parte intera e decimale di un numero.
      Esempio:
    </p>
    <pre>
    <code class="language-c"> 
double r = rand()/(double)RAND_MAX; 
printf("Inserisci il numero di bytes da allocare: \n")
scanf("%d",&n); </code></pre>
    <h3 class="subtitle is-4"> Input e Output formattato </h3>

    <p>
      La funzione scanf() legge dallo <strong> stream dei dati</strong> associato allora standard input (stdin):
    </p>
    <pre><code class=" language-c">
  #include &lt;stdio.h&gt;
  int scanf(const char *format,  .... );
      </code></pre>
    <p>
      Ogni argomento puntatore deve essere di un tipo appropriato per il valore restituito dalla corrispondente
      specifica di conversione.
      Esempio:
      </p>
    <pre><code class="language-c"> 
//Per far uscire il programma dal ciclo (stream di input) premere CTRL+D
int n; //size in bytes
printf("Inserisci numero bytes da allocare \n");
scanf("%d",&n);
//Stamperà a video il numero di caratteri inseriti
        </code></pre>
        <p>
    Legge dallo stream di input la prima parola presente e la converte in decimale <strong> %d</strong>. Se la
    conversione ha successo il valore è restituito in n attraverso il puntatore alla variabile. <br>
    Effettivamente <strong>traduce </strong> i caratteri numerici in valori integer (quando possibile, non accetta
    caratteri alfabetici).
    </p>
    <pre> <code class="language-c">
long cnt;
char c;
printf("Inserire una stringa e premere CTRL+D per terminare.")
for (cnt=0; scanf("%c",&c)!= EOF; cnt++){
  //Scanf ignora gli spazi bianchi
  ;
}
printf("Il testo che ha inserito contiene %i caratteri \n",cnt)
  </code></pre>
    <p>
      Lo scanf verrà subito eseguito ad una velocità estremamente elevata, ma con elemento vuoto, allora si mette in
      attesa e blocca la code dei processi. La tastiera è gestita dal <strong>SO</strong> ed è quella che attraverso gli
      interrupt, invia i dati inseriti dalla tastiera. Tutto quello che viene inserito nella tastiera viene salvato nel
      <strong>Buffer </strong> e poi con invio, viene salvata in qualche punto della memoria. <br>
      <strong> Ripassare sincronizzazione attraverso SO</strong>. LO Stream vuoto <strong> non è </strong> uno stream chiuso.
      Lo stream chiuso, invece, lo scanf restituisce <strong> EOF </strong>(End of File).
    </p>
    <h3 class="subtitle is-4"> Accensione del Computer</h3>
    <p>
      
    </p>
    




  </div>


</template>
<script>
import Prism from "prismjs";
import "../../node_modules/prismjs/components/prism-c";
import "prismjs/themes/prism-tomorrow.css"; // you can change
export default {
  name: "SoLabPage",
  data() {
    return {
      Es_1: false,
    }
  },

  // mounted
  methods: {
    openCard(card) {
      switch (card) {
        case 'Es_1':
          this.Es_1 = !this.Es_1;
          console.log(this.Es_1);
          break;

        default:
          break;
      }
    }
  },
  props: {

  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  },
}
</script>
<style>
.token.number,
.token.tag {
  all: inherit;
  color: #905;
}

pre {
  width: 70%;
}

p {
  width: 70%;
}
</style>