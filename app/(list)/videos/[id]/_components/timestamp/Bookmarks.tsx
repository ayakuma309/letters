import { Bookmark } from '@prisma/client';
import axios from 'axios';
import { useState } from 'react';
import { toast } from '../../../../../_components/ui/use-toast';
import BookmarkItem from './Bookmark';

interface Props {
  bookmarks: Bookmark[];
  ytPlayer: YT.Player | undefined;
}

export default function Bookmarks({ bookmarks, ytPlayer }: Props) {
  const [latestBookmarks, setLatestBookmarks] = useState<Bookmark[]>(bookmarks);
  // 削除
  const handleDeleteBookmark = async (bookmarkId: string) => {
    const shouldDelete = window.confirm('このタイムスタンプを削除しますか？');
    if (!shouldDelete) return;

    try {
      await axios.delete(`/api/bookmark/${bookmarkId}`);
      setLatestBookmarks((prevBookmark) =>
        prevBookmark.filter((bookmark) => bookmark.id !== bookmarkId)
      );
      toast({
        title: 'タイムスタンプを削除しました',
        variant: 'success',
      });
    } catch (err) {
      toast({
        title: 'タイムスタンプの削除に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='flex flex-col justify-center bg-white shadow-md rounded p-4 mb-4 mt-10'>
      {latestBookmarks &&
        latestBookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            ytPlayer={ytPlayer}
            bookmark={bookmark}
            handleDelete={handleDeleteBookmark}
          />
        ))}
    </div>
  );
}
