int my_strcmp(const char *s1, const char *s2) //compares the two strings s1 n s2
{
        if(*s1 == *s2)
        {
            return 0;
        }
        

    while(*s1 != '\0' && *s2 != '\0')
    {
        s1++;
        s2++;

        if(*s1 != *s2)
        {
            return *s1 - *s2;
        }
    }
    return 0;
}

/*
int main(void)
{
    char nirvana[10] = "marigold";
    char norvana[10] = "lithium";
    int result;
    result = my_strcmp(nirvana, norvana);
    printf("%d", result);
    return 0;
}
*/