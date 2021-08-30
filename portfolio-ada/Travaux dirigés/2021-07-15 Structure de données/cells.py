import curses

# Fonction à modifier 

def next_state (state):
    new_state=[]
    new_line=[]
    ###########################################
    # calcul de nombre de cellules vivantes autour
    #------------------------------------------
    # boucle sur les lignes du tableau
    for i in range(len(state)):
        new_cell=[]
        # pour chaque ligne, boucle sur chaque colonne (ie cellule de la ligne)
        for j in range(len(state[i])):
            cell_state=state[i][j]
            black_cells=0
            # parcours des cellules voisines pour compter le nombre de cellules "mortes"
            for a in range(i-1, i+2, 1):
                for b in range(j-1, j+2, 1):
                    if not (a==i and b==j) and a>-1 and b>-1 and a<= len(state)-1 and b<= len(state[i])-1 :
                        if state[a][b]=="O": 
                            black_cells=black_cells+1
            ###############################
            # à partir du nombr de cellules voisines vivantes et de l'état de la cellule
            # on détermine le nouvel état de la cellule
            #------------------------------
            if cell_state==0:
                black_cells=black_cells-1
            # on détermine l'état de la cellule pour la nouvelle génération
            if (black_cells==3):
                #new_cell=str(black_cells) #'O'
                new_cell='O'
            elif (black_cells==2):
                #new_cell=str(black_cells) #'state[i][j]
                new_cell=state[i][j]
            elif (black_cells<2 or black_cells>3):
                #new_cell=str(black_cells) #'.'
                new_cell='.'
            new_line.append(new_cell)
            new_cell=[]
        new_state.append(new_line)
        new_line=[]
    return new_state

# Fonction principale, que vous n'avez pas à modifier ;
# stdscr est l'objet qui représente l'écran dans curses
def main (stdscr):
    # On désactive le curseur de texte dans la fenêtre de curses
    curses.curs_set(False) 
    
    # On lit la grille initiale, modifiable dans cells.txt
    text_file = open("cells.txt", "r")
    state = text_file.read().splitlines()

    # Boucle de jeu :
    # Tant que l'input utilisateur est différent de "q", on reste dans le jeu
    key = " "
    while key != "q":
        # On vide l'écran
        stdscr.clear()

        # Préparation de l'affichage ligne par ligne
        for i in range(len(state)):
            for j in range(len(state[i])):
                #on est dans 1 cellule (i,j)
                # on boucle sur les 8 voisines

                if state[i][j] == "O":
                    stdscr.addstr(i, j, state[i][j]) #"O") # attention, curses met y avant x
                else :
                    stdscr                  tdscr.addstr(i, j, state[i][j]) #".")
        # Fonction qui affiche ce qu'on a préparé
        stdscr.refresh()
        
        # La fonction next_state() retourne le prochain état du jeu de la vie
        state = next_state(state)

        # Fonction qui attend un input utilisateur
        key = stdscr.getkey()

# Curses s'exécute au sein d'un wrapper, afin de ne pas perturber l'affichage du
# shell lorsqu'on ferme le programme
curses.wrapper(main)