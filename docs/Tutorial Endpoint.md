
# Tutorial

The icanhazdadjoke API endpoint is a great resource for developers who want to access a large collection of dad jokes. In this tutorial, we will walk through the steps to access the API using Python.

Step 1: Set up a Python Environment
Before you begin, you need to set up a Python environment on our computer. We recommend using Python 3.x, which can be downloaded and installed from the official Python website. Once Python is installed, you can proceed to the next step.

Step 2: Install Required Libraries
The requests library is used to send HTTP requests to the icanhazdadjoke API endpoint. If the required libraries are not installed, you can install them by running the following command in your terminal or command prompt:

```
pip install requests
```

Step 3: Make a Request to the API Endpoint. Now that you have everything set up, make a request to the icanhazdadjoke API endpoint using the requests library. Here are some sample code to get you started:

```
import requests

url = 'https://icanhazdadjoke.com/'
response = requests.get(url, headers={'Accept': 'application/json'})

if response.status_code == 200:
    data = response.json()
    print(data['joke'])
else:
    print('Error: Request failed with status code', response.status_code)
```

In this code, you are importing the requests library, define the URL of the API endpoint and send a GET request to it using the requests.get() function. We also specify the Accept header in the request to indicate that we want to receive the response in JSON format.

If the request is successful (status code 200), we extract the joke from the response data and print it to the console. If the request fails, we print an error message along with the status code.

Step 4: Customize the Request
The icanhazdadjoke API endpoint provides some additional options that we can customize to get different results. For example, we can specify a search term to get jokes related to a particular topic. Here's how we can modify our previous code to search for jokes related to the term "dog":

```
import requests

url = 'https://icanhazdadjoke.com/search'
params = {'term': 'dog'}
headers = {'Accept': 'application/json'}
response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(f"Found {len(data['results'])} jokes about dogs. Here's one:")
    print(data['results'][0]['joke'])
else:
    print('Error: Request failed with status code', response.status_code)
```

In this code, we first modify the URL to point to the search endpoint instead of the main endpoint. We then define a dictionary of query parameters that includes the search term "dog". Finally, we pass the query parameters to the requests.get() function along with the Accept header.

If the request is successful, we extract the first joke from the response data and print it to the console along with a message indicating how many results were found. If the request fails, we print an error message along with the status code.

Step 5: Add Error Handling
In our previous examples, we simply printed an error message if the request failed. However, it's important to handle errors properly in a real-world application. Here's how we can modify our previous code to raise an exception if the request fails:

```
import requests

url = 'https://icanhazdadjoke.com/'
try:
    response = requests.get(url, headers={'Accept': 'application/json'})