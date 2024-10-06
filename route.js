const express = require("express");
const router = express.Router();
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium-min");

chromium.setHeadlessMode = true;

chromium.setGraphicsMode = false;

// router.get("/search", (req, res) => {
//   const keyword = req.query.keyword;
// });

// Define a basic route

//   res.send("Hello, World!");

router.get("/search", async (req, res) => {
  const keyword = req.query.keyword;

  try {
    await chromium.font(
      "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
    );

    const isLocal = !!process.env.CHROME_EXECUTABLE_PATH;

    const browser = await puppeteer.launch({
      args: isLocal
        ? puppeteer.defaultArgs()
        : [
            ...chromium.args,
            "--hide-scrollbars",
            "--incognito",
            "--no-sandbox",
          ],
      defaultViewport: chromium.defaultViewport,
      executablePath:
     process.env.CHROME_EXECUTABLE_PATH ||
        (await chromium.executablePath(
          "C:\\Users\\user\\Downloads\\chromium-v129.0.0-pack"
        )),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    //   await page.goto(`https://ikman.lk/en/ads?query=${query}`);

    await page.goto(`https://ikman.lk/`);   
    const url = await page.url();
    const html = await page.content();
    console.log(url);
    //   await page.evaluate(() => {
    //     const searchInput = document.querySelector('.search-input--PtfH8');
    //     searchInput.value = 'mobile';
    //   });

    await page.waitForSelector(".search-form--mexm- .search-input--PtfH8", {
      timeout: 60000,
    });
    const searchInput = await page.$(
      ".search-form--mexm- .search-input--PtfH8"
    );
    await searchInput.type(`${keyword}`);

    const submitButton = await page.$(
      ".search-form--mexm- .search-button--1_VmY"
    );
    await submitButton.click();

    await page.waitForNavigation({ timeout: 60000 });

    const pageTitle = await page.title();

    const adsData = await page.evaluate(() => {
      return window.initialData.serp.ads.data.ads;
    });


    const baseUrl  =  await page.evaluate(()=>{
        return window.location.origin;
    })

    const adDetails = adsData.map((ad) => ({
      title: ad.title,

      price: ad.price,
      location: ad.location,

      

      listingURL: `${baseUrl}/en/ad/${ad.slug}`,
      datePosted: ad.timeStamp,

    }));

    await browser.close();

    res.status(200).json({
      pageTitle,
      ads: adDetails,
    });
  } catch (error) {
    console.error("error during puppeteer task", error);
    res.status(500).json({ error: "an error occurred during the search" });
  }
});

module.exports = router;
