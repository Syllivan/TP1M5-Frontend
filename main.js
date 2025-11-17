// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
   
    console.log('Le DOM est prêt. Lancement du fetch...');

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            console.log('Données reçues :', data);

            // MISE À JOUR DU SERVEUR (SRV-01)
            const serveurElement = document.getElementById('statut-serveur-principal');
            const srvStatus = String(data.srv01 || '').trim();

            if (serveurElement) {
                serveurElement.textContent = srvStatus;
                // Texte vert si 'En Ligne', rouge sinon (Éteinte ou autre)
                if (srvStatus === 'En Ligne') {
                    serveurElement.style.color = 'green';
                } else {
                    serveurElement.style.color = 'red';
                }
            }

            // MISE À JOUR DE LA CAMÉRA (CAM-01)
            const cameraElement = document.getElementById('statut-camera-1');
            if (cameraElement) {
                cameraElement.textContent = data.cam01;
            }
        });

    console.log('Fin du script principal (Le fetch est parti, mais pas encore revenu)');
});
// ...existing code...