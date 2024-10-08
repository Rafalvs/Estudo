"""
2 - Desenvolva um algoritmo que leia um número e mostre na tela os números
entre o número lido e 20.
"""

x = int(input("Digite um numero: "))

while (x < 19):
    x += 1
    print(x)

while (x > 21):
    x -= 1
    print(x)
