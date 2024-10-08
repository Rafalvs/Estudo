"""
4. Elabore um algoritmo que leia um número e mostre a tabuado do número lido,
utilizando uma estrutura de repetição. 
"""

x = int(input("Digite um número: "))
y = x * 11
a = x
while a < y:
    print(a)
    a = a + x
    