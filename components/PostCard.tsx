import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Button } from '@mui/material';

// Importing the Post type
import { Post } from '../utils/api';

interface PostCardProps {
  post: Post; // The Post property type
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.body.substring(0, 100)}... {/* Displays a short summary of the content */}
        </Typography>
        <Link href={`/posts/${post.id}`} passHref>
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PostCard;