import React from "react";

export default function Blog() {
  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            ALL BLOGS ARE HERE
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>

        {/* <!-- card grid  --> */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* <!-- single card  --> */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </p>
                <a href="#" className="block mt-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Boost your conversion rate
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 hover:underline">
                    Learn with sumit
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">11 Jul, 2022</time>
                    <span aria-hidden="true">&middot;</span>
                    <span> 6 min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </p>
                <a href="#" className="block mt-1">
                  <p className="text-xl font-semibold text-gray-900">
                    How to use search engine optimization to drive sales
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 hover:underline">
                    Learn with sumit
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">08 Feb, 2022</time>
                    <span aria-hidden="true">&middot;</span>
                    <span> 11 min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- single card  --> */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </p>
                <a href="#" className="block mt-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Improve your customer experience
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 hover:underline">
                    Learn with sumit
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">20 Mar, 2022</time>
                    <span aria-hidden="true">&middot;</span>
                    <span> 9 min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- single card  --> */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </p>
                <a href="#" className="block mt-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Boost your conversion rate
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 hover:underline">
                    Learn with sumit
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">11 Jul, 2022</time>
                    <span aria-hidden="true">&middot;</span>
                    <span> 6 min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </p>
                <a href="#" className="block mt-1">
                  <p className="text-xl font-semibold text-gray-900">
                    How to use search engine optimization to drive sales
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 hover:underline">
                    Learn with sumit
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">08 Feb, 2022</time>
                    <span aria-hidden="true">&middot;</span>
                    <span> 11 min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- single card  --> */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </p>
                <a href="#" className="block mt-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Improve your customer experience
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 hover:underline">
                    Learn with sumit
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">20 Mar, 2022</time>
                    <span aria-hidden="true">&middot;</span>
                    <span> 9 min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
