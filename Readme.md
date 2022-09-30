## How to run

1. To run App: npm run
2. App is running on port 8000
3. This is the base URL for hitting the Endpoint - http://localhost:8000/News

## How to test

1. Run the App: npm run
2. Run the Test: npm test

## Parameter included

1. Token required - http://localhost:8000/News?token=[API-TOKEN] ||  Default - "22b7d44550da6f0887c4c748364c0e64"
2. Maximum Article -  http://localhost:8000/News?maxArticle=10 || Max article Possible to fetch <= 10 on free account
3. Keyword - http://localhost:8000/News?keyword=[String] 
4. title/Author - http://localhost:8000/News?in=title || in value = "title", keyword is mandatory for required functionality 


## Cache

1. If the URL parameters except for the AuthToken is called then the KEY is created to check for the available Cache if present then no external API will be called, else it will fetch the data and then Cache it
