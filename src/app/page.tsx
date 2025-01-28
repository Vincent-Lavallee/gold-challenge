"use client";
import { Box } from "@mui/material";
import { useState } from "react";

const handleScroll = (e: Event) => {
  const target = e.target as HTMLElement;
  const currentScrollPosition = target?.scrollTop + target?.offsetHeight;
  const hasReachedTreshold =
    currentScrollPosition >= 0.6 * target?.scrollHeight;

  // Do something once hasReachedTreshold is true
};

export default function Home() {
  const [todos, setTodos] = useState<any[]>([
    { id: 1, title: "Todo 1" },
    { id: 1, title: "Todo 2" },
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box sx={{ width: "33%", height: "30vh", overflowY: "auto" }}>
        {todos.map((todo) => (
          <Box sx={{ border: "2px solid black", p: "1rem" }}>{todo.title}</Box>
        ))}
      </Box>
    </Box>
  );
}
