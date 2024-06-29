import i18next from "i18next";
export function getMultiplierFlavor(damageMultiplier: number | undefined) : string {
  if (damageMultiplier === undefined) {
    return i18next.t("fightUiHandler:flavorNone");
  } else if (damageMultiplier < 0.3) {
    return i18next.t("fightUiHandler:flavorNeutralized");
  } else if (damageMultiplier <= 0.5) {
    return i18next.t("fightUiHandler:flavorWeak");
  } else if (damageMultiplier < 1) {
    return i18next.t("fightUiHandler:flavorDisadvantage");
  } else if (damageMultiplier === 1) {
    return i18next.t("fightUiHandler:flavorOrdinary");
  } else if (damageMultiplier <= 1.5) {
    return i18next.t("fightUiHandler:flavorAdvantage");
  } else if (damageMultiplier < 3.0) {
    return i18next.t("fightUiHandler:flavorOverwhelming");
  }
  return i18next.t("fightUiHandler:flavorOneHitKo");
}

export function getAccuracyFlavor(accuracy: number | undefined) : string {
  if (accuracy === undefined) {
    return i18next.t("fightUiHandler:accuracyFlavorNone");
  } else if (accuracy <= 20) {
    return i18next.t("fightUiHandler:accuracyFlavorBlind");
  } else if (accuracy <= 50) {
    return i18next.t("fightUiHandler:accuracyFlavorLow");
  } else if (accuracy <= 75) {
    return i18next.t("fightUiHandler:accuracyFlavorCommon");
  } else if (accuracy <= 90) {
    return i18next.t("fightUiHandler:accuracyFlavorHigh");
  } else {
    return i18next.t("fightUiHandler:accuracyFlavorPerfect");
  }
}

export function getPPFlavor(current: number, max: number) : string {
  if (max === 1 && current === 1) {
    return i18next.t("fightUiHandler:ppFlavorSingleUse");
  }
  const percentage = current / max;
  if (percentage === 0) {
    return i18next.t("fightUiHandler:ppFlavorEmpty");
  } else if (percentage < 0.25) {
    return i18next.t("fightUiHandler:ppFlavorLow");
  } else if (percentage < 0.75) {
    return i18next.t("fightUiHandler:ppFlavorMedium");
  } else {
    return i18next.t("fightUiHandler:ppFlavorHigh");
  }
}

export function getPowerFlavor(power: number | undefined) : string {
  if (power === undefined) {
    return i18next.t("fightUiHandler:powerFlavorNone");
  } else if (power <= 10) {
    return i18next.t("fightUiHandler:powerFlavorZero");
  } else if (power <= 20) {
    return i18next.t("fightUiHandler:powerFlavorLow");
  } else if (power <= 50) {
    return i18next.t("fightUiHandler:powerFlavorCommon");
  } else if (power <= 75) {
    return i18next.t("fightUiHandler:powerFlavorAverage");
  } else if (power <= 100) {
    return i18next.t("fightUiHandler:powerFlavorOverAverage");
  } else if (power <= 150) {
    return i18next.t("fightUiHandler:powerFlavorGreat");
  } else {
    return i18next.t("fightUiHandler:powerFlavorMagnificent");
  }
}
