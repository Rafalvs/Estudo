#include <stdlib.h>
#include <string.h>
#include <stdio.h>

static char *blehg(void)
{
    char *b;
    b = malloc(30 * sizeof(char));
    memset(b, 'i', 29);
    b[29] = '\0';
    return b;
}

char *arhg(void)
{
    char a[30];
    memset(a, 'v', 29);
    a[29] = '\0';
    return 0;
}

int main (void)
{
    char *a;
    a = blehg();
    free(a);
    printf("a = %s\n", a);
}