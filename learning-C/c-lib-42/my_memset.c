void *my_memset(void *s, int c, size_t n) //fills the first n bytes with the constant byte c
{
    unsigned char *p = s;
    while(n > 0)
    {
       *p = (unsigned char)c;
       p++;
       n--;
    }
    return s;
}