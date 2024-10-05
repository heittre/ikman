# Puppeteer with Express Server

This is an Express.js application that uses Puppeteer and `@sparticuz/chromium-min` to perform headless browser tasks like scraping web page content.

## Project Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Express.js (version 4 or higher)

### Dependencies

- `express`: Web framework for Node.js
- `puppeteer-core`: Puppeteer core library for browser automation
- `@sparticuz/chromium-min`: Lightweight version of Chromium for headless browser operations

### Install Dependencies

To install the required dependencies, run the following command in the project directory:

```bash
npm install 


### Install Dependencies

The API has the following endpoints:

/search: Handles search queries and returns relevant results.


##Search Endpoint

- method : GET
- Path: `/search`
- query Parameters:
    - `keyword`: The search keyword.
- response
    - 200 OK: Returns a JSON object with the search results.


Environment Variables
The project uses the following environment variables:

PORT: The port number to listen on (default: 3000).
CHROME_EXECUTABLE_PATH: The path to the Chrome executable.
You can set these variables in a .env file or using the dotenv library.