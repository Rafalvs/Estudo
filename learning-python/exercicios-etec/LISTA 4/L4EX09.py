"""
9 - Desenvolva um algoritmo que leia quatro números, some os dois primeiros e
subtraia os dois últimos, some os resultados e mostre a seguinte mensagem,
resultado maior que dez, caso a afirmação esteja correta ou resultado menor
ou igual a dez.
"""

x = int(input("digite um numero: "))
y = int(input("digite um numero: "))
z = int(input("digite um numero: "))
w = int(input("digite um numero: "))
x = x + y
z = z - w
x = x + z
if x > 10:
    print("Maior que 10")
else:
    print ("Menor ou igual a 10")
