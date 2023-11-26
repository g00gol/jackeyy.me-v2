export default function Loading() {
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center bg-base-100">
      <h1>Loading</h1>
      <span className="loading loading-spinner loading-lg text-secondary"></span>
    </div>
  );
}
