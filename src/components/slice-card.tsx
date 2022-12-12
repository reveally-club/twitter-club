import { CopyToClipboard } from "react-copy-to-clipboard";
import { track } from '@amplitude/analytics-browser';

export interface Props {
  index: number,
  text: string;
}

const SliceCard = (props: Props) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="flex justify-between" id="tool-box">
        <CopyToClipboard text={props.text}>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            onClick={() => {
              const eventProperties = {
                "Sliced Thread Number": props.index,
              };
              track("Copy Sliced Content", eventProperties);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
            <span className="sr-only">Clipboard</span>
          </button>
        </CopyToClipboard>
        <div className="flex text-xs">
          <p className="mr-1 font-bold">{props.text.length}</p>
          <p>words</p>
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-base pt-2">{props.text}</p>
      </div>
    </div>
  );
};

export default SliceCard;
