export default function Loading() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-row gap-4 items-center justify-center content-center w-full h-full">
        <div className="border-white border-t-transparent border-4 w-8 h-8 rounded-full animate-spin" />
        <h1 className="text-white text-3xl"> Loading... </h1>
      </div>
    </div>
  );
}