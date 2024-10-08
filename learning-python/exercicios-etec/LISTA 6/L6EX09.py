"""
9. Crie um algoritmo que leia um número maior que 20 e mostre na tela os
números entre o número digitado e o número 1 em ordem decrescente. 
"""

x = int(input("Digite um numero maior que 20: "))

while (x <= 20):
    print("Numero invalido!\n")
    x = int(input("Digite um numero maior que 20: "))

while(x > 2):
    x = x - 1
    print(x)
