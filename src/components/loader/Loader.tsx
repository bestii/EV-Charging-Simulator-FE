export const Loader = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-1">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          className="mb-5 flex h-60 w-full animate-pulse items-center justify-center rounded-lg bg-gray-300"
          key={item}
        ></div>
      ))}
    </div>
  );
};
