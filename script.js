

/*
function fetchescapeGamejson(){
    fech('escapeGame.json')
    .then(data=>{
        console.log(data);
    })
    .cath(error=>console.error('error fetching contacts':,
     error));
    }
    */
        fetch('escapeGame.json')
            .then(response => response.json())
            //Attente de la reponse à une promese JS qu'on transformera en escapeGame
        
            .then(data => {
                console.log(data)
                console.log(data.entreprise.noncommercial);
                //Traitement réel des données en utilisant "data"

            })
   

    


       
