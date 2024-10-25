import requests

print("Data retrieved:", requests.get('https://copy-app-delta.vercel.app/data').json())

