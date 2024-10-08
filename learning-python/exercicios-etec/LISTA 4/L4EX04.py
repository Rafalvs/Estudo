"""
4 - Elabore um algoritmo que leia três números e mostre o maior.
"""

x = int (input("digite um numero: "))
y = int (input("digite um numero: "))
z = int (input("digite um numero: "))
if x > y & x > z:
    print (x)
else:
    if y > z:
        print (y)
    else:
        print (z)
