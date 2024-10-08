#ifndef MY_LIB_H
#define MY_LIB_H

#include <unistd.h>
#include <stdlib.h>
#include <stddef.h>

int atoi(const char *nptr);
void my_bzero(char *s, size_t n);
void *calloc(size_t nmemb, size_t size);
int my_isalnum(char key);
int my_isalpha(char key);
int my_isprint(char key);
void *my_memchr(const void *s, int c, size_t n);
int my_memcmp(void *s1, void *s2, size_t n);
void *my_memcpy(void *dest, const void *src, size_t n);
void *my_memmove(void *dest, const void *src, size_t n);
void *my_memset(void *s, int c, size_t n);
char *my_strcat(char *dest, const char *src, size_t n);
char *strchr(const char *s, int c);
int my_strcmp(const char *s1, const char *s2);
char *my_strcpy(char *dest, const char *src, size_t n);
char *strdup(const char *s);
size_t my_strlen(const char *s);
char *strstr(const char *haystack, const char *needle);
int *my_tolower(char *c, size_t n);
int *my_toupper(char *c, size_t n);

#endif