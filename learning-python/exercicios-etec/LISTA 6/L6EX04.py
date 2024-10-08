"""
4. Elabore um algoritmo que leia um número e mostre a tabuado do número lido,
utilizando uma estrutura de repetição. 
"""

x = int(input("Digite um numero: "))
y = 1
while(y <= 10):
    z = x * y
    print(f"{x}x{y} =", z)
    y += 1

# for
"""
x=int(input("Digite um numero: "))
for y in range(1, 11):
    z = x * y
    print(f"{x}x{y} =", z)
"""
    
# opcao para definir quantas vezes sera multiplicado
"""
x = int(input("Digite um numero: "))
y = int(input("Digite um numero: "))
for y in range(1, y + 1):
    z = x * y
    print(f"{x}x{y} =", z)
"""
