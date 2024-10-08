#include "my_lib.h"

void my_bzero(char *s, size_t n) //function erases the data in the n bytes by writing zeros (bytes containing '\0') to that area
{                                
    char *p = s;
    size_t i;
    i = 0;

    while(i < n)
    {
        *(p + i) = '\0';  //0x0f0de0
      //p[i] = '\0';      //l
        i++;
    }
}

/* 
int main(void)
{
    char str[6] = "lacto";
    printf("%s\n", str);
    my_bzero(str, 3);
    write (1, str, 5);
    write (1, "\n", 1);
} 
*/