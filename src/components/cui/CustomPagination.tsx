"use client"

import { useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Suspense } from "react";
// import { useEffect, useState } from "react";

const MAX_PAGE_WINDOW = 5;

function MyPaginationSuspense({ TOTAL_PAGES = 5 }: { TOTAL_PAGES?: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get('page') || '1');
  const currentPageSize = parseInt(searchParams.get('pageSize') || '10');
  // const [internalPage, setInternalPage] = useState(currentPage);

  // Calculate window range (same logic as before)
  const startPage = Math.max(1, currentPage - MAX_PAGE_WINDOW + 1);
  const endPage = Math.min(TOTAL_PAGES, startPage + MAX_PAGE_WINDOW - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Update both URL and internal state
  const handlePageChange = (newPage: number) => {
    // setInternalPage(newPage);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handlePageSize = (pageSize: number) => {
    // setInternalPage(newPage);
    const params = new URLSearchParams(searchParams.toString());
    params.set('pageSize', pageSize.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Sync internal state with URL on mount
  // useEffect(() => {
  //   setInternalPage(currentPage);
  // }, [currentPage]);

  return (
    <div className="relative flex items-center justify-center gap-4">
      <p className="hidden md:block absolute top-2 left-2 text-gray-500 font-semibold ">{`Showing ${currentPage} to ${TOTAL_PAGES} pages`}</p>
      <div className="flex max-md:flex-wrap justify-center items-center gap-4 md:gap-1">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                isActive={currentPage === 1}
                aria-disabled={currentPage === 1}
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              />
            </PaginationItem>

            {pageNumbers.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                isActive={currentPage === TOTAL_PAGES}
                aria-disabled={currentPage === TOTAL_PAGES}
                onClick={() => handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Select defaultValue={currentPageSize.toString()} onValueChange={(value) => handlePageSize(parseInt(value))}>
          <SelectTrigger variant="paginationSelect" size="lg" className="w-[180px] h-9 md:h-10 lg:h-11 bg-[#C2C2ED]">
            <SelectValue placeholder="10/page" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="10">10/page</SelectItem>
              <SelectItem value="20">20/page</SelectItem>
              <SelectItem value="50">50/page</SelectItem>
              <SelectItem value="100">100/page</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default function CustomPagination({ TOTAL_PAGES }: { TOTAL_PAGES?: number }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyPaginationSuspense TOTAL_PAGES={TOTAL_PAGES} />
    </Suspense>
  );
}