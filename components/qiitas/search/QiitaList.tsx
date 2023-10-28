import React from 'react';
import { QiitaItemsProps } from '@/types/qiitaTypes';
import QiitaItem from './QiitaItem';

function QiitaList({
  data,
  error,
}: {
  data: QiitaItemsProps[] | null;
  error: any;
}) {
  return (
    <div>
      {error && <div>データの読み込み中にエラーが発生しました。</div>}
      {data && (
        <div>
          {data.map((item: QiitaItemsProps) => (
            <QiitaItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default QiitaList;
