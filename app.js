const express = require('express');
const app = express();
const port = 3000;
let cont = 0;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
})

app.get('/bacheca', (req, res) => {
    const posts = [
        {
            titolo: "Introduzione a JavaScript",
            contenuto: "In questo post esploreremo le basi del linguaggio JavaScript, dalla sintassi ai concetti fondamentali come variabili, funzioni e loop.",
            immagine: "public/ciambbellone.jpeg",
            tags: ["JavaScript", "Programmazione", "Tutorial"]
        },
        {
            titolo: "Guida alle variabili in JavaScript",
            contenuto: "Le variabili in JavaScript sono fondamentali per memorizzare e manipolare i dati. Vediamo come dichiararle e utilizzarle.",
            immagine: "public/cracker_barbabietola.jpeg",
            tags: ["JavaScript", "Variabili", "Guida"]
        },
        {
            titolo: "Funzioni in JavaScript: Una panoramica",
            contenuto: "Le funzioni sono uno degli elementi chiave in JavaScript. In questo articolo, esamineremo come definire e invocare una funzione.",
            immagine: "public/pane_fritto_dolce.jpeg",
            tags: ["JavaScript", "Funzioni", "Programmazione"]
        },
        {
            titolo: "I loop in JavaScript",
            contenuto: "I loop permettono di ripetere un'azione più volte. In questo post, vedremo i principali tipi di loop in JavaScript, come il for e il while.",
            immagine: "public/pasta_barbabietola.jpeg",
            tags: ["JavaScript", "Loop", "Controllo del flusso"]
        },
        {
            titolo: "Lavorare con le API in JavaScript",
            contenuto: "Le API (Application Programming Interface) sono uno strumento potente per integrare dati esterni nelle tue applicazioni. Scopriamo come usarle in JavaScript.",
            immagine: "public/torta_paesana.jpeg",
            tags: ["JavaScript", "API", "Web Development"]
        }
    ];

    posts.forEach((curePost) => {
        if(cont === 6){
            cont = 1;
        }
        cont += 1;
        
    })

    console.log(cont);

    const data = {
        posts: posts,
        totale: posts.length,
        Conteggio: cont,
    }
    res.json(data);
})


app.listen(port, () => {
    console.log("il server è in ascolto");
})