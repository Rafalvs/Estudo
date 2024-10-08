"""
10 - Crie um algoritmo que leia dois números, multiplique o menor por 10, e divida
o maior por 2, some os seus valores e verifique se o resultado e par, em caso
afirmativo exiba a mensagem, o resultado é par, caso contrario, exiba a
mensagem, o resultado é impar.
"""

x = int(input("Digite um numero: "))
y = int(input("Digite um numero: "))
if x > y:
    y = y * 10
    x = x / 2
else:
        x = x * 10
        y = y / 2

z = x + y
if z % 2 == 0:
    print ("O resultado é Par!")
else:
    print ("O resultado é Impar!")
