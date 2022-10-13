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
    <h3 class="subtitle is-2"> Lezione 4</h3>
    <h3 class="subtitile is-4">Definizioni</h3>
    <p> La direttiva #define definisce nomi simbolici per valori restuali utilizzabili dal programma.</p>
    <pre><code class="language-c">
      #define MAX_NO_STUDENTS 100;
      for(i=0; i &lt; MAX_NO_STUDENTS){
        ...
      }
    </code></pre>
    <p>Se una costante simbolica è utilizzata in più mosuli sorgente C serve creare un nuovo file <strong>Intestazione</strong>. </p>
    <pre><code class="language-c">
      #define MAX_NO_STUDENTS 100
      #define CLASSROOM_A_CAPACITY 40
      #define OVERFLOW (MAX_NO_STUDENTS - CLASSROOM_A_CAPACITY)
    </code></pre>
    <p>
      Il nome di un simbolo ha un numero limitato di caratteri.
    </p>
    <div>
      <p>Nota: Un header personalizzato non si include con &lt; &gt;, ma indicandone il path relativo o assoluto con " ".</p>
    </div>
    <h3 class="subtitle is-4">Doppie incusioni</h3>
    <p>
      
      Inlusioni di definizio, possono contenere ulteriori inclusioni dentro di loro, causando possibbili <strong>Doppie inclusioni</strong> 
      nello stesso codice. <br>
      <pre><code class="language-c"> 
        #ifndef _MATH_MACRO_H 
        // controlla se esiste già le definizione (if not def)
          #define _MATH_MACRO_H
          ...
          ... 
        #endif
      </code></pre>
    </p>
    <h3 class="subtitle is-4">Global Variables (Static,External)</h3>
    <p>Le variabili globali sono allocate in fase si compilazione e sono visibili anche da mosuli diversi da quello in cui è definita.
      <br> Se uso <code class="language-c"> static int a;</code>, la variabile "a" sarà visibile solo in tutte le parti del programma. <br>
      Se uso <code class="language-c">extern int b;</code>, la variabile "b" sarà visibile in qualsiasi modulo esterno, <strong> previa definizione</strong>.
    </p>
    <h4 class="subtitle is-4">sizeof()</h4>
    <p>In alcune occasioni è necessario determinare la dimensione di un espressione o di un tipo in termini di Byte</p>
    <pre><code class="language-c">
      sizeof(int);
      sizeof(char);
      sizeof(*int);
    </code></pre>
    <h3>Le Strutture di dati</h3>
    <p>Le strutture C sono:
      <ul>
        <li>-Gli Array (Sono allocati staticamente al momento di compilazione)(Diverso da JAVA!) <pre><code class="language-c">
int a[10];
char *msg = "OK you entered"; //Punta ad una seguenza di caratteri (al primo elem)
char str[] = {'H','e','l','l','o', '\0'}; //ricordare lo "\0"
char *weekdays[] = {"Mon","Tue","Wed","Thu","Fri"}; //Array di puntatori a "Stringhe" (sono sempre char)
        </code></pre></li>
        <li>-Lo Struct (Riempito con dei <strong> Campi </strong>) <pre><code class="language-c">
//definizione di una struttura
struct student{ 
  int matr;
  char *firstName;
  char *lastName;
  int voti[40];
  struct address adr; //definito da qualche parte
}
//definizione di dati con struttura student
struct student pippo,pluto,paperino;
        </code></pre></li>
      </ul>
    </p>
    <p>(C'era un bel disegno su array di stringhe (array di puntatori a stringhe): Ricopiare)</p>
    <p>Metodo alternativo per definire un array: <br> <code class="language-c"> char *weekdays_b = "Mon\Tue\Wed\Thu\Fri\0"</code> </p>
    <p>In C il nome di un array indica l'indirizzo del primo elemento</p>
    <ul>
      <li>a,*a, a[0] indicano il primo elemento</li>
      <li>a[3],*(a+3)</li>
      <li>&a[4],a+4</li>
    </ul>
    <p>Non si può modificare "a" in quanto il nome è una variabile di tipo <strong> Const</strong></p>


<h3 class="subtitle is-3"> (Lez 4)</h3>
<p>
  
</p>
<h3 class="subtitle is-3"> (Lez 6) </h3>
<h3 class="subtitle is-4"> Accesso file attraverso stream stdio</h3>
<p>
  <code class="language-c"> FILE *f = fopen ("./DivinaCommedia.txt")</code> <br> La <strong>fopen</strong> restituisce un puntatore 
  allo stream  di tipo *FILE. Esso deve essere usato per le seguenti operazioni:
</p>
  <pre><code class="language-c">
    fread();
    fwrite();
    fgets();
    fgetc();
    fclose();
    fseek();
    fscanf();
    fprintf();
  </code></pre>


<p>
  Nel stdio.h sono definiti diversi stream:
</p>
  <pre><code class="language-c">
  extern FILE *stdin; //standard input, descrittore 0, input file associato al terminale se non specificato altrimenti
                      //per leggere file devo assegnargli fopen del file in questione
  extern FILE *stdout; //standard output, descrittore 1
  extern FILE *stderr; //standard error, descrittore 2
  </code></pre>
<p>
  Questo comporta che i seguenti sono equivalenti:
</p>
<pre><code class="language-c">
int c;
c = fgetc(stdin); //legge dallo stream
c = getchar();
</code></pre>
<p>Example:</p>
<pre><code class="language-c">
  #include &lt;stdio.h&gt;
  stdout = fopen("./La divina commedia.txt","a");

  printf("Hello World");
  frequencies &lt; filein &gt; fileout
</code></pre>
<h3 class="subtitle is-4"> Allocazione dinamica della memoria </h3>
<p> Alcune funzioni della libreria stdlib sono per l'allocazione dinamica della memoria dati. <br> Esse sono 
principalmente le seguenti:</p>
<pre><code class="language-c">
  void *malloc(size_t size);
  void *calloc(size_t nmemb, size_t size);
  void *realloc(void *ptr, size_t size);
  void free(void *ptr);
</code></pre>
<p><strong>~malloc() </strong> (memory alloc) associa <strong>size</strong> bytes dallo heap e restituisce in caso di successo un puntatore alla memoria
allocata. La memoria allocata <strong> non è inizializzata a 0</strong>.</p>
<p> <strong>~calloc() </strong> alloca memoria per un array di nmemb elementi ciascun di dimensione bytes. In caso di successo restituisce  un 
  puntatore alla memoria allocata. La memoria allocata <strong>è inizializzata a 0</strong>. Fa il controllo dell'overflow di 
  nmemb*size.
</p>
<p>
  <strong> ~realloc() </strong> modifica la dimensione di un blocco di memoria precedentemente allocato e puntato da ptr alla nuova dimensione
  {size} bytes. ptr deve essere un puntatore precedentemente restituito da una chiamata a malloc() o calloc() o realloc().
</p>
<p>
  <strong> ~free() </strong>de-alloca il blocco di memoria puntato da ptr e precedentemente allocato con malloc(),callor() o realloc(). 
  In caso di errore o se nessuna allocazione è stata fatta le funzioni malloc(),calloc(),realloc() restituiscono <strong> NULL</strong>.
</p>
<p><strong>Allocazione dinamica di uno struct</strong></p>
<pre><code class="language-c">
struct student *donald = (struct student *) malloc(sizeof(struct student));
if (donald != NULL){
  donald -> id = 435;
  donald -> first_name = "Donald";
  donald -> last_name = "Duck";
}
free(donald);
</code></pre>
<h3 class="subtitle is-4">Implementazione lista in C</h3>
<p>Le liste sono strutture dati di natura dinamica, hanno due operazioni che sono inserimento (push()) e prelievo (pop()).
  Per creare una lista useremo gli Struct e l'allocazione dinamica.
</p>
<pre><code class="language-c">
#include "client.h"

//definizione di tipo 'l_node' usato per rappresentare i nodi

typedef struct _node{
  unsigned int id;
  client person;
  struct _node *next;
} l_node;

//definizione del tipo list_cl

typedef struct{
  l_node *head;
  l_node *tail;
} list_cl;

#define L_EMPTYLIST_CL {NULL,NULL}
</code></pre>
<p>Definizione di una lista vuota:</p>
<pre><code class="language-c">
//Variabile utilizzabile soltanto durante la definizione
list_cl class=L_EMPTYLIST_CL; 
</code></pre>
<pre><code class="language-c">
(Inside cl_list.h)
//Operazioni sulla lista
list_cl l_add_cl(list_cl l, client p); //dichiarazione
client l_rem_cl(list_cl l); //rimozione
//oppure
list_cl l_rem_cl(list_cl l, client *p);

(Still inside client.h)

//definizione del tipo 'client'
typedef struct{
  char cf[16]; //codice fiscale
  char *first_name;
  char *last_name;
  address adr; //tipo definito altrove
} client;
</code></pre>
<p>Eseguire esercizi A.9:</p>
<button @click="openCard('Es_A9')" class="button is-warning">Show Es. A.9</button>
<div :style="[Es_A9 === false ? 'display:none;' : '']">
  <p>Implementare le seguenti funzioni sul dato list_cl:</p>
  <ol>
    <li>list_cl l_add_cl(list_cl l, client p): aggiunge il cliente p in coda alla
lista l; restituisce la lista stessa, la lista vuota in caso di errore;</li>
    <li>client l_rem_cl(list_cl l): restituisce il cliente in testa alla lista l, il cliente
vuoto se la lista è vuota;</li>
    <li>int l_is_empty(list_cl l) restituisce 1 se e solo se la lista l è vuota;</li>
    <li>list_cl l_clear(list_cl l) rimuove tutti gli elementi dalla lista l
rilasciando le risorse allocate per essi; restituisce la lista vuota;</li>
    <li>int l_length(lists_cl l) restituisce il numero di elementi nella lista l.</li>
  </ol>
</div>
  </div>


</template>
<script>
import Prism from "prismjs";
import "../../node_modules/prismjs/components/prism-c";
import "prismjs/themes/prism-tomorrow.css"; 
export default {
  name: "SoLabPage",
  data() {
    return {
      Es_1: false,
      Es_A9:false,
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
        case 'Es_A9':
          this.Es_A9= !this.Es_A9;
          console.log(this.Es_A9);
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