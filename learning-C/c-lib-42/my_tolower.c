int *my_tolower(char *c, size_t n) //transforms any uppercase letter to an lowecase
{
    int i;
    i = 0;

    while(i < n && c[i] != '\0')
    {
        if(c[i] >= 'A' && c[i] <= 'Z')
        {
            c[i] = c[i] - 'a' + 'A';
        }
        else if(c[i] >= 'a' && c[i] <= 'z' || c[i] >= '0' && c[i] <= '9')
        {
            c[i] = c[i];
        }

        i++;
    }
}