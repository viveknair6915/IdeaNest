import Post from '../components/Post'
export default function Profile() {
    return (
       <div className=''>
        <div className='mt-5 pb-5 mx-5 shadow-2xl flex justify-center items-center rounded-xl'>
        <h1 className='font-bold text-4xl font-primaryFont'>Whats on your mind? Share it to the word, it can be the next big thing! </h1>
       <Post />
        </div>
       </div>
    );
}
