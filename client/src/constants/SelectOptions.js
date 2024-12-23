const selectItems = {
  categoryOptions: [
    {
      value: "uncategorized",
      label: "Select a category",
      selected: true,
    },
    { value: "javascript", label: "Javascript" },
    { value: "react.js", label: "React.js" },
    { value: "next.js", label: "Next.js" },
    { value: "typescript", label: "Typescript" },
    { value: "github", label: "Git-hub" },
    { value: "travel", label: "Travel" },
  ],
  orderOptions: [
    {
      value: "desc",
      label: "Latest Posts",
      selected: true,
    },
    { value: "asc", label: "Oldest Posts" },
  ],
};

export default selectItems;
