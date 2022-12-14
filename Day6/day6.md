# --- Jour 6 : Problème de réglage ---

## Ressource

https://adventofcode.com/2022/day/6

## Enoncé

Les préparatifs sont enfin terminés ; vous et les elfes quittez le camp à pied et commencez à vous diriger vers le bosquet de fruits étoilés .

Alors que vous vous déplacez dans les sous-bois denses, l'un des elfes vous donne un appareil portable . Il dit qu'il a de nombreuses fonctionnalités sophistiquées, mais la plus importante à mettre en place en ce moment est le système de communication .

Cependant, parce qu'il a entendu dire que vous aviez une expérience significative dans les systèmes basés sur le signal , il a convaincu les autres elfes qu'il serait acceptable de vous donner leur seul appareil défectueux - vous n'aurez sûrement aucun problème à le réparer .

Comme s'il s'inspirait d'un timing comique, l'appareil émet quelques étincelles colorées .

Pour pouvoir communiquer avec les Elfes, l'appareil doit se verrouiller sur leur signal . Le signal est une série de caractères apparemment aléatoires que l'appareil reçoit un par un.

Pour réparer le système de communication, vous devez ajouter un sous-programme à l'appareil qui détecte un marqueur de début de paquet dans le flux de données. Dans le protocole utilisé par les Elfes, le début d'un paquet est indiqué par une séquence de quatre caractères tous différents .

L'appareil enverra à votre sous-programme un tampon de flux de données (votre entrée de puzzle); votre sous-programme doit identifier la première position où les quatre derniers caractères reçus étaient tous différents. Plus précisément, il doit indiquer le nombre de caractères depuis le début du tampon jusqu'à la fin du premier marqueur à quatre caractères.

Par exemple, supposons que vous receviez le tampon de flux de données suivant :

mjqjpqmgbljsphdztnvjfqwrcgsmlb

Une fois les trois premiers caractères ( mjq) reçus, il n'y a pas encore eu suffisamment de caractères reçus pour trouver le marqueur. La première fois qu'un marqueur peut se produire, c'est après la réception du quatrième caractère, ce qui fait des quatre caractères les plus récents mjqj. Parce que jse répète, ce n'est pas un marqueur.

La première fois qu'un marqueur apparaît, c'est après l' arrivée du septième caractère. Une fois que c'est fait, les quatre derniers caractères reçus sont jpqm, qui sont tous différents. Dans ce cas, votre sous-programme doit rapporter la valeur 7, car le premier marqueur de début de paquet est terminé après le traitement de 7 caractères.

Voici quelques exemples supplémentaires :

bvwbjplbgvbhsrlpgdmjqwftvncz: premier marqueur après caractère5

nppdvjthqldpwncqszvftbrmjlhg: premier marqueur après caractère6

nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: premier marqueur après caractère10

zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: premier marqueur après caractère11

## --- Première partie ---

Combien de caractères doivent être traités avant que le premier marqueur de début de paquet ne soit détecté ?

## --- Deuxième partie ---

Le système de communication de votre appareil détecte correctement les paquets, mais ne fonctionne toujours pas. Il semble qu'il doive également rechercher des messages .

Un marqueur de début de message est comme un marqueur de début de paquet, sauf qu'il se compose de 14 caractères distincts au lieu de 4.

Voici les premières positions des marqueurs de début de message pour tous les exemples ci-dessus :

mjqjpqmgbljsphdztnvjfqwrcgsmlb: premier marqueur après caractère19

bvwbjplbgvbhsrlpgdmjqwftvncz: premier marqueur après caractère23

nppdvjthqldpwncqszvftbrmjlhg: premier marqueur après caractère23

nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: premier marqueur après caractère29

zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: premier marqueur après caractère26

Combien de caractères doivent être traités avant que le premier marqueur de début de message ne soit détecté ?