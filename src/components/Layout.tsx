import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto h-screen flex flex-col">
      {children}
    </div>
  )
}

export default Layout;
