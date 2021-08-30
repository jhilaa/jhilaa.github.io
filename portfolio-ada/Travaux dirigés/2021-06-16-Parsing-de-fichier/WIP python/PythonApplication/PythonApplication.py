
ingredients = ["Pâtes","Crème","Oeuf","Sel","Poivre","Lardon","Oignon"]
print("Il y a " + str(len(ingredients)) + " ingrédients dans la recette." )

for ingredient in ingredients : print (ingredient)
print ("\n\n")
for ingredient in sorted(ingredients) : print (ingredient)
print ("\n\n")
for i in range(0,len(ingredients)-1):
    print(str(i) + " " + ingredients[i])
print ("\n\n")