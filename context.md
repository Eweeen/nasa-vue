# Contexte du projet

Le projet cette fois-ci à réaliser, sera une application en lien avec le système solaire.
S'agissant essentiellement d'une application à destination pédagogique, il n'y aura nul besoin d'avoir de gestion de compte utilisateur et l'application ne fonctionnera que avec de la lecture de data issue d'une API.

Cette application devra utiliser la technologie Vue JS.
Il n'est pas attendu de réaliser une application backend.

# Résultats attendus

## Liste des astres

Une page listant l'ensemble des astres doit être disponible avec les fonctionnalités suivantes :

- Filtre sur des critères tels que si c'est une planète (isPlanet) ou non
- Filtre sur le fait d'avoir des lunes

## Page de l'astre

Une page affichant un astre :

- L'ensemble des infomations liées à l'astre doivent être affichées au sein de cette page.
- Si l'astre est une planète, possédant des lunes, un accès rapide vers ses lunes doit être disponible.

## Page du système solaire

Une page avec une repésentation graphique des astres de type planète :

- basé sur la distance de l'astre au soleil, vous devez réaliser une représentation graphique du résultat

## Page des favoris

Il doit être possible de spécifier des astres en tant que favoris et de le retirer de la liste des favoris.
Lorsque vous rajouter un astre en favori, une notification doit apparaître pour vous le signaler.

L'affichage des astres sur cette page réutilise l'affichage en liste de la page 'liste des astres'

# Evaluation

Au sein de votre livrable final, sera évalué :

- [x] la présence de l'intégralité des fonctionnalités demandées (5)
- la propreté du code (10)
  - [x] indentation du code
  - [x] propreté des commits
  - [x] nommage des variables
  - [x] structure des components
  - [x] absence de code superflu
- [x] un fichier README présentant ce dépot et comment l'installer (2)
- [x] le style. Nous ne faisons pas du css ou du sass ici mais c'est mieux quand c'est joli :) (1)

# Api

https://api.le-systeme-solaire.net/rest/bodies/
