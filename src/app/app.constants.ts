export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const itemUrl = `${baseUrl}/item/`;
export const newStoriesUrl = `${baseUrl}/newstories.json`;

export const showText = (text: string, count: number) => `${text} (${count})`;
