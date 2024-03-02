import constants from '@/constants/constants';
import { Client, isFullPage } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

//取得した結果をマッピングし、各ページの情報（作成日時、タイトル、ID、説明など）を抽出して返す。
export const getPageList = async () => {
  const { results } = await notion.databases.query({
    page_size: 100,
    database_id: constants.notionDatabaseId,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  });

  return results
    .filter(isFullPage)
    .map((result) => {
      const title = (() => {
        if (result.properties.title.type !== 'title') {
          return '';
        }
        return result.properties.title.title.reduce(
          (prev, current) => prev + current.plain_text,
          ''
        );
      })();

      const tags = (() => {
        if (result.properties.tags.type !== 'multi_select') {
          return [];
        }
        return result.properties.tags.multi_select.map((tag) => tag.name);
      })();

      const date = (() => {
        if (result.properties.date.type !== 'date') {
          return '';
        }
        if (result.properties.date.date === null) {
          return '';
        }
        return result.properties.date.date.start;
      })();

      const url = (() => {
        if (
          result.properties.url === undefined ||
          result.properties.url.type !== 'url'
        ) {
          return '';
        }
        return result.properties.url.url;
      })();

      return {
        date,
        title,
        id: result.id,
        tags,
        url,
      };
    })
    .filter((result): result is NonNullable<typeof result> => result !== null);
};
