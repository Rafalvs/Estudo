"""
Create a program that reads numbers and sum them until the user inputs a negative value or zero value

Create a program that:

    Reads numbers
    Sum them
    Prints the sum
    Input example: 5, 9, 3, 7, 0
    Output: "The sum is 24"
"""

x = int(input("Digit a number: "))
sum = 0

while (x > 0):
    sum = sum + x
    x = int(input("Digit another number: "))

print(sum)
