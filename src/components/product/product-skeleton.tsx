export default function ProductSkeleton() {
  return (
    <article className="bg-white p-5 rounded-lg border border-[#d4d4d4] w-full max-w-md animate-pulse space-y-4">
      {/* Title */}
      <div className="h-5 bg-gray-200 rounded w-2/3" />

      {/* Image */}
      <div className="w-full h-[150px] bg-gray-200 rounded-md" />

      {/* Price */}
      <div className="flex items-center space-x-2">
        <div className="h-5 w-12 bg-gray-200 rounded" />
        <div className="h-5 w-20 bg-gray-200 rounded" />
      </div>

      {/* Details */}
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-gray-200 rounded" />
        <div className="h-6 w-16 bg-gray-200 rounded" />
        <div className="h-6 w-24 bg-gray-200 rounded" />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <div className="w-full h-10 bg-gray-200 rounded" />
        <div className="w-10 h-10 bg-gray-200 rounded" />
      </div>
    </article>
  );
}



