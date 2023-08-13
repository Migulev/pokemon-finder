import React from 'react';

type Props = {};

const Yes = async (props: Props) => {
  async function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await wait(3000);

  return <div>Yes</div>;
};

export default Yes;
