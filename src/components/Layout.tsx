import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container my-4 mx-auto">
      <div className="row row-cols-1 row-cols-md-3 g-4">{children}</div>
    </div>
  );
};

export default Layout;
