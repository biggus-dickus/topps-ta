import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MAX_TOTAL = 7
const PAGE_SLICE = 3

export function generatePagination(currentPage: number, totalPages: number) {
  if (totalPages <= MAX_TOTAL) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  if (currentPage <= PAGE_SLICE) {
    return [1, 2, 3, '...', totalPages - 1, totalPages]
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
  }

  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}
