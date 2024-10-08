size_t my_strlen(const char *s) //checks the size of a string
{
    size_t i;
    i = 0;

    while(s[i] != '\0')
    {
        i++;
    }
//printa i
return i;
}