// Lien vers un fichier JSON ou l'URL d'une API externe

let apiUrl = 'escapeGame.json';
fetch(apiUrl)
    .then(response => response.json())
    // Attente de la réponse à une promesse JS qu'on transformera en escapeGame.
    .then(data => {
        console.log(data);
        console.log(data.entreprise.nomCommercial);
        const main = document.querySelector("main");
        const header = document.createElement('header');
        let myH1 = document.createElement("h1");
        myH1.textContent = data.entreprise.nomCommercial;
        main.appendChild(header);
        header.appendChild(myH1);
        // 
        let myPhrase = document.createElement("p");
        myPhrase.textContent = data.entreprise.phraseAccroche;
        main.appendChild(myPhrase);
        console.log(data.entreprise.phraseAccroche);
        //p
        //button
        let button = document.createElement("button");
        button.textContent = data.entreprise.texteAppelAction;
        main.appendChild(button);
        console.log(data.entreprise.texteAppelAction);
        //
        console.log(data.entreprise.avantagesClients);
        //ul
        let myUl = document.createElement("ul");
        main.appendChild(myUl);
        const Array = data.entreprise.avantagesClients;
        data.entreprise.avantagesClients.forEach(Element => {
            console.log(Element);
            //li
            const ListItem = document.createElement('li');
            ListItem.textContent = Element;
            myUl.appendChild(ListItem);
            console.log(ListItem);
            //element dans un tableau  
        });
        // Section
        let section = document.createElement("section");
        console.log(section);
       main.appendChild(section);
        section.setAttribute("id", "activites");
        //Activites
        const activites = data.entreprise.activites;
        console.log(data.entreprise.activites);
        console.log(activites);
        activites.forEach(element => {
            console.log(element.nom);
            //div
            const div = document.createElement("div");
            console.log(div);
            main.appendChild(div);

            //h2
            const h2 = document.createElement("h2");
            console.log(h2);
            h2.textContent = element.nom;
            div.appendChild(h2);
            //p
            const p = document.createElement("p");
            console.log(p);
            p.textContent = element.description;
            div.appendChild(p);
            // image
            const image = document.createElement("img");
            console.log(element.image);
            image.setAttribute('src', element.image);
            div.appendChild(image);
        });

        // Section temoignages

        let temoignagesSection = document.createElement("section");
        console.log(section);
      main.appendChild(temoignagesSection);
        temoignagesSection.setAttribute("id", "temoignages");
        //Temoignages
        const temoignages = data.entreprise.temoignages;
        console.log(data.entreprise.temoignages);
        console.log(temoignages);
        temoignages.forEach(element => {
            console.log(element.prenom);
            //div
            const div = document.createElement("div");
            console.log(div);
            temoignagesSection.appendChild(div);
            //h3
            const h3 = document.createElement("h3");
            console.log(h3);
            h3.textContent = element.prenom;
            div.appendChild(h3);
            //p
            let p = document.createElement("p");
            console.log(p);
            p.textContent = element.typeExperience;
            div.appendChild(p);
            p.textContent = element.commentaire;
            div.appendChild(p);
            // image
            const image = document.createElement("img");
            console.log(element.image);
            image.setAttribute('src', element.image);
            div.appendChild(image);
        });

        // Code JavaScript pour créer et afficher la carte
        // Coordonnées initiales et niveau de zoom
        var map = L.map('map').setView([45.74265220135835, 4.839034514782128], 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([45.74265220135835, 4.839034514782128]).addTo(map)
            .bindPopup('Coucou je suis Là!')
            .openPopup();


        // Traitement réel des données en utilisant "data"
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));// Gestion des erreurs
/*
   function fetchscapeGamejson() {
       fetch('escapeGame.json')
           .then(response => response.json())
           .then(data => {
              console.log(data);
           })
           .catch(error => console.error('Error fetching contacts:', error));
   }

   */