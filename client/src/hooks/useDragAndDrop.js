import { useState, useRef, useEffect } from "react";

export const useDragAndDrop = () => {
  const drop = useRef(null);

  const [dragging, setDragging] = useState("hidden");
  const getFile = (file) => {
    setNameFile(file[0].name);
    for (let index = 0; index < file.length; index++) {
      dispatch(setLoaderShowState(true));
      setDragging("hidden");
      setRequest({ file: file[index], intentos: 1 });
    }
  };

  const formats = [".png", ".jpg"];

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.dataTransfer.files);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging("block");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging("hidden");
  };

  useEffect(() => {
    if (drop.current !== null) {
      drop.current.addEventListener("dragover", handleDragOver);
      drop.current.addEventListener("drop", handleDrop);
      drop.current.addEventListener("dragenter", handleDragEnter);
      drop.current.addEventListener("dragleave", handleDragLeave);
    }
  }, []);

  return {
    drop,
    dragging,
  };
};
