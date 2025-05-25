"use client";
import DefaultLayout from "@/layouts/default";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
  addToast,
} from "@heroui/react";
import { useState } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";
import { publications } from "@/config/posts";

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
  content: string; // Markdown content
  author: string;
  authorName: string;
  likes: number;
  views: number;
  comments: Comment[];
  tags: string[];
  createdAt: string;
};

export default function PublicationsPage() {
  const [posts, setPosts] = useState<Post[]>(publications);

  // const [newComment, setNewComment] = useState("");

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
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
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      })
    );
  };

  const handleShare = (post: Post) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Post by ${post.authorName}`,
          text: post.text,
          url: window.location.href,
        })
        .then(() => {
          addToast({
            title: "Shared!",
            description: "Post shared successfully",
            timeout: 2000,
            shouldShowTimeoutProgress: true,
            color: "success",
          });
        });
    }
  };

  // const handleComment = (postId: number) => {
  //   if (!newComment.trim()) return;

  //   setPosts(
  //     posts.map((post) => {
  //       if (post.id === postId) {
  //         return {
  //           ...post,
  //           comments: [
  //             ...post.comments,
  //             {
  //               id: post.comments.length + 1,
  //               text: newComment,
  //               author: "@user",
  //               authorName: "User",
  //               timestamp: "Just now",
  //             },
  //           ],
  //         };
  //       }
  //       return post;
  //     })
  //   );

  //   setNewComment("");
  //   addToast({
  //     title: "Comment added!",
  //     description: "Your comment has been posted",
  //     timeout: 2000,
  //     shouldShowTimeoutProgress: true,
  //     color: "success",
  //   });
  // };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-3xl space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="w-full">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="https://avatars.githubusercontent.com/u/177216990?s=400&u=85d90a005291c4f6df0c9ff0bd2ec023486ff1fa&v=4"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <Link
                      href={`/publications/${post.id}`}
                      passHref
                      legacyBehavior
                    >
                      <h4 className="text-xl font-semibold text-default-600 hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                    </Link>
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
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p className="py-2">{post.text}</p>
                <div className="flex gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-primary">
                      #{tag}
                    </span>
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
                      onClick={() => handleLike(post.id)}
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
                    <Link
                      href={`/publications/${post.id}`}
                      passHref
                      legacyBehavior
                    >
                      <Button
                        color="primary"
                        radius="full"
                        size="sm"
                        onClick={() => handleShare(post)}
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
