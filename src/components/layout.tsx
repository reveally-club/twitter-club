import Head from "next/head";
import Headers from "./headers";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="bg-gray-50 text-gray-800 h-full min-h-screen">
      <Headers />
      <main className="main-content flex flex-col flex-grow p-4 container mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
