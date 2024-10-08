char *my_strstr(const char *haystack, const char *needle) //find the first occurence of substring needle in the string haystack
{
    size_t i;
    size_t j;

    i = 0;
    j = 0;

    if(*needle == '\0')
    return((char *)haystack);
    
    while(haystack[i] != '\0')
    {
        while(haystack[i] == needle[j])
        {
            i++;
            j++;
            if(needle[j] == '\0')
                return((char *)&haystack[i - j]);
        }
        i = i - j + 1;
        j = 0;
    }
    return(NULL);
}

/*
int main (void)
{
    char acdc[20] = "highway to hell";
    char *result;

    result = my_strstr(acdc, "to");
    printf("%s\n", result);
    (void) result;
    return 0;
}
*/