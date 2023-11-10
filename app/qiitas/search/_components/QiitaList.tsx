import React from 'react';
import { QiitaItemsType } from '@/types/qiitaTypes';
import QiitaItem from './QiitaItem';

function QiitaList({
  data,
  error,
  isLoading,
}: {
  data: QiitaItemsType[] | null;
  error: Error | null;
  isLoading: boolean;
}) {
  if (error) return <div>データの読み込み中にエラーが発生しました。</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      {data && (
        <div>
          {data.map((item: QiitaItemsType) => (
            <QiitaItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default QiitaList;
