import Head from 'next/head';

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>自我介紹</title>
      </Head>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
        <div className="relative">
          <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
            <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
              <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  關於我(自我介紹)
                </p>
              </div>
              <p className="text-white/50 text-md mt-3">
                <p><strong>目前尚未建立</strong></p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}