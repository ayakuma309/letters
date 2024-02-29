import constants from '@/constants/constants';
import { Client, isFullBlock, isFullPage } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

//取得した結果をマッピングし、各ページの情報（作成日時、タイトル、ID、説明など）を抽出して返す。
export const getPageList = async () => {
  const { results } = await notion.databases.query({
    database_id: constants.notionDatabaseId,
    sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    filter: {
      and: [{ property: 'description', rich_text: { is_not_empty: true } }],
    },
  });

  return results
    .filter(isFullPage)
    .map((result) => {
      const title = (() => {
        if (result.properties.name.type !== 'title') {
          return '';
        }
        return result.properties.name.title.reduce(
          (prev, current) => prev + current.plain_text,
          ''
        );
      })();

      // const description = (() => {
      //   if (result.properties.description.type !== 'rich_text') {
      //     return '';
      //   }
      //   return result.properties.description.rich_text.reduce(
      //     (prev, current) => prev + current.plain_text,
      //     ''
      //   );
      // })();

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
        return result.properties.date;
      })();

      return {
        date,
        title,
        id: result.id,
        tags,
      };
    })
    .filter((result): result is NonNullable<typeof result> => result !== null);
};

// Notion ページのブロック（コンテンツの単位）を取得
export const getPageBlocks = async (pageId: string) => {
  //notion.blocks.children.list メソッド 指定されたページの子ブロックのリストを取得
  const { results } = await notion.blocks.children.list({
    block_id: pageId,
  });

  return results.filter(isFullBlock);
};

//記事６つ取得
export const getPostsSixTopPage = async () => {
  const pageSize = 6;
  const allPosts = await getPageList();
  return allPosts.slice(0, pageSize);
};
