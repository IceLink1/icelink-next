import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  addToast,
} from "@heroui/react";

type TypeCardProps = {
  text: string;
  author: string;
  authorName: string;
  likes: number;
  tags: string[];
};

export default function MyCard({
  text,
  author,
  authorName,
  likes = 942,
  tags = [],
}: TypeCardProps) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [collLikes, setCollLikes] = React.useState(likes);

  const handlerLike = () => {
    setIsLiked(!isLiked);
    setCollLikes(isLiked ? collLikes - 1 : collLikes + 1);
    isLiked
      ? addToast({
          title: "Your like removed :(",
          description: "Pls press again",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
          color: "warning",
        })
      : addToast({
          title: "Your like added :)",
          description: "Thanks",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
          color: "success",
        });
  };

  return (
    <Card className="max-w-[400px] ">
      <CardHeader className="justify-between">
        <div className="flex gap-5 ">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://avatars.githubusercontent.com/u/177216990?s=400&u=85d90a005291c4f6df0c9ff0bd2ec023486ff1fa&v=4"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {authorName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {author}
            </h5>
          </div>
        </div>
        <Button
          className={
            isLiked ? "bg-transparent text-foreground border-default-200" : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isLiked ? "bordered" : "solid"}
          onPress={handlerLike}
        >
          {isLiked ? "Un Like" : "Like"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 p-4">
        <p>{text}</p>
        <span className="pt-2">
          {tags.map((tag) => (
            <span className="p-2">#{tag}</span>
          ))}
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {collLikes}
          </p>
          <p className="text-default-400 text-small">Likes</p>
        </div>
      </CardFooter>
    </Card>
  );
}
