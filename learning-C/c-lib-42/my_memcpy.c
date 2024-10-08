void *my_memcpy(void *dest, const void *src, size_t n) //function copys n bytes from src to dest
{
    char *csrc = (char *)src;
    char *cdest = (char *)dest;
    int i;
    i = 0;

    while(i < n)
    {
        cdest[i] = csrc[i];
        i++;
    }
}