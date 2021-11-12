# coding: utf-8

from tkinter import *

fenetre = Tk()

# label = Label(fenetre, text="Hello World")
# label.pack()


def play(ligne, colonne):
    print("ligne " + str(ligne))


buttons = []
for ligne in range(7):
    for colonne in range(7):
        ButtonText = ligne*colonne
        button = Button(fenetre, text="x",
                        # bg="#383838",
                        # activeforeground="#454545",
                        borderwidth=1,
                        height=2,
                        width=4,
                        command=lambda: play(ligne, colonne)
                        ).grid(row=ligne+1, column=colonne+1)
        buttons.append(button)

fenetre.mainloop()
