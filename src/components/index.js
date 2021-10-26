import React from "react";
import { useTranslation } from "react-i18next";

const list = [
  {
    id: 1,
    name: "categories",
  },
  { id: 2, name: "filter" },
  { id: 3, name: "rating" },
  { id: 4, name: "default" },
  {
    id: 5,
    name: "comments",
  },
];
function HeaderComponent(props) {
  const { t } = useTranslation();
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{t(`${item.name}`)}</li>
        ))}
      </ul>
    </>
  );
}

export default HeaderComponent;
