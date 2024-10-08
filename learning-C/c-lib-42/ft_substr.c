#include "libft.h"

char *ft_substr(char const *s, unsigned int start, size_t len)
{
	unsigned int i;
	size_t count;
	char *cpy;

	if(s == NULL)
		return(NULL);

	if(start > my_strlen(s))
	{
		if (!(cpy = my_calloc(sizeof(char))))
			return(NULL);
		cpy[0] = 0;
		return(cpy);
	}

	if(!(cpy = my_calloc((len + 1) *sizeof(char))))
		return(NULL);
	i = start;
	count = 0;

	while(s[i] && count < len)
	{
		cpy[count] = s[i];
		count++;
		i++;
	}
	cpy[count] = '\0';
	return(cpy);
}