# Mettre à jour le dictionnaire

Si vous souhaitez mettre à jour le dictionnaire, ou y ajouter des mots, il faut modifier le fichier data/mots.txt. Ce fichier comporte un mot par ligne, et sert de base pour la génération des autres fichiers.

Pour générer les fichiers listeMotsProposables, qui servent de dictionnaire, il faut appeler la commande suivante, depuis la racine de l'instance :

```sh
node utils/nettoyage.js
```

Ce script va vérifier la liste des mots, ne garder que les mots acceptés dans les règles, les formater correctement (les mettre en majuscule, et enlevé les accents), puis les découper par longueur et par initiale, dans les fichiers ts/mots/listeMotsProposables.\*.

Liste des règles suivi par les mots :

- Le mot est entre 4 et 12 lettres
