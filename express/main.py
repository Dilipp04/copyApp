import requests

print("Data retrieved:", requests.get('http://localhost:3000/data').json())

