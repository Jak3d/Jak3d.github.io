<template>
    <div class="content is-medium">
        <h2 class="subtitle is-3"> Lez 3?! </h2>
        <p>
            Usando il valore di ptr si può accedere al valore memorizzato nella variabile i, pur essendo questo
            passaggio
            possibile, tale azione
            risulta più lento, in quanto esegue una multipla lettura. Più sono i puntatori, più è lunga la "catena"
            aumentando il tempo
            necessario per leggere il valore della variabile. <br> In ogni modo bisogna utilizzare la deferenzazione per
            ottenere
            il valore in sé. <br>
            int a = *ptr + 20 (in Questo caso avremmo aumentato il valore di i di 20; abbiamo derefenziato ptr con *).
        </p>
        <h2 class="subtitle is-4"> Operazioni di controllo flusso </h2>
        <p>
            DA SISTEMARE AL MOMENTO E' ORRIBILE <br>
            While(expt){ <br> ..... <br> }
            do { <br> .... <br> } <br> while(exp);
            for (expr;expr;expr) {}

            Notare che un'espressione con valore 0 vale False, un'espressione con valore diverso da 0 vale True.
            While(1){} //causerà un ciclo infinito.
            While(a){} //ciclo finchè a != 0.
            While(a=n){} //assegnamento, finche a=n è diverso da 0.
            for(i=0; no_registered(); i++){}.
        </p>
        <p>Example: <br>
            if(ptr!= NULL && *ptr==10){<br>
            ... <br>
            } <br>
            else{ <br>
            ... <br>
            } <br>
        </p>
        <code>
        Switch(expr){
            case a: ...;
            } ;
    </code>
        <p>
            MAI USARE: <br>
            goto label; <br>

            label: .....
        </p>
        <p>
            .... break; //comporta l'uscita dal ciclo interno attivo (Non esce da tutti i cicli annidati)
        </p>
        <p>
            Quando viene dichiarata una stringa (char *str ='Hello World') essendo un array di char, viene aggiunto
            anche
            il carattere di fine stringa: <strong> "\0" </strong> come ultimo carattere della stringa. <br>
            Ogni carattere della stringa avrà il corrispondente valore <strong> ASCII</strong> per indicarne la lettere
            o il simbolo.
            char *str "Punterà" <strong>Solo</strong> al primo carattere della stringa; per ottenere H sarà necessario
            deferenziare
            la variabile mentre per i successivi bisognerà <strong>sommare</strong> la posizione richiesta
            all'indirizzo. <br>
            *str + 6 == W; //Darà True
        </p>
        <p>
            Esercizio: Srivere un programma che analizza un testo carattere per carattere e in caso trovi un carattere
            maiuscolo, la trasforma in minuscolo.
        </p>
    </div>
</template>
<script>
export default {
    name: 'SoLabPage'
}
</script>