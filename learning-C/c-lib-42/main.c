#include "my_lib.h"
#include "my_strdup.c"
#include <stdio.h>

int main(void)
{
    char org[12] = "morango";
    char *dup;
    int len1;
    int len2;

    dup = my_strdup(org);
    len1 = my_strlen(org);
    len2 = my_strlen(dup);

    printf("String Original: '%s' (%d)\n",
            org,len1);
    printf("String Duplicada: '%s' (%d)\n",
            dup,len2);

    return(0);
}