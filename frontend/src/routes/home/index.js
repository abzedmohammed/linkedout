import { h } from "preact";
import Connect from "../../components/connect";
import Profile from "../../components/profile";

export default function Home({profile, posts, connects}){
    console.log("posts", posts);
    return (
        <section class="mb-10">
        <main>
            <div class="container">
                <div class="row">

                    <div class="col-md-3">
                        <Profile profile={profile} />
                    </div>
                    <div class="col-md-6">
                        <div id="posts-list" class="flex flex-col">
                            {
                                posts.map(post => {
                                    return (
                                        <div class="card border border-2 rounded-lg p-2 mt-2">                            
                                            <div class="flex items-center space-x-4">
                                                <img class="w-10 h-10 rounded-full" src={post.avatar} alt="user-avatar" />
                                                <div class="font-medium dark:text-white">
                                                    <div>{post.name}</div>
                                                    <div class="text-xs text-gray-500 dark:text-gray-700">{post.username}</div>
                                                    <div class="text-sm text-gray-500 dark:text-gray-400">{post.time}</div>
                                                </div>
                                            </div>

                                            <div class="text-base text-teal-900 font-normal mt-3">{post.body}</div>

                                            <div class="tags font-black">
                                                {post.tags}
                                            </div>

                                            <img class="my-3" width="300" height="300" src={post.image} 
                                            alt="post-image" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div id="connections-list" class="col-md-3">
                        <Connect connects={connects} />
                    </div>

                </div>
            </div>
        </main>
    </section>

    )
}