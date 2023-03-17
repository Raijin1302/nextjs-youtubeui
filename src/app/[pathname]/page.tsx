import React, { FC } from "react";

interface PageProps {
  params: { pathname: string };
}
const PathnamePage: FC<PageProps> = ({ params }) => {
  const { pathname } = params;
  console.log(params);

  return <div>PathnamePage {pathname}</div>;
};

export default PathnamePage;
