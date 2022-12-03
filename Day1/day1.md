# --- Jour 1 : Comptage des calories ---

## Ressource

https://adventofcode.com/2022/day/1

## Enoncé

Les rennes du Père Noël mangent généralement de la nourriture de renne ordinaire, mais ils ont besoin de beaucoup d' énergie magique pour offrir des cadeaux à Noël. Pour cela, leur collation préférée est un type spécial de carambole qui ne pousse que dans la jungle profonde. Les Elfes vous ont emmené dans leur expédition annuelle dans le bosquet où poussent les fruits.

Pour fournir suffisamment d'énergie magique, l'expédition doit récupérer un minimum de cinquante étoiles d'ici le 25 décembre. Bien que les Elfes vous assurent que le bosquet regorge de fruits, vous décidez de prendre tous les fruits que vous voyez en cours de route, juste au cas où.

Collectez des étoiles en résolvant des énigmes. Deux puzzles seront mis à disposition chaque jour dans le calendrier de l'Avent ; le deuxième puzzle est déverrouillé lorsque vous terminez le premier. Chaque puzzle accorde une étoile . Bonne chance!

La jungle doit être trop envahie par la végétation et difficile à naviguer dans des véhicules ou accessible depuis les airs ; l'expédition des Elfes se fait traditionnellement à pied. Alors que vos bateaux approchent de la terre ferme, les Elfes commencent à faire l'inventaire de leurs provisions. Une considération importante est la nourriture - en particulier, le nombre de calories que chaque elfe transporte (votre entrée de puzzle).

Les Elfes notent à tour de rôle le nombre de Calories contenues par les différents repas, collations, rations, etc. qu'ils ont apportés avec eux, un élément par ligne. Chaque elfe sépare son propre inventaire de l'inventaire de l'elfe précédent (le cas échéant) par une ligne blanche.

Par exemple, supposons que les Elfes finissent d'écrire les Calories de leurs objets et se retrouvent avec la liste suivante :

1000
2000
3000

4000

5000
6000

7000
8000
9000

10000

Cette liste représente les Calories de la nourriture transportée par cinq Elfes :

Le premier Elfe transporte de la nourriture avec 1000, 2000, et 3000Calories, un total de 6000Calories.
Le deuxième elfe transporte un aliment avec des 4000calories.
Le troisième elfe transporte de la nourriture avec 5000et des 6000calories, un total de 11000calories.
Le quatrième Elfe transporte de la nourriture avec 7000, 8000, et 9000Calories, un total de 24000Calories.
Le cinquième elfe transporte un aliment avec des 10000calories.
Au cas où les Elfes auraient faim et auraient besoin de collations supplémentaires, ils doivent savoir à quel Elfe demander : ils aimeraient savoir combien de Calories sont transportées par l'Elfe qui en transporte le plus . Dans l'exemple ci-dessus, il s'agit 24000de (porté par le quatrième Elfe).

## --- Deuxième partie ---

Trouvez l'elfe transportant le plus de calories. Combien de calories au total cet elfe transporte-t-il ?

## --- Deuxième partie ---
Au moment où vous calculez la réponse à la question des elfes, ils ont déjà réalisé que l'elfe transportant le plus de calories de nourriture pourrait éventuellement manquer de collations .

Pour éviter cette situation inacceptable, les Elfes aimeraient plutôt connaître le total des Calories transportées par les trois premiers Elfes transportant le plus de Calories. De cette façon, même si l'un de ces elfes manque de collations, il a toujours deux sauvegardes.

Dans l'exemple ci-dessus, les trois premiers Elfes sont le quatrième Elfe (avec 24000Calories), puis le troisième Elfe (avec 11000Calories), puis le cinquième Elfe (avec 10000Calories). La somme des Calories portées par ces trois elfes est 45000.

Trouvez les trois meilleurs elfes transportant le plus de calories. Combien de calories ces elfes transportent-ils au total ?