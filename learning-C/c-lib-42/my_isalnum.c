int my_isalnum(char key) //checks for alphanumeric
{
    if((key >= '0' && key <= '9') || (key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z'))
    {
        return 1;
    }
    return 0;
}

/*
int main(void)
{
    char datarde;
    datarde = -1;

    while (datarde != 127)
    {
        if (my_isalnum(datarde) == 1)
            printf("[%c]\n", datarde);
        datarde++;
    }
}
*/