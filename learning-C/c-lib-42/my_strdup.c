#include "my_lib.h"

 char *my_strdup(const char *s) //duplicate strings
{
    int len;
    char *dup;
    char *dup_off;

    len = my_strlen(s) + 1;
    dup = (char *)my_calloc(len, sizeof(char));

    if(dup == NULL)
    return((char *)NULL);

    dup_off = dup;
    while(*s)
    {
        *dup_off = *s;
        dup_off++;
        s++;
    }
    return(dup);
}

/*
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
*/