import { DotLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <DotLoader color="#013f86" loading size={80} />
    </div>
  );
}
