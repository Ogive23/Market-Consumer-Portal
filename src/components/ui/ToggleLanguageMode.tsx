import * as React from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";

interface ToggleLanguageModeProps {
  language: String;
  toggleLanguageMode: () => void;
}

function ToggleLanguageMode({
  language,
  toggleLanguageMode,
}: ToggleLanguageModeProps) {
  return (
    <Box sx={{ maxWidth: "32px" }}>
      <Button
        variant="text"
        onClick={toggleLanguageMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: "32px", height: "32px", p: "4px" }}
      >
        {language === "ar" ? (
          <LanguageIcon fontSize="small" />
        ) : (
          <PublicIcon fontSize="small" />
        )}
      </Button>
    </Box>
  );
}

export default ToggleLanguageMode;
