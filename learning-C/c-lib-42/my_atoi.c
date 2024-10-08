int my_atoi(const char *nptr) //ascii to integer
{
    int i;
    int res;
    res = 0;
    i = 0;

    while(nptr[i] != '\0')
    {
        res = res * 10 + nptr[i] - '0';
        i++;

    }
    return res;
}

/*
int main(void)
{
    char adaga[10] = "1234";
    int result;
    result = my_atoi(adaga);
    printf("%d", result);
    return 0;
}
*/