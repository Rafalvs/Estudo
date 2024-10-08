"""
5. Desenvolva um algoritmo que leia três números e mostre na tela os números
entre os dois maiores. 
"""

x = 30
y = 20
z = 10

if x > y and x > z and y > z: # x e y maior 
    while (x > y - 1):
        y += 1
        print(y)

elif x > y and x > z and z > y: # x e z maior
    while (x > z - 1):
        z += 1
        print(z)

elif y > x and y > z and x > z: # y e x maior
    while (y > x - 1):
        x += 1
        print(x)

elif y > x and y > z and z > x: # y e z maior
    while (y > z - 1):
        z += 1
        print(z)

elif z > x and z > y and x > y: # z e x maior
    while (z > x - 1):
        x += 1
        print(x)

elif z > x and z > y and y > x: # z e y maior
    while (z > y - 1):
        y += 1
        print(y)
    
else:
    print("Não a numeros entre as variaveis")

"""
Versao binaria

n1 = int(input("Digite um numero: "))
n2 = int(input("Digite um numero: "))
n3 = int(input("Digite um numero: "))
if n1 > n2: # n1 maior e os outro são os segundos maiores!
    if n1 > n3:
        if n2 > n3:
            while n2 < n1:
                n2 = n2 + 1
                print(n2)
    if n1 > n3:
        if n1 > n2:
            if n3 > n2:
                while n3 < n1:
                    n3 = n3 + 1
                    print(n3)
    if n2 > n1: # n2 maior e os outro são os segundos maiores!
        if n2 > n3:
            if n1 > n3:
                while n1 < n2:
                    n1 = n1 + 1
                    print(n1)
    if n2 > n1:
        if n2 > n3:
            if n3 > n1:
                while n3 < n2:
                    n3 = n3 + 1
                    print(n3)
    if n3 > n1: # n3 maior e os outro são os segundos maiores!
        if n3 > n2:
            if n1 > n2:
                while n1 < n3:
                    n1 = n1 + 1
                    print(n1)
    if n3 > n1:
        if n3 > n2:
            if n2 > n1:
                while n2 < n3:
                    n2 = n2 + 1
                    print(n2)
else:
    print("Não existe número entre eles!")
x = int(input("Digite um número: "))
y = x * 11
a = x
while a < y:
    print(a)
    a = a + x
"""