import webbrowser 

url = "https://www.linkedin.com/in/rafalvs"

firefoxPath = r"C:\Program Files\Mozilla Firefox\firefox.exe"

webbrowser.register('firefox', None,  
                    webbrowser.BackgroundBrowser(firefoxPath)) 

webbrowser.get('firefox').open(url)
