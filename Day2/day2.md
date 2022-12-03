# --- Jour 2 : Pierre Papier Ciseaux ---

## Ressource

https://adventofcode.com/2022/day/2

## Enoncé

Les Elfes commencent à installer leur campement sur la plage. Pour décider quelle tente sera la plus proche du dépôt de collations, un tournoi géant Pierre Papier Ciseaux est déjà en cours.

Rock Paper Scissors est un jeu entre deux joueurs. Chaque jeu contient de nombreux tours; à chaque tour, les joueurs choisissent chacun simultanément l'un des rochers, papiers ou ciseaux en utilisant une forme de main. Ensuite, un gagnant pour ce tour est sélectionné : Rock bat Scissors, Scissors bat Paper et Paper bat Rock. Si les deux joueurs choisissent la même forme, le tour se termine à la place par un match nul.

Appréciant votre aide hier, un elfe vous donne un guide de stratégie crypté (votre entrée de puzzle) qui, selon lui, vous aidera à gagner. "La première colonne est ce que votre adversaire va jouer : Apour la pierre, Bpour le papier et Cpour les ciseaux. La deuxième colonne--" Soudain, l'elfe est appelé pour aider avec la tente de quelqu'un.

La deuxième colonne, raisonnez-vous , doit être ce que vous devez jouer en réponse : Xpour la pierre, Ypour le papier et Zpour les ciseaux. Gagner à chaque fois serait suspect, donc les réponses doivent avoir été soigneusement choisies.

Le vainqueur de tout le tournoi est le joueur avec le score le plus élevé. Votre score total est la somme de vos scores pour chaque tour. Le score d'un seul tour est le score de la forme que vous avez sélectionnée (1 pour la pierre, 2 pour le papier et 3 pour les ciseaux) plus le score du résultat du tour (0 si vous avez perdu, 3 si le tour était un match nul , et 6 si vous avez gagné).

Puisque vous ne pouvez pas être sûr si l'elfe essaie de vous aider ou de vous tromper, vous devez calculer le score que vous obtiendriez si vous deviez suivre le guide stratégique.

Par exemple, supposons que l'on vous ait donné le guide stratégique suivant :

A Y

B X

C Z

Ce guide stratégique prédit et recommande ce qui suit :

Au premier tour, votre adversaire choisira Rocher ( A), et vous devriez choisir Papier ( Y). Cela se termine par une victoire pour vous avec un score de 8 (2 parce que vous avez choisi Papier + 6 parce que vous avez gagné).
Au deuxième tour, votre adversaire choisira Papier ( B), et vous devrez choisir Rocher ( X). Cela se termine par une perte pour vous avec un score de 1 (1 + 0).
Le troisième tour est un match nul avec les deux joueurs choisissant Ciseaux, vous donnant un score de 3 + 3 = 6 .
Dans cet exemple, si vous deviez suivre le guide stratégique, vous obtiendriez un score total de 15(8 + 1 + 6).

## --- Deuxième partie ---

Quel serait votre score total si tout se passait exactement selon votre guide stratégique ?

## --- Deuxième partie ---

L'elfe finit d'aider avec la tente et se faufile vers vous. "Quoi qu'il en soit, la deuxième colonne indique comment le tour doit se terminer : Xsignifie que vous devez perdre, Ysignifie que vous devez terminer le tour par un match nul et Zsignifie que vous devez gagner. Bonne chance !"

Le score total est toujours calculé de la même manière, mais vous devez maintenant déterminer quelle forme choisir pour que le tour se termine comme indiqué. L'exemple ci-dessus ressemble maintenant à ceci :

Au premier tour, votre adversaire choisira Rock ( A), et vous avez besoin que le tour se termine par un match nul ( Y), donc vous choisissez également Rock. Cela vous donne un score de 1 + 3 = 4 .
Au deuxième tour, votre adversaire choisira Papier ( B), et vous choisissez Roche donc vous perdez ( X) avec un score de 1 + 0 = 1 .
Au troisième tour, vous vaincrez les ciseaux de votre adversaire avec Rock pour un score de 1 + 6 = 7 .
Maintenant que vous déchiffrez correctement le guide de stratégie ultra top secret, vous obtiendrez un score total de 12.

En suivant les instructions de l'elfe pour la deuxième colonne, quel serait votre score total si tout se passait exactement selon votre guide stratégique ?