# --- Jour 5 : Stocks de ravitaillement ---

## Ressource

https://adventofcode.com/2022/day/5

## Enoncé

L'expédition peut partir dès que les derniers approvisionnements ont été déchargés des navires. Les fournitures sont stockées dans des piles de caisses marquées , mais comme les fournitures nécessaires sont enterrées sous de nombreuses autres caisses, les caisses doivent être réorganisées.

Le navire dispose d'une grue de chargement géante capable de déplacer des caisses entre les piles. Pour s'assurer qu'aucune des caisses ne soit écrasée ou ne tombe, le grutier les réorganisera en une série d'étapes soigneusement planifiées. Une fois les caisses réarrangées, les caisses souhaitées seront en haut de chaque pile.

Les Elfes ne veulent pas interrompre la grutier pendant cette délicate opération, mais ils ont oublié de lui demander quelle caisse finira où, et ils veulent être prêts à les décharger au plus vite pour qu'ils puissent embarquer.

Ils ont cependant un dessin des piles de caisses de départ et de la procédure de réarrangement (votre entrée de puzzle). Par exemple:

    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2

Dans cet exemple, il y a trois piles de caisses. La pile 1 contient deux caisses : la caisse Zest en bas et la caisse Nest en haut. La pile 2 contient trois caisses ; de bas en haut, ce sont les caisses M, Cet D. Enfin, la pile 3 contient une seule caisse, P.

Ensuite, la procédure de réarrangement est donnée. A chaque étape de la procédure, une quantité de caisses est déplacée d'une pile à une pile différente. Dans la première étape de la procédure de réorganisation ci-dessus, une caisse est déplacée de la pile 2 à la pile 1, ce qui donne cette configuration :

[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 

Dans la deuxième étape, trois caisses sont déplacées de la pile 1 à la pile 3. Les caisses sont déplacées une par une , de sorte que la première caisse à déplacer ( D) se retrouve sous les deuxième et troisième caisses :

        [Z]
        [N]
    [C] [D]
    [M] [P]
 1   2   3

Ensuite, les deux caisses sont déplacées de la pile 2 à la pile 1. Encore une fois, comme les caisses sont déplacées une par une , la caisse Cse retrouve sous la caisse M:

        [Z]
        [N]
[M]     [D]
[C]     [P]
 1   2   3

Enfin, une caisse est déplacée de la pile 1 à la pile 2 :

        [Z]
        [N]
        [D]
[C] [M] [P]
 1   2   3

Les Elfes ont juste besoin de savoir quelle caisse finira sur chaque pile ; dans cet exemple, les caisses du haut sont Cdans la pile 1, Mdans la pile 2 et Zdans la pile 3, vous devez donc les combiner et donner le message aux Elfes CMZ.

## --- Première partie ---

Une fois la procédure de réarrangement terminée, quelle caisse se retrouve au-dessus de chaque pile ?

## --- Deuxième partie ---

Alors que vous regardez le grutier réorganiser les caisses avec expertise, vous remarquez que le processus ne suit pas votre prédiction.

Un peu de boue recouvrait l'écriture sur le côté de la grue, et vous l'essuyez rapidement. La grue n'est pas une CrateMover 9000 - c'est une CrateMover 9001 .

Le CrateMover 9001 se distingue par de nombreuses fonctionnalités nouvelles et intéressantes : la climatisation, des sièges en cuir, un porte-gobelet supplémentaire et la possibilité de ramasser et de déplacer plusieurs caisses à la fois .

En considérant à nouveau l'exemple ci-dessus, les caisses commencent dans la même configuration :

    [D]    

[N] [C]    

[Z] [M] [P]

 1   2   3 

Déplacer une seule caisse de la pile 2 à la pile 1 se comporte comme avant :

[D]        

[N] [C]    

[Z] [M] [P]

 1   2   3 

Cependant, l'action de déplacer trois caisses de la pile 1 à la pile 3 signifie que ces trois caisses déplacées restent dans le même ordre , ce qui donne cette nouvelle configuration :

        [D]

        [N]

    [C] [Z]

    [M] [P]

 1   2   3

Ensuite, lorsque les deux caisses sont déplacées de la pile 2 à la pile 1, elles conservent également leur ordre :

        [D]

        [N]

[C]     [Z]

[M]     [P]

 1   2   3

Enfin, une seule caisse est toujours déplacée de la pile 1 à la pile 2, mais maintenant c'est la caisse Cqui est déplacée :

        [D]

        [N]

        [Z]

[M] [C] [P]

 1   2   3

Dans cet exemple, le CrateMover 9001 a placé les caisses dans un ordre totalement différent : MCD.

Avant la fin du processus de réorganisation, mettez à jour votre simulation afin que les Elfes sachent où ils doivent se tenir pour être prêts à décharger les dernières fournitures. Une fois la procédure de réarrangement terminée, quelle caisse se retrouve au-dessus de chaque pile ?