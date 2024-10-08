"""
7 - Crie um algoritmo que leia três números e mostre seus valores em ordem
decrescente.
"""

x = int(input("digite um numero: "))
y = int(input("digite um numero: "))
z = int(input("digite um numero: "))
if x < y & x < z:
    if y < z:
        print(z, y, x)
    else:
        print(y, z, x)
else:
    if y < z:
        if x < z:
            print(z, x, y)
        else:
            print(x, z, y)
    else:
        if x < y:
            print(y, x, z)
        else:
            print(x, y, z)
