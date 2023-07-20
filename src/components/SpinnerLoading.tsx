type Props = {
  height?: string;
  width?: string;
  message?: string;
};

export default function SpinnerLoading({ height, width, message }: Props) {
  if (!height) {
    height = "h-10";
  }
  if (!width) {
    width = "w-10";
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-gray-900 dark:border-white ${height} ${width}`}
      ></div>
      <span className="text-gray-800 dark:text-white py-3">{message}</span>
    </div>
  );
}
