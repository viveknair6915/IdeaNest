import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    _id: string;
    caption: string;
    description: string;
    // Add other properties if needed
}

export default function RenderPosts() {
    const [posts, setPosts] = useState<Post[]>([]); // Specify the type as Post[]
    const [skip, setSkip] = useState(0);
    const limit = 6;

    useEffect(() => {
        if (skip !== 0) {
            fetchPosts();
        }
    }, []);

    const fetchPosts = () => {
        axios.get(`http://localhost:3000/post/posts/cofounders`)
            .then((response) => {
                setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
                console.log(posts);
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

    return (
        <div className="mt-5 flex justify-center items-center">
            <div className="w-60 h-60 flex flex-col">
                {posts.map((post) => (
                    <div className="rounded shadow-2xl mb-5 mt-1 p-8 border border-solid border-black" key={post._id}>
                        <h1 className="font-bold font-primaryFont text-xl">{post.caption}</h1>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
