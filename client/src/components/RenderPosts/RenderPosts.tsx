import axios from "axios";
import { useEffect, useState } from "react";

export default function RenderPosts() {
    const [posts, setPosts] = useState([]);
    const [skip, setSkip] = useState(0);
    const limit = 6;

    useEffect(() => {

        if(skip!=0){
            fetchPosts();
        }
    }, []);

    const fetchPosts = () => {
        axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
            .then((response) => {
                setPosts((prevPosts): any => [...prevPosts, ...response.data.posts]);
                console.log(posts)
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    // Function to handle scrolling and fetching new posts
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            // User has scrolled to the bottom
            setSkip((prevSkip) => prevSkip + limit); // Increment skip by limit
        }
    };

    // Listen for scroll events
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Fetch new posts when skip changes
    useEffect(() => {
        fetchPosts();
    }, [skip]);

    return (
        <div className="">
            <div className="shadow-2xl">
                {posts.map((post: any) => (
                    <div className="rounded shadow-2xl mb-2 mt-1" key={post.id}>
                        <h1 className="font-bold font-primaryFont text-xl">{post.id}</h1>
                        <h1 className="font-bold font-primaryFont text-4xl">{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
