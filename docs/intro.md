---
sidebar_position: 1
---

# Concept and Functionality

Dad jokes are usually short, sweet, and funny one-liner line jokes presented as questions and humorous answers by the father of the family. The purpose of dad jokes is to make people laugh and are often used in social media posts and memes.

On the base of The icanhazdadjoke is a RESTful API that allows developers to programmatically access a large database of jokes. 

Here's a brief overview of the concepts and functionality of the API:

 - **Endpoints**: The API has a single endpoint, which is https://icanhazdadjoke.com/. Developers can access the API using various **HTTP** methods such as **GET**, **POST**, and **PUT**. 

    The different endpoints are:
    * Fetch a random dad joke: You can fetch a random joke in the JSON or text format.

    ```
    GET https://icanhazdadjoke.com/
     ```

	 -  Fetch a random dad joke as a Slack message: You can fetch a random joke formatted for Slack.
		 ```
		 GET https://icanhazdadjoke.com/slack
	 - Fetch a dad joke: You can fetch a specific dad joke.
		  ```
		 GET https://icanhazdadjoke.com/j/<joke_id>
	 -  Fetch a dad joke as an image:  You can Fetch a dad joke as an image.
		 ```
		 GET https://icanhazdadjoke.com/j/<joke_id>.png
	  
	 - Search for dad jokes: You can search for dad jokes.
     
        ```
        GET https://icanhazdadjoke.com/search
        ```

        This endpoint accepts the following optional query string parameters:
			-   `page`  - which page of results to fetch (default: 1)
			-   `limit`  - number of results to return per page (default: 20) (max: 30)
			-   `term`  - search term to use (default: list all jokes)```
		 
 - **Headers**: The API requires a header specifying the content type of the response, which should be set to `application/json`.

 - **Authentication**: The API does not require any authentication or API keys to access the data.

 - **Functionality**: The API provides various functionalities such as:

	 - [ ] Retrieving a random joke
	 - [ ] Searching for jokes based on a keyword
	 - [ ] Retrieving jokes based on their unique ID

 - **Responses**: The API returns responses in JSON format. Each joke object contains several properties such as "**id**", "**joke**", "**status**", "**updatedAt**", and "**createdAt**". Developers can use these properties to display jokes on their applications or websites.

Overall, the icanhazdadjoke API is a fun and simple way for developers to access a large database of jokes and integrate them into their applications or websites.