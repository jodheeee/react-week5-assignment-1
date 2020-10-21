import React from 'react';

export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button">
            {name.replace('부산', '부산(V)')}
          </button>
        </li>
      ))}
    </ul>
  );
}
