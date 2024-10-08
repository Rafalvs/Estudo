int my_isascii(char key) //checks for ascii
{
    if(key >= 0 && key <= 127)
    {
        return 1;
    }
    return 0;
}