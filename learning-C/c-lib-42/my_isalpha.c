int my_isalpha(char key) //checks if its a letter from alphabet
{
    if((key >= 'A' && key <= 'Z') || (key >= 'a' && key <= 'z'))
    {
        return 1;
    }
    return 0;
}