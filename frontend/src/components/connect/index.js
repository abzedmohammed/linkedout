import { h } from "preact";

export default function Connect({connects}){
    return (
        <div>
            <h2 class="connections">Connections</h2>
            <div class="flex flex-col">
                {
                   connects.map(connection => {
                        return (
                            <div
                class="mt-2 p-1 max-w-sm bg-white border border-green-200 rounded-lg shadow-md dark:bg-green-800 dark:border-green-700">
                <div class="flex justify-end px-0 pt-0">
                    <button id="dropdownButton" data-dropdown-toggle="connect-dropdown"
                        class="inline-block text-teal-500 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-700 rounded-lg text-sm p-1"
                        type="button">
                        <span class="sr-only">Open dropdown</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                    </button>
                    <div id="connect-dropdown"
                        class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                        <ul class="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">View Profile</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-lime-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-lime-200 dark:hover:text-white">Inbox</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col text-center items-center pb-3">
                    <img class="w-10 h-10 rounded-full shadow-lg"
                        src={connection.avatar} alt="connection-avatar" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{connection.name}</h5>
                    <span class="w-full text-sm text-gray-500 dark:text-gray-400">{connection.about}</span>
                    <div class="flex mt-4 space-x-3 md:mt-2">
                        <a href="#"
                            class="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:green-blue-800">Accept</a>
                        <a href="#"
                            class="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-red-500 hover:text-teal-900 bg-white border border-red-700 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300">Delete</a>
                    </div>
                </div>
            </div>
                        )
                   }) 
                }  
            </div>
        </div>
    )
}