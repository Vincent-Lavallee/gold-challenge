const ITEM_PER_PAGE = 25;

interface GetTodoReturnPayload {
  data: Array<{ id: number; title: string }>;
  pagination: { hasPrev: boolean; hasNext: boolean; page: number };
}

const getTodoPaginated = ({ page }: { page: number }) => {
  const skip = (page - 1) * ITEM_PER_PAGE;

  const todos = Array(ITEM_PER_PAGE)
    .fill(0)
    .map((_, index) => ({
      id: skip + index + 1,
      title: `Todo ${skip + index + 1}`,
    }));

  return new Promise<GetTodoReturnPayload>((resolve) =>
    resolve({
      pagination: { hasPrev: page > 1, hasNext: false, page },
      data: todos,
    })
  );
};

const todoApi = {
  getTodoPaginated,
};

export default todoApi;
