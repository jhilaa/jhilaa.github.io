joueurActuel = "joueur1"
nbAllumettes = 50
tabAllumettes = []
for i in range(nbAllumettes):
    tabAllumettes.append("o")


def printAllumettes():
    print((" ").join(tabAllumettes))
    print()


def changeJoueur(joueurActuel):
    if joueurActuel == "joueur1":
        return "joueur2"
    else:
        return "joueur1"


def retirerAllumettes(nbAllumettesARetirer):
    for i in range(nbAllumettesARetirer):
        tabAllumettes.pop()


printAllumettes()

while(len(tabAllumettes) > 0):
    nbAllumettesARetirer = 0
    while(nbAllumettesARetirer <= 0 or nbAllumettesARetirer > 6 or nbAllumettesARetirer > len(tabAllumettes)):
        print(joueurActuel + ", entrez un nombre de jeton à retirer : ")
        nbAllumettesARetirer = int(input())
    retirerAllumettes(nbAllumettesARetirer)
    printAllumettes()
    if (len(tabAllumettes) > 0):
        joueurActuel = changeJoueur(joueurActuel)

print(joueurActuel + ", vous avez perdu!")
