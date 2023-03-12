import { useState } from "react";
import axios from "axios";
import Layout from "../common/Layout";
import SliceCard from "../components/SliceCard";
import Loading from "../components/Loading";

export default function Writing() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function getWriting() {
    setLoading(true);
    const result = await axios.get(
      `https://api.reveally.club/twitter/writing?content=${question}`
    );

    setAnswer(result.data.data.content);
    setLoading(false);
  }

  return (
    <Layout>
      <section className="w-full flex flex-col mt-4 mb-12">
        <h2 className="w-full font-semibold text-center text-2xl">
          AI Writing
        </h2>
        <h3 className="w-full mt-2 mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
          Writing Twitter posts based on chatGPT
        </h3>
        <textarea
          required
          name="question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          className="mt-4 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          rows={4}
          placeholder="What you want to tweet"
        />
        {loading ? (
          <div className="flex w-full items-center justify-center mt-4">
            <Loading />
          </div>
        ) : (
          <button
            onClick={getWriting}
            className="mt-4 w-full mb-2 bg-gradient-to-r from-sky-400 to-violet-400 hover:from-sky-500 hover:to-violet-500 text-white font-bold py-2 px-4 rounded"
          >
            Writing
          </button>
        )}
        <div className="mt-4">
          <SliceCard index={0} text={answer} />
        </div>
      </section>
    </Layout>
  );
}
