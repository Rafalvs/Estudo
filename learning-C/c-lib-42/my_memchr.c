// #include "my_lib.h"

void *my_memchr(const void *s, int c, size_t n) //transform n bytes in unsigned char
{
    unsigned char *p = (unsigned char *) s;
    unsigned char d = (unsigned char) c;

    while(n > 0)
    {
        if(*p != (unsigned char)d)
        {
            p++;
        }
        if(*p == (unsigned char)d)
        {
            return p;
        }
        n--;
    }
    return NULL;
}

/*
int main(void)
{
    char *lacto;
    lacto = "bacilo";
    char *result;
    result = my_memchr(lacto, 'x', 3);
    
    if (result == NULL)
        printf("resultado nulo\n");
    else
        printf("%s\n", result);
}
*/