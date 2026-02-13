import Icon from "@mdi/react";
import { mdiWeb } from "@mdi/js";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useTranslation } from "react-i18next";
import { defaultTranslationModules } from "../../i18n";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSetLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleCloseMenu();
  };

  return (
    <div>
      <Button onClick={handleOpenMenu}>
        <Icon path={mdiWeb} size={1} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {defaultTranslationModules.map((lng) => (
          <MenuItem
            key={lng.locale}
            selected={lng.locale === i18n.resolvedLanguage}
            onClick={() => handleSetLanguage(lng.locale)}
          >
            {lng.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSwitch;
