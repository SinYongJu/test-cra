import React from "react";
import { useTranslation } from "react-i18next";

function MyComp(props) {
  const { t, i18n } = useTranslation("mycompo");
  return <div>{t("title")}</div>;
}

export default MyComp;
