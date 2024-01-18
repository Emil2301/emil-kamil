import React from 'react';

import { useFetchData } from 'hooks/useFetchData';
import type { LanguagesData } from 'types/languages';

import { LanguageComponent } from '../Language/Language';

const API_URL = 'http://localhost:9595/jobs/public';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDM5Y2U0LWFkNzgtNDllMi1iZjI2LTViZjk3MjkwZjUwNCIsImlhdCI6MTcwNDc5Mjc0MSwiZXhwIjoxNzA0NzkzMDQxfQ.NE0Az-eqfONIEdSt-nr9BlYbj3hHYXwMZTTegdIvhDo';

export const LanguagesComponent: React.FC = () => {
  const { data, loading, error } = useFetchData<LanguagesData>(
    API_URL,
    API_TOKEN,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available.</p>;

  return (
    <>
      {data.languages.map((language) => {
        return <LanguageComponent language={language} key={language.name} />;
      })}
    </>
  );
};
