import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { CircularProgress, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Post, Comment } from '../../utils/api';

interface PostDetailsProps {
  post: Post;
  comments: Comment[];
}

const PostDetails: React.FC<PostDetailsProps> = ({ post, comments }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {post.body}
      </Typography>
      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Comments
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id} alignItems="flex-start">
            <ListItemText
              primary={comment.name}
              secondary={
                <>
                  <span>{comment.email}</span>
                  <br />
                  {comment.body}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    // Fetch the post and its comments concurrently
    const [postRes, commentsRes] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
    ]);

    return {
      props: {
        post: postRes.data,
        comments: commentsRes.data,
      },
    };
  } catch (error: unknown) {
    // Handle 'unknown' errors safely
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      throw new Error('Unable to fetch the post or comments. Please try again later.');
    } else if (error instanceof Error) {
      console.error('Error:', error.message);
      throw new Error('An unexpected error occurred. Please try again later.');
    } else {
      console.error('Unknown error occurred');
      throw new Error('An unknown error occurred. Please try again later.');
    }
  }
};

export default PostDetails;