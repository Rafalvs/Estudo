"""
You start flipping a coin, count and print how many times the result was head or tails until
you enter the word "stop". Then find and print the percentage of how many head or tails was the result.

Create a program that:

    Reads if the flipped coin was head or tails
    If the value is "stop", print proper message and quit program
    While value not "stop", count the result
    Print the proper message
    Calculates the percentage of head and tails
    Prints the proper message
    Input: "head", "tails", "tails", "tails", "head", "head", "tails", "tails", "tails", "head"
    Ouput: "Head won 4 times and tails won 6 times"
    Output: "40% Head, 60% Tails"
"""

heads = 0
tails = 0
x = "start"

while(x != "stop"):
    x = input("Result? ")

    if(x == "heads"):
        heads += 1

    elif(x == "tails"):
        tails += 1

print(f"Number of heads: {heads}\nNumber of tails: {tails}")


