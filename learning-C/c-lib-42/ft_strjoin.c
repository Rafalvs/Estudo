#include "libft.h"

char *ft_strjoin(char const *s1, char const *s2)
{
	size_t i;
	size_t j;
	char *cpy;

	if(s1 == NULL || s2 == NULL)
		return(NULL);

	i = my_strlen(s1);
	j = my_strlen(s2);

	if(!(cpy = my_calloc(((i + j) + 1) *sizeof(char))))
		return(NULL);

	i = 0;
	j = 0;

	while(s1[i])
	{
		cpy[i] = s1[i];
		i++;
	}

	while(s2[j])
	{
		cpy[i + j] = s2[j];
		j++;
	}
	cpy[i + j] = '\0';
	return(cpy);
}
