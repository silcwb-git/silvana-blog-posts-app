import React, { useState, useEffect } from 'react';
import { getPosts, Post } from '../utils/api';
import PostCard from '../components/PostCard';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [postsPerPage, setPostsPerPage] = useState(10);

  const fetchPosts = async (currentPage: number, limit: number) => {
    setLoading(true);
    try {
      const { data, total } = await getPosts(currentPage, limit);
      setPosts(data);
      setFilteredPosts(data);
      setTotalPages(Math.ceil(total / limit));
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page, postsPerPage);
  }, [page, postsPerPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handlePostsPerPageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPostsPerPage(event.target.value as number);
    setPage(1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Posts</h1>

      <TextField
        label="Search by title"
        variant="outlined"
        fullWidth
        onChange={handleSearch}
        value={searchQuery}
        style={{ marginBottom: '20px' }}
      />

      <Select
        value={postsPerPage}
        onChange={handlePostsPerPageChange}
        style={{ marginBottom: '20px', display: 'block', width: '200px' }}
        variant="outlined"
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>

      {loading ? (
        <CircularProgress />
      ) : (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      )}

      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
        variant="outlined"
        color="primary"
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};

export default HomePage;