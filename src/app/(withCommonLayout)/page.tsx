/* eslint-disable react/no-children-prop */
"use client";
import Banner from "@/components/Pages/Home/Banner";
import PostList from "@/components/Pages/Home/PostList";
import Container from "@/components/shared/Container/Container";

import { AiOutlineArrowUp } from "react-icons/ai";
const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        {" "}
        <Banner></Banner>
        <PostList></PostList>
        <div className="card-actions justify-end">
          <a href="#" className=" bottom-0  rounded-full">
            <AiOutlineArrowUp className="w-14 h-16 animate-bounce" />
          </a>{" "}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
