/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
#include <time.h>

int main()
{
    float nbComplex() {
    int n = 25000;
    int i;
    int j;
    int storage;
    
    for (i=0; i < n; i++) {
        for (j=0; j < n; j++) {
            storage = i * j;}
        }
    }

    float tempsTotal = 0;
    float temps;
    clock_t t1, t2;
 
    t1 = clock();
    nbComplex();  
    t2 = clock();
    temps = (float)(t2-t1)/CLOCKS_PER_SEC;
    printf("temps = %f\n", temps)  ;   
    return 0;
}
