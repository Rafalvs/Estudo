"""
Create a program that reads numbers and sum them until the user inputs a negative value

Create a program that:

    Reads numbers
    Sum them
    Prints the sum
    Input example: 5, 9, 3, 0, 2, 0, 4, -7
    Output: "The sum is 23"
"""

x = int(input("Digit a number: "))
sum = 0

while (x > -1):
    sum = sum + x
    x = int(input("Digit another number: "))

print(sum)
