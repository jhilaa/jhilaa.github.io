/*C program to guess a random number.*/
 
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
 
 
int main()
{
    int random_genNo=0,count=0,num;
    int stime;
    long ltime;
 
    //initialise srand with current time, to get random number on every run
    ltime = time(NULL);
    stime = (unsigned) ltime/2;
    srand(stime);
 
    //generate random number
    random_genNo=rand()%10;
 
    //run infinite loop
    while(1)
    {
 
        //read number from user
        printf("\n\nTrouvez le nombre entre 1 et 10 : ");
        scanf("%d",&num);
 
        //compare entered number with generated number
 
        if(random_genNo==num){
            printf("Bravo vous avez trouvé le nombre mystère.");
            break;
        }
        else if(random_genNo<num){
            printf("Le nombre mystère est plus petit...");
        }
        else if(random_genNo>num){
            printf("Le nombre mystère est plus grand...");
        }

    }
     
    return 0;
}