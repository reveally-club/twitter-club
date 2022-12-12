import Head from "next/head";
import Headers from "./headers";
import { init } from '@amplitude/analytics-browser';

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!);
  
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
