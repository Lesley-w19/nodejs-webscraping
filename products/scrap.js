import * as cheerio from "cheerio";
import axios from "axios";

export const getScrapData = async () => {
  try {
    const url = "https://ke.shopzuri.com/collections/shop";
    // const response = await axios.get(url);
    const site_items = [];
    //fetch from the given webpage
    const response = await axios.get(url);
    //convert response to text
    const body = await response.data;
    // //load the body into cheerio
    const $ = cheerio.load(body);
    $(".product-grid-item").map((index, element) => {
      //grab the whole grid_items rowname
      const title = $(element)
        .find(".product__grid__info > a > .grid__title")
        .text()
        .trim();
      const price = $(element)
        .find(".product__grid__info > a > .price_wrapper > .price")
        .text()
        .trim();

      const image_src = $(element)
        .find(".double__image > img")
        .attr("data-src");
      // const im = $(element).find(".double__image > img").attr();

      // console.log(im);
      site_items.push({
        image_src,
        title,
        price,
        // im
      });
    });

    // console.log(site_items);

    return site_items;
  } catch (error) {
    console.log(error);
  }
};
