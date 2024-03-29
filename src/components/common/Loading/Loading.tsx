import Skeleton from "@mui/material/Skeleton";

const Loading = ({ children }: LoadingProps) => {
  return (
    <>
      <Skeleton>{children}</Skeleton>
    </>
  );
};
interface LoadingProps {
  children: React.ReactNode;
}
export default Loading;
