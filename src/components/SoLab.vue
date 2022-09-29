<template>
  <div class="content is-medium">
    <h2 class="subtitle is-3">Lez gg 3?</h2>
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
      <pre ><code class="language-c">
While(expt){
 ..... 
 } do { 
 .... 
};
    </code></pre>
    <pre ><code class="language-c">

    </code></pre>
    <pre ><code class="language-c">
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
    <pre ><code class="language-c">
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
  </div>
</template>
<script>
import Prism from "prismjs";
import "../../node_modules/prismjs/components/prism-c";
import "prismjs/themes/prism-tomorrow.css"; // you can change
export default {
  name: "SoLabPage",

  // mounted
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  },
};
</script>
<style>
.token.number,
.token.tag {
  all: inherit;
  color: #905;
}
pre{
    width: 70%;
}
p{
    width: 70%;
}
</style>