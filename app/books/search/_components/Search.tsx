'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { GoogleBooksResponse } from '@/types/types';
import BookSearchForm from './BookSearchForm';
import BookList from './BookList';

function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}
const Search = () => {
  const [query, setQuery] = useState('');
  //検索ボタンをクリックした時の処理
  //サーバーサイドのAPIを呼び出し書籍情報を取得する
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  const { data, error, isLoading } = useSWR(
    query ? `${apiUrl}${encodeURIComponent(query)}` : null,
    fetcher
  );
  //?? はnull合体演算子。左辺がnullやundefinedの場合に右辺の[]を返す。
  const searchItems =
    data?.items.map((elem: GoogleBooksResponse) => ({
      id: elem.id,
      title: elem.volumeInfo.title,
      description: elem.volumeInfo?.description,
      image: elem.volumeInfo?.imageLinks?.thumbnail,
      infoLink: elem.volumeInfo.infoLink,
    })) ?? [];

  const onClickSearch = (newQuery: string) => {
    setQuery(newQuery);
  };
  return (
    <>
      <h1>書籍検索</h1>
      <BookSearchForm onSearch={onClickSearch} />
      <BookList data={searchItems} error={error} isLoading={isLoading} />
    </>
  );
};

export default Search;
