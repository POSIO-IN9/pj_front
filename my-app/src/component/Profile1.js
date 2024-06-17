import React from 'react';
import img2 from '../img/iam.png';

const Profile1 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <main className="profile-page w-full flex-grow flex flex-col items-center">
        <section className="relative py-6 md:py-12 bg-blueGray-200 w-full flex justify-center items-end">
          <div className="container mt-10 mx-auto px-4 flex justify-center">
            <div className="relative flex justify-center items-center min-w-0 break-words bg-white w-full md:w-4/5 mb-6 shadow-xl rounded-lg lg:mt-0 max-w-screen-lg">
              <div className="px-6">
                <div className="py-6 px-3 sm:mt-0 flex justify-end items-end">
                  <button className="bg-green-600 active:bg-green-800 uppercase text-white font-bold hover:shadow-md hover:bg-green-700 shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    Connect
                  </button>
                </div>
                <div className="flex flex-wrap justify-center items-end">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    {/* Add additional content or components if needed */}
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right flex justify-center items-end lg:justify-end -mb-10 -mt-16">
                    <div className="relative top-[0.125rem]">
                      <img
                        alt="Profile"
                        src={img2}
                        className="sm:mr-11 shadow-xl rounded-full h-32 w-32 md:h-48 md:w-48 sm:h-40 sm:w-40 align-middle border-none max-w-full -mt-40 md:ml-16 lg:mr-1"
                      />
                    </div>
                  </div>
                  <div className="w-full md:ml-10 lg:w-4/12 px-4 lg:order-3 lg:text-right flex justify-center items-end lg:justify-end -mb-16 mt-4 lg:ml-4">
                    <div className="flex justify-center items-end py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal m-2 text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="#pablo" className="font-normal text-pink-500">Show more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative bg-blueGray-200 pt-8 pb-6 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank" rel="noopener noreferrer"> Creative Tim</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Profile1;
