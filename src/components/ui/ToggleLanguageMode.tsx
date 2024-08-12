import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";
import { useTranslation } from "react-i18next";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/redux/reducers/language";

function ToggleLanguageMode() {
  const lang = useSelector((state) => state.language.lang);
  const supportedLangs = useSelector((state) => state.language.supportedLangs);
  const dispatch = useDispatch();

  function onclick(event: SelectChangeEvent) {
    dispatch(setLang(event.target.value));
  }

  return (
    <FormControl
      style={{ textAlign: "center", paddingBottom: 0 }}
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
      size="small"
    >
      <Select
        value={lang}
        onChange={onclick}
        displayEmpty
        disableUnderline={true}
        inputProps={{ "aria-label": "Without label" }}
      >
        {Object.entries(supportedLangs).map(([code, name]) => (
          <MenuItem value={code} key={code}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ToggleLanguageMode;
