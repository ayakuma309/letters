import { QiitaItemsType } from '@/types/qiitaTypes';
import QiitaItem from './QiitaItem';

export default function QiitaList({
  data,
  error,
}: {
  data: QiitaItemsType[] | null;
  error: Error | null;
}) {
  if (error) return <div>データの読み込み中にエラーが発生しました。</div>;
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
