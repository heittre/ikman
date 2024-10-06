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
```

### Endpoints
- https://localhost:{PORT}/search?keyword={KEYWORD}