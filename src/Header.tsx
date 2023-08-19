import { AppBar, Toolbar, Typography } from "@mui/material";
import styles from "./Header.module.css";
import OriGene2DLogo from "./images/OriGene2D_logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={`/`}>
            <img className={styles.OriGene2DLogo} src={OriGene2DLogo} />
          </Link>
        </Typography>
        <div className={styles.toolBarButtons}>
          <Link to={`/presentation`}>Presentation</Link>
          <Link to={`/about`}>About</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
