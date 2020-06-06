import * as React from 'react';

export default function Title({ children }) {
  return (
    <h2 className="font-black text-purple-900">
      {children}
    </h2>
  );
}
