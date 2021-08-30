
tabCoordonneesMines=[]
grille = []
largeur = 4
longueur = 4

def coordExiste(tableau, element):
	return element in tableau

def genererGrille(largeur, hauteur, nbMines):
	tabMines=[]
	##
	for n in range(nbMines):
		randomCoord = (random.randrange(0, hauteur-1), random.randrange(0, largeur-1))
		## 
		while randomCoord in tabCoordonneesMines:
			randomCoord = (random.randrange(0, hauteur-1), random.randrange(0, largeur-1))
		##
		tabCoordonneesMines.append(randomCoord)
	####
	for x in range(largeur):
		for y in range(hauteur):
			grille[x][y]=false or (x,y) in tabCoordonneesMines


def printGrille():
	for i in range len(grille[1])
