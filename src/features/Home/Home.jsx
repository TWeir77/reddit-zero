import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import {
    selectFilteredPosts,
    fetchPosts,
    setSearchTerm,
    fetchComments
} from '../../store/redditSlice';
import './Home.css';

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };
        return getComments;
    };

    if (isLoading) {
        return (
            <>
                {Array(getRandomNumber(3, 10)).fill
                    (<PostLoading />)}
            </>
        );
    }

    return (
        <>
            {posts.map((post, index) => (
                <Post
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </>
    );
};

export default Home;