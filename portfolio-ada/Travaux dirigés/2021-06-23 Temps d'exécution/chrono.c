/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
#include <time.h>

int main()
{
    float somme (int arg1, int arg2) {
    return arg1 + arg2;}
    float tempsTotal = 0;
    
    float temps;
    clock_t t1, t2;
 
    t1 = clock();
    int i;
 
    // Ton programme
     for (i = 0; i<50; i++) {    
        t2 = clock();
        temps = (float)(t2-t1)/CLOCKS_PER_SEC;
        tempsTotal +=temps;
        printf("temps = %f\n", temps)  ;   
    }
    printf("temps = %f\n", temps);
    return 0;
}
``