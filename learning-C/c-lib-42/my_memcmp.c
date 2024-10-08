#include "my_lib.h"

int my_memcmp(void *s1, void *s2, size_t n) //compares first n bytes of memory s1 n s2
{
    unsigned char *p = s1;
    unsigned char *d = s2;

    while(n > 0)
    {
        if(*p != *d)
        {
            return(*p - *d);
        }
        n--;
        p++;
        d++;
    }
    return 0;
}

/* 
int main (void)
{
   char str1[15] = "stinger";
   char str2[15] = "vandal";
   int ret;

   ret = my_memcmp(str1, str2, 5);

   printf("%d", ret);
   
   return(0);
}
*/