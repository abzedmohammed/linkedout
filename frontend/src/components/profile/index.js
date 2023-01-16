import { h } from "preact";

export default function Profile({profile}){
    return (
        <div id="profile-info" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <div style={{ backgroundImage: `url(${profile.backgroundAvatar})` }}
                    class="w-full user-profile">
                    <img class="w-20 h-20 rounded-full shadow-lg"
                    src={profile.avatar} alt="profile-image" />
                </div>
                <div class="mt-8 text-center">
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{profile.name}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{profile.about}</span>
                </div>
            </div>   
        </div>
    )
}