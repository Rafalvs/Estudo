"""
5 - Elabore um algoritmo que leia três números some cinco ao menor valor e
mostre o resultado.
"""

x = int (input("digite um numero: "))
y = int (input("digite um numero: "))
z = int (input("digite um numero: "))
if x < y:
    if x < z:
        x = x + 5
        print (x)
    else:
        print (z)
else:
    if y < z:
        y = y + 5
        print (y)
    else:
        z = z + 5
        print (z)
