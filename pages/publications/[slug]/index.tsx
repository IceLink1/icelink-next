"use client"
import { useRouter } from 'next/router';
import DefaultLayout from '@/layouts/default';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Input, addToast } from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import confetti from 'canvas-confetti';

type Comment = {
  id: number;
  text: string;
  author: string;
  authorName: string;
  timestamp: string;
};

type Post = {
  id: number;
  slug: string;
  title: string;
  text: string;
  content: string;
  author: string;
  authorName: string;
  likes: number;
  views: number;
  comments: Comment[];
  tags: string[];
  createdAt: string;
};

export default function PostPage() {
  const router = useRouter();
  const { slug: postId } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (!postId) return;
    // In a real app, fetch post data from an API
    // For now, we'll use mock data
    const mockPosts: Post[] = [
      {
        id: 1,
        slug: 'nextjs-project-deployment',
        title: 'Next.js Project Deployment',
        text: "Just deployed my new Next.js project! Check out the smooth animations and responsive design.",
        content: "# Next.js Project Deployment\n\nI'm excited to share my latest project built with Next.js! 🚀\n\n## Key Features\n\n- Smooth animations\n- Responsive design\n- Modern UI components\n\n```jsx\nconst MyComponent = () => {\n  return <div>Hello World!</div>;\n}\n```\n",
        author: "@icelink39",
        authorName: "IceLink",
        likes: 42,
        views: 156,
        comments: [
          {
            id: 1,
            text: "Looks amazing! Love the UI/UX",
            author: "@webdev",
            authorName: "WebDev",
            timestamp: "2 hours ago"
          }
        ],
        tags: ["webdev", "nextjs", "frontend"],
        createdAt: "2024-01-10T12:00:00Z"
      },
      {
        id: 2,
        slug: 'microservices-architecture',
        title: 'Microservices Architecture with Docker and Kubernetes',
        text: "Working on a new microservices architecture. Docker + Kubernetes makes everything better!",
        content: "# Microservices Architecture with Docker and Kubernetes\n\n## Introduction\n\nIn this post, I'll share my experience setting up a microservices architecture using Docker and Kubernetes.\n\n### Benefits\n\n1. Scalability\n2. Maintainability\n3. Deployment flexibility\n\n```yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: example\n```\n",
        author: "@icelink39",
        authorName: "IceLink",
        likes: 89,
        views: 234,
        comments: [
          {
            id: 1,
            text: "Great stack choice!",
            author: "@devops",
            authorName: "DevOps",
            timestamp: "1 hour ago"
          }
        ],
        tags: ["docker", "kubernetes", "microservices"],
        createdAt: "2024-01-09T15:30:00Z"
      }
    ];

    const foundPost = mockPosts.find(p => p.id === Number(postId));
    if (foundPost) {
      setPost(foundPost);
    }
  }, [postId]);

  const handleLike = () => {
    if (!post) return;
    
    setPost({ ...post, likes: post.likes + 1 });
    confetti({
      angle: 190,
      particleCount: 100,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
      colors: ["#FF0000", "#00FF00", "#0000FF"],
    });
    addToast({
      title: "Liked!",
      description: "Thanks for your support!",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      color: "success",
    });
  };

  const handleComment = () => {
    if (!post || !newComment.trim()) return;

    const newCommentObj = {
      id: post.comments.length + 1,
      text: newComment,
      author: "@user",
      authorName: "User",
      timestamp: "Just now"
    };

    setPost({
      ...post,
      comments: [...post.comments, newCommentObj]
    });

    setNewComment('');
    addToast({
      title: "Comment added!",
      description: "Your comment has been posted",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      color: "success",
    });
  };

  if (!post) {
    return (
      <DefaultLayout>
        <div className="flex items-center justify-center h-[70vh]">
          <p>Loading...</p>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="w-full">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://avatars.githubusercontent.com/u/177216990?s=400&u=85d90a005291c4f6df0c9ff0bd2ec023486ff1fa&v=4"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-xl font-semibold text-default-600">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2">
                  <h5 className="text-small tracking-tight text-default-400">
                    {post.authorName}
                  </h5>
                  <span className="text-small text-default-400">•</span>
                  <span className="text-small text-default-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-default-600">
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  code({ node, className, children, ...props }: { node?: any, className?: string, children?: React.ReactNode, inline?: boolean }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !props.inline && match ? (
                      <SyntaxHighlighter
                        style={tomorrow as { [key: string]: React.CSSProperties }}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            <div className="flex gap-2 pt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-primary">#{tag}</span>
              ))}
            </div>
          </CardBody>
          <CardFooter className="flex-col gap-3">
            <div className="flex w-full justify-between">
              <div className="flex gap-4">
                <Button
                  color="primary"
                  radius="full"
                  size="sm"
                  variant="light"
                  onClick={handleLike}
                >
                  ❤️ {post.likes}
                </Button>
                <Button
                  color="primary"
                  radius="full"
                  size="sm"
                  variant="light"
                >
                  👁️ {post.views}
                </Button>
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <div className="space-y-4">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-2 items-start">
                    <Avatar
                      size="sm"
                      src="https://i.pravatar.cc/150?img=4"
                    />
                    <div className="flex-1 bg-default-100 rounded-lg p-2">
                      <div className="flex justify-between items-center">
                        <span className="text-small font-semibold">{comment.authorName}</span>
                        <span className="text-tiny text-default-400">{comment.timestamp}</span>
                      </div>
                      <p className="text-small">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Input
                  size="sm"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button
                  color="primary"
                  size="sm"
                  onClick={handleComment}
                >
                  Post
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DefaultLayout>
  );
}