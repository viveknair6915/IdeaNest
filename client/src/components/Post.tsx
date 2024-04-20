import React, { useState } from 'react';
import axios from 'axios';

export default function Post() {
    const [caption, setCaption] = useState("");
    const [description,setDescription] = useState("fjsfh")
    const [link,setLink] = useState("")

   

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3000/post/posts/with-media', {
                userId: '6624124171c333405843976a', // Replace 'your_user_id_here' with the actual user ID
                caption: caption,
                description: description
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            // Handle success response
        } catch (error) {
            console.error('Error creating post:', error);
            // Handle error response
        }
    };
    

    return (
        <>
            <div className="mx-4 my-10">
                <div className="rounded-xl shadow-2xl justify-evenly items-stretch flex-col w-80 h-70 p-4 ">
                    <div className="flex justify-between mb-14 flex-col">
                        <div className="w-8 h-8 rounded-2xl">
                            <img className="rounded" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile" />
                        </div>
                        <div className="flex mb-3">
                            <textarea
                                className="resize-none border border-solid border-slate-600 rounded p-2"
                                value={caption}
                                onChange={e => setCaption(e.target.value)}
                                placeholder="Caption"
                                cols={20}
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="flex ">
                            <textarea
                                className="mt-3 resize-none border border-solid border-slate-600 rounded p-2"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Description"
                                cols={20}
                                rows={3}
                            ></textarea>
                        </div>
                        <div className="flex ">
                            <textarea
                                className="mt-3 resize-none border border-solid border-slate-600 rounded p-2"
                                value={link}
                                onChange={e => setLink(e.target.value)}
                                placeholder="Add Video link"
                                cols={20}
                                rows={1}
                            ></textarea>
                        </div>
                    </div>
with-media
                    <div className="">
                        <div className="flex justify-between items-center">
                            <div>
                                <ul className="flex justify-between">
                                    <li className="px-2">
                                        <label htmlFor="file" className="relative">
                                            <input
                                                type="file"
                                                id="file"
                                                name="file"
                                                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                                                
                                            />
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                            </svg>
                                        </label>
                                    </li>
                                    <li className="px-2">
                                        <label htmlFor="video" className="relative">
                                            <input
                                                type="file"
                                                id="video"
                                                name="video"
                                                accept="video/*"
                                                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                                               
                                            />
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                                            </svg>
                                        </label>
                                    </li>
                                    <li className="px-2">
                                        <label htmlFor="img" className="relative">
                                            <input
                                                type="file"
                                                id="img"
                                                name="img"
                                                accept="image/*"
                                                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                                                // onChange={handleFileChange}
                                            />
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                            </svg>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <button onClick={handleSubmit} className="bg-bgPrimary text-white rounded px-3">Share</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
