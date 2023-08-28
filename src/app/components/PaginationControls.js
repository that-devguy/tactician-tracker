import Link from "next/link";

export default function PaginationControls({ currentPage, totalPages }) {
  return (
    <div className="pagination">
      {currentPage > 1 && <Link href={`?page=${currentPage - 1}`}>Prev</Link>}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link key={index} href={`?page=${index + 1}`}>
          {index + 1}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`}>Next</Link>
      )}
    </div>
  );
}
