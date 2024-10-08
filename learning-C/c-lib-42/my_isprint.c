int my_isprint(char key) //checks if its a printable character
{
    if(key >= 32 && key <= 126)
    {
        return 1;
    }
    return 0;
}