npm install
npm run dev

Le projet étant relativement simple, j'ai opté pour une structure qui suit cette logique : une App en root du projet, un dossier pages, un dossier composants.

- pages : vues principales liées au routing
- components : composants réutilisables

Par manque de temps et afin de proposer un projet clair et à peu près terminé, je ne m'attaque pas au bonus Firestore. Dans le cas contraire, j'aurais ajouté un dossier services afin d'y mettre les fichiers nécessaires au fetching des données.

Concernant les données, j'ai décidé de ne pas proposer d'optimisation pour la page des détails, les données étant toutes récupérées même si elles ne sont pas encore affichées. Deux raisons à cela :
- A priori, ces données n'ont pas vocation à augmenter significativement, d'une manière qui justifierait de devoir implémenter une optimisation à ce niveau
- Cela permet une navigation fluide entre les cartes

La page ChallengeDetails aurait pu être décomposée en plusieurs composants réutilisables afin de gagner en clarté et lisibilité. Afin de ne pas dépasser les trois heures préconisées, je laisse ainsi, mais un découpage "bouton de retour", "boutons de navigation" et "carte" m'aurait semblé pertinent.

J'ai utilisé Material UI afin de me caler sur la librairie de votre stack technique. Si c'était ma première utilisation, j'ai cependant beaucoup utilisé Chakra UI qui sur bien des aspects est similaire.
