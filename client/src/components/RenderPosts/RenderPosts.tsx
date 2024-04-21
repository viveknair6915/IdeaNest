import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    _id: string;
    caption: string;
    description: string;
}

export default function RenderPosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [skip, setSkip] = useState(0);
    const limit = 6;

    useEffect(() => {
        if (skip !== 0) {
            fetchPosts();
        }
    }, []);

    const fetchPosts = () => {
        axios.get(`http://localhost:3000/post/posts/cofounders?limit=${limit}&skip=${skip}`)
            .then((response) => {
                setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
 
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setSkip((prevSkip) => prevSkip + limit);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [skip]);

    const handleCreatePost = (mediaSelected: boolean) => {
        const userId = ""; // Set the user ID
        const caption = ""; // Get the caption value from input fields
        const description = ""; // Get the description value from input fields
        const link = ""; // Get the link if media is selected

        const postData = {
            userId,
            caption,
            description,
            ...(mediaSelected && { link }) // Add link to postData if media is selected
        };

        const route = mediaSelected ? "/posts/with-media" : "/posts";

        axios.post(`http://localhost:3000${route}`, postData)
            .then((response) => {
                console.log("Post created successfully:", response.data.post);
                // Optionally, you can update state with the newly created post
            })
            .catch((error) => {
                console.error("Error creating post:", error);
            });
    };

    return (
        <div className="mt-5 flex justify-center items-center bg-bgblue ">
            <div className="w-96">
             
                {posts.map((post) => (
                    <div key={post._id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://source.unsplash.com/random" alt="Post" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.caption}</div>
                                <p className="mt-2 text-gray-500">{post.description}</p>
                            </div>
                            
                        </div>
                        <div className="flex flex-row justify-center items-center mx-5">
                            <button className="bg-bgPrimary px-8 mx-4 rounded-xl">
                                Contact
                            </button>
                            <button className="bg-bgPrimary px-8 rounded-xl">
                                Like
                            </button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}
