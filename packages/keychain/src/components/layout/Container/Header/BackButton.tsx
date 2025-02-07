import { ArrowLeftIcon } from "@cartridge/ui";
import { isIframe } from "@cartridge/utils";
import { IconButton } from "@chakra-ui/react";

export function BackButton({ onClick }: { onClick?: () => void }) {
  if (!isIframe()) {
    return null;
  }

  return (
    <IconButton
      aria-label="Go Back"
      bg="solid.bg"
      _hover={{
        bg: "solid.bg",
        opacity: 0.75,
      }}
      icon={<ArrowLeftIcon fontSize={24} />}
      onClick={onClick}
    />
  );
}
