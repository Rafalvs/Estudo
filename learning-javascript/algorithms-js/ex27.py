"""
Create a program that register a user with a username and a password.
Then the user will try to login with the login credentials.
If the user make 3 wrong attempts exit program with proper message.

Create a program that:
    Reads the username and the password
    Then the user try to login
    If the user makes 3 wrong attempts exit with proper message
"""

print("Register\n")
username = input("Digit you username: ")
password = input("Digit your password: ")

attempts = 0

while(attempts < 3):
    print("\nLogin\n")
    usernameLogin = input("Enter your username: ")
    passwordLogin = input("Enter your password: ")
    
    if(username != usernameLogin or password != passwordLogin):
        attempts += 1
        print("Incorrect username or login")
        if(attempts == 3):
            print("Failed to login")
    else:
        print("Success")
        attempts += 3