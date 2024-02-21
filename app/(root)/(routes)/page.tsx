"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

//strona wyłącznie do wywołania modala

const SetupPage = () => {
  //importy dobrze działające w effect hook
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen(); //jesli zamkniety, otwieramy
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
