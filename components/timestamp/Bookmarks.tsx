import React, { useState } from 'react';
import BookmarkItem from './Bookmark';
import { toast } from '../ui/use-toast';
import axios from 'axios';
import { Bookmark } from '@prisma/client';

interface BookmarksProps {
  bookmarks: Bookmark[];
  ytPlayer: YT.Player | undefined;
}

const Bookmarks: React.FC<BookmarksProps> = ({ bookmarks, ytPlayer }) => {
  const [latestBookmarks, setLatestBookmarks] = useState<Bookmark[]>(bookmarks);
  // 削除
  const handleDeleteBookmark = async (bookmarkId: string) => {
    const shouldDelete = window.confirm('このコメントを削除しますか？');
    if (!shouldDelete) return;

    try {
      await axios.delete(`/api/bookmark/${bookmarkId}`);
      setLatestBookmarks((prevBookmark) =>
        prevBookmark.filter((bookmark) => bookmark.id !== bookmarkId)
      );
      toast({
        title: 'コメントを削除しました',
        variant: 'success',
      });
    } catch (err) {
      toast({
        title: 'コメントの削除に失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='flex justify-center'>
      {latestBookmarks &&
        latestBookmarks.map((bookmark) => (
          <div className='bg-white shadow-md rounded p-4 mb-4 w-80 mt-10'>
            <BookmarkItem
              key={bookmark.id}
              ytPlayer={ytPlayer}
              bookmark={bookmark}
              handleDelete={handleDeleteBookmark}
            />
          </div>
        ))}
    </div>
  );
};

export default Bookmarks;
