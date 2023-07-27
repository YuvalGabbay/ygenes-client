import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./Header.module.css";
export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href={`/`}>Gene Distance Finder</a>
        </Typography>
        <div className={styles.toolBarButtons}>
          <a href={`/presentation`}>Presentation</a>
          <a href={`/about`}>About</a>
        </div>
      </Toolbar>
    </AppBar>
  );
}
