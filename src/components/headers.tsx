import Head from "next/head";

const Headers: React.FC = () => {
  return (
    <header>
      <Head>
        <title>Twitter.Club with Reveally</title>
        <meta
          property="og:description"
          content="Twitter utilities App with Reveally.club"
        />
      </Head>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold mr-2">Twitter.club</h1>
            <h2 className="text-transparent text-sm bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
              with Reveally.club
            </h2>
          </div>
          <div
            className="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
