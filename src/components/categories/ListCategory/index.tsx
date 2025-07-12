"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Button } from "@mui/material";
//List category
import { listCategory } from "@/constant";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

//styles
import Styles from "@/styles/category.module.css";

const ListCategory = () => {
  const [listItem, setListItem] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const handleClick = (category: string) => {
    setListItem(category);
    if (listItem === category) {
      setOpen(!open);
    } else {
      setOpen(true);
    }
  };
  const handleShowCategories = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      <Button
        sx={{ textTransform: "capitalize" }}
        className={Styles.openNav}
        onClick={() => handleShowCategories()}
      >
        {showCategory ? "Close Categories" : "Open Categories"}
      </Button>
      {(showCategory || !isMobile) && (
        <List component="nav" sx={{ pt: 5 }} className={Styles.nav}>
          {listCategory.map((item) => (
            <React.Fragment key={item.text}>
              <ListItemButton onClick={() => handleClick(item.text)}>
                <ListItemText primary={item.text} />
                {item.subMenu && (
                  <span>
                    {open && listItem === item.text ? (
                      <FontAwesomeIcon icon={faAngleUp} />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </span>
                )}
              </ListItemButton>
              <Collapse
                in={open && listItem === item.text}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={item.subMenu} />
                  </ListItemButton>
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      )}
    </>
  );
};
export default ListCategory;
