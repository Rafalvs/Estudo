"""
8. Desenvolva um algoritmo que leia um número menor que cinco e mostre os
números pares entre o número lido e o número 20.
"""

x = int(input("Digite um numero menor que 5: "))

while(x >= 5):
    print("Numero invalido!\n")
    x = int(input("Digite um numero menor que 5: "))

while (x < 18):
    x += 1
    if x % 2 == 0:
        print(x)
