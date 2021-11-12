# coding: utf-8

from tkinter import *

fenetre = Tk()


def play(i):
    print(str(i))
    print(buttons[1])
    print("buttons : " + str(len(buttons)))


def rewrite(o):
    o.text = "#"


buttons = []


class MyButton(Button):
    def __init__(self, master, index, **kwargs):
        Button.__init__(self,  **kwargs)

    def update(self):
        setattr(self, "text", "8")


for i in range(15):
    button = MyButton(master=fenetre,
                      index=i,
                      text=str(i),
                      bg="#d3d3d3",
                      activeforeground="#e8e8e8",
                      borderwidth=1,
                      height=2,
                      width=4,
                      # command=lambda: MyButton["text"]="Im not button"
                      command=lambda i=i: play(i+1)
                      #command=lambda: button.update()
                      ).grid(row=1, column=i)
    buttons.append(button)
print("--------------")
print("buttons : " + str(len(buttons)))
print(fenetre.winfo_children())
fenetre.mainloop()
