import React from "react";
import { useTranslation } from "react-i18next";

import Strings from "../../configuration/strings";

const PlaceHolder = () => {
  const { t } = useTranslation();
  return <div>{t(Strings.PlaceHolderMessage)}</div>;
};

export default PlaceHolder;
