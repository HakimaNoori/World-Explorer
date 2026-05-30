'use client';

import { useState } from 'react';

export default function CountrySearch({ countries }) {
  const [query, setQuery] = useState('');

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase()),
  );
}
