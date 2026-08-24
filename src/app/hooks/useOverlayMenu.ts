"use client";

import { useCallback, useState } from "react";

export function useOverlayMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveItemId(null);
  }, []);

  // Click on a main menu item -> expand its submenu (mirrors submenu.min.js)
  const selectItem = useCallback((id: string) => {
    setActiveItemId(id);
  }, []);

  // Back arrow inside submenu -> collapse back to main menu list
  const goBack = useCallback(() => {
    setActiveItemId(null);
  }, []);

  return {
    isOpen,
    activeItemId,
    isExpanded: activeItemId !== null,
    open,
    close,
    selectItem,
    goBack,
  };
}