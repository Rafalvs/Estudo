"""
4 - Crie um algoritmo que leia três números some 5 aos seus valores e mostre os
valores resultantes maiores que 10.
"""

x = int(input("Numero: "))
y = int(input("Numero: "))
z = int(input("Numero: "))
a = x + 5
b = y + 5
c = z + 5
if(a > 10):
    if(b > 10):
        if(c > 10):
            print(a, b, c)