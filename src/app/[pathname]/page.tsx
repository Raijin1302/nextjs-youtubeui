import React from "react";

type PageProps = {
  params: { pathname: string };
};
function PathnamePage({ params: { pathname } }: PageProps) {
  return <div>PathnamePage {pathname}</div>;
}

export default PathnamePage;
