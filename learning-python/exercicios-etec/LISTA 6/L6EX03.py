"""
3. Crie um algoritmo que leia dois números e mostre os números entre eles.
"""

x = int(input("Digite o primeiro numero: "))
y = int(input("Digite outro numero: "))

if (x > y):
    while (x > y + 1):
        y += 1
        print(y)
else:
    while (y > x + 1):
        x += 1
        print(x)
