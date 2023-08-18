import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./Header.module.css";
import OriGene2DLogo from "./images/OriGene2D_logo.png";
import enricherLogo from "./images/EnricherKG_logo.png";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href={`/`}>
            <img className={styles.OriGene2DLogo} src={OriGene2DLogo} />
          </a>
        </Typography>
        <div className={styles.toolBarButtons}>
          <a href={`/presentation`}>Presentation</a>
          <a href={`/about`}>About</a>
        </div>
      </Toolbar>
    </AppBar>
  );
}
