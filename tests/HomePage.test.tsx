import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getPosts } from '../utils/api';
import HomePage from '../pages/index';
import { Post } from '../utils/api';

// Mock the API
jest.mock('../utils/api', () => ({
  getPosts: jest.fn(),
}));

const mockPosts: Post[] = [
  { id: 1, title: 'Post 1', body: 'This is the body of Post 1' },
  { id: 2, title: 'Post 2', body: 'This is the body of Post 2' },
  { id: 3, title: 'Post 3', body: 'This is the body of Post 3' },
];

describe('HomePage Component', () => {
  beforeEach(() => {
    (getPosts as jest.Mock).mockResolvedValue({
      data: mockPosts,
      total: 3,
    });
  });

  it('renders the HomePage component with initial loading state', async () => {
    render(<HomePage />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    });

    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  it('filters posts based on the search query', async () => {
    render(<HomePage />);
    await waitFor(() => {
      expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    });

    const searchInput = screen.getByLabelText(/search by title/i);
    fireEvent.change(searchInput, { target: { value: 'Post 2' } });

    expect(screen.queryByText('Post 1')).not.toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  it('shows "No Results Found" when search query matches no posts', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    });

    const searchInput = screen.getByLabelText(/search by title/i);
    fireEvent.change(searchInput, { target: { value: 'Nonexistent Post' } });

    expect(screen.getByText(/No Results Found/i)).toBeInTheDocument();
    expect(screen.queryByText(/Post 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Post 2/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Post 3/i)).not.toBeInTheDocument();
  });

  it('handles pagination correctly', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    });

    (getPosts as jest.Mock).mockResolvedValue({
      data: [{ id: 4, title: 'Post 4', body: 'This is the body of Post 4' }],
      total: 4,
    });

    const nextPageButton = screen.getByRole('button', { name: /2/i });
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(screen.getByText(/Post 4/i)).toBeInTheDocument();
    });
  });

  it('resets to the first page when posts per page dropdown changes', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    });
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();

    (getPosts as jest.Mock).mockResolvedValue({
      data: Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        title: `Post ${index + 1}`,
        body: `This is the body of Post ${index + 1}`,
      })),
      total: 20,
    });

    const dropdown = screen.getByRole('button', { name: /10/i });
    fireEvent.mouseDown(dropdown);
    const menuItem = screen.getByText('20');
    fireEvent.click(menuItem);

    await waitFor(() => {
      expect(getPosts).toHaveBeenCalledWith(1, 20);
      expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    });

    const currentPage = screen.getByRole('button', { name: /1/i });
    expect(currentPage).toHaveAttribute('aria-current', 'true');
  });

  it('displays an error message on API failure', async () => {
    (getPosts as jest.Mock).mockRejectedValue(new Error('API Error'));
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/an unexpected error occurred/i)).toBeInTheDocument();
    });
  });
});