import { SetStateAction, useState } from "react";
import { Identify, track } from "@amplitude/analytics-browser";
import Layout from "./common/Layout";
import SliceCard from "./components/SliceCard";

export default function Home() {
  const [userCount, setUserCount] = useState(0);
  const [message, setMessage] = useState("");
  const [slice, setSlice] = useState<string[]>([]);

  const handleMessageChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const sliceContent = () => {
    const result: string[] = [];
    const len = message.split("").length / 140;
    for (let i = 0; i <= len; i++) {
      const content = message.substring(i * 140, i === 0 ? 140 : (i + 1) * 140);
      result.push(content);
    }

    const eventProperties = {
      "Content Length": message.length,
      "Sliced Thread Count": len,
    };

    setUserCount(userCount + 1);
    new Identify().set("Slice Count", userCount);
    track("Click Project Information", eventProperties);

    setSlice(result);
  };

  return (
    <Layout>
      <section className="w-full flex flex-col mt-4 mb-12">
        <h2 className="w-full font-semibold text-center text-2xl">
          Slice Twitter Content
        </h2>
        <h3 className="w-full mt-2 mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
          Cut the long text into 140 characters for Twitter posting.
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <button
              className="w-full mb-2 bg-gradient-to-r from-sky-400 to-violet-400 hover:from-sky-500 hover:to-violet-500 text-white font-bold py-2 px-4 rounded"
              onClick={sliceContent}
            >
              Slice
            </button>
            <textarea
              id="message"
              rows={4}
              name="message"
              value={message}
              onChange={handleMessageChange}
              className="w-full min-h-screen block p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your content..."
            />
          </div>
          <div className="flex flex-col gap-4 w-full overflow-scroll ">
            {slice.map((data, index) => {
              return <SliceCard key={index} index={index} text={data} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
