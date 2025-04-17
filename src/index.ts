
import axios from "axios";
import * as https from "https";

type QuoteResponse = {
  quote: string;
  author: string;
};

async function getRandomQuotes(): Promise<QuoteResponse | null> {
  try {
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    const res = await instance.get("https://api.quotable.io/quotes/random");

    const response: QuoteResponse = {
      quote: res.data[0]?.content || "No quote available",
      author: res.data[0]?.author || "Unknown",
    };

    return response;
  } catch (error) {
    return null; 
  }
}

export { getRandomQuotes };
