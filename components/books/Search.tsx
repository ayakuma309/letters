'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import BookSearchForm from '@/components/books/BookSearchForm';
import BookList from '@/components/books/BookList';
import { GoogleBooksResponse } from '@/types/types';

function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}
const Search = () => {
  const [query, setQuery] = useState('');
  //検索ボタンをクリックした時の処理
  //サーバーサイドのAPIを呼び出し書籍情報を取得する
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  const { data, error } = useSWR(
    query ? `${apiUrl}${encodeURIComponent(query)}` : null,
    fetcher
  );
  //?? はnull合体演算子。左辺がnullやundefinedの場合に右辺の[]を返す。
  const searchItems =
    data?.items.map((elem: GoogleBooksResponse) => ({
      id: elem.id,
      title: elem.volumeInfo.title,
      description: elem.volumeInfo?.description,
      pageCount: elem.volumeInfo.pageCount,
      image: elem.volumeInfo?.imageLinks?.thumbnail,
    })) ?? [];

  const onClickSearch = (newQuery: string) => {
    setQuery(newQuery);
  };
  return (
    <>
      <h1>書籍検索</h1>
      <BookSearchForm onSearch={onClickSearch} />
      <BookList data={searchItems} error={error} />
    </>
  );
};

export default Search;
