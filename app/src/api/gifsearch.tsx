const API_KEY: string = process.env.REACT_APP_API_KEY || '';
const ITEMS_PER_PAGE = 8;

export interface GifItem {
  url: string;
  title: string;
  originalUrl: string;
};

interface Pagination {
  totalPages: number;
};

interface Gifs {
  items: Array<GifItem>;
  pagination: Pagination;
}

function parseGif(item: any):GifItem {
  return {
    url: item['images']['fixed_height']['url'],
    originalUrl: item['url'],
    title: item['title'],
  };
};

function parsePagination(data: any):Pagination {
  return {
    totalPages: Math.round(data['total_count'] / data['count']),
  };
};

async function getGifsByPage(query: string, page: number):Promise<Gifs> {
  const url = new URL('https://api.giphy.com/v1/gifs/search');
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('q', query);
  url.searchParams.append('limit', String(ITEMS_PER_PAGE));
  url.searchParams.append('offset', String(page * ITEMS_PER_PAGE));
  url.searchParams.append('rating', 'g');
  url.searchParams.append('lang', 'en');

  const response = await fetch(url.toString());
  const rawData = await response.json();

  return {
    items: rawData['data'].map((item: any) => parseGif(item)),
    pagination: parsePagination(rawData['pagination']),
  }
};

export default getGifsByPage;
