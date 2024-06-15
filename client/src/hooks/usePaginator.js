import { useState } from "react";
import { useSocketIo } from "./useSocketIo";
import { useDispatch } from "react-redux";
import { setDataRenderSlice } from "../store/slices/dataRender";

export const usePaginator = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [page, setPage] = useState(currentPage);

  const dispatch = useDispatch();

  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);

  const getRenders = (limit = 4, offset = 0) => {
    const data = { limit, offset };

    socket.emit("getDBRenders", data);

    socket.on("getRenders", async (newData) => {
      dispatch(setDataRenderSlice([]));
      dispatch(setDataRenderSlice(newData));
    });
  };

  const handlePrevious = () => {
    if (page > 1) {
      const newPage = page - 1;

      setPage(newPage);

      onPageChange(newPage);

      getRenders(4, newPage - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      const newPage = page + 1;

      setPage(newPage);
      
      onPageChange(newPage);

      getRenders(4, newPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);

    onPageChange(pageNumber);

    getRenders(4, pageNumber - 1);
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    let startPage = Math.max(1, page - 2);

    let endPage = Math.min(totalPages, page + 2);

    if (page <= 3) {
      endPage = Math.min(5, totalPages);
    }

    if (page > totalPages - 3) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };
  return {
    page,
    handlePrevious,
    handleNext,
    handlePageClick,
    getVisiblePages,
  };
};
