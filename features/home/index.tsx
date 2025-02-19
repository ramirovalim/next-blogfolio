import Loading from "@/app/loading";
import { Suspense } from "react";
// import { HomeSkeleton } from "./components/Skeleton";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex justify-center items-center h-1/2 font-mono font-bold text-4xl">
        {'(hello) => world!'}
      </div>
    </Suspense>
  )
}

