import React, { useEffect } from 'react';


export class Test {
  private member?: number;
}

export function App(props: {
  test: string;
  name: string;
  other: number;
  event_test: boolean;
}): JSX.Element {
  let test = 2;

  useEffect(() => {
    if (test) {
      console.log(test);
    }
  }, []);

  return <div></div>;
}
