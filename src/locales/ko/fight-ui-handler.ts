import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const fightUiHandler: SimpleTranslationEntries = {
  "pp": "PP",
  "power": "위력",
  "accuracy": "명중률",
  "abilityFlyInText": " {{pokemonName}}의 {{passive}}{{abilityName}}",
  "ppFlavorSingleUse": "흐릿함",
  "ppFlavorEmpty": "번아웃",
  "ppFlavorLow": "지침",
  "ppFlavorMedium": "뻐근함",
  "ppFlavorHigh": "활기참",
  "powerFlavorZero": "의미 없음",
  "powerFlavorLow": "의심스러움",
  "powerFlavorCommon": "평범함",
  "powerFlavorAverage": "평균",
  "powerFlavorOverAverage": "평균 이상",
  "powerFlavorGreat": "굉장함",
  "powerFlavorMagnificent": "고무적임",
  "accuracyFlavorBlind": "눈 뜬 장님",
  "accuracyFlavorLow": "수술이 필요함",
  "accuracyFlavorCommon": "맞출 수는 있음",
  "accuracyFlavorHigh": "나쁘지 않음",
  "accuracyFlavorVeryHigh": "잘 맞음",
  "accuracyFlavorPerfect": "백발 백중",
  "damageMultiplierWithFlavor": "x{{damage}} ({{flavor}})",
  "damageOnlyFlavor": "({{flavor}})",
  "flavorNeutralized": "무력화됨!",
  "flavorWeak": "미약함!",
  "flavorDisadvantage": "불리함",
  "flavorOrdinary": "평범함",
  "flavorAdvantage": "유리함",
  "flavorOverwhelming": "압도적!",
  "flavorOneHitKo": "일격 필살!",
  "flavorExpGainNormal": "",
  "passive": "패시브 ", // The space at the end is important
  // Extra string here to avoid adding a new locale file
  "cancel": "취소",
  "back": "돌아가기",
  "until_next_lv": "레벨업까지:",
  "exp": "경험치",
  "luck_prefix": "행운: ",
  "nature": "{{nature}}한 성격.",
  "met": "레벨 {{level}}때 {{place}}에서 만났다.",
  "met_apparently": "레벨 {{level}}때 {{place}}에서 만났다.",
  "met_unknown": "{{place}}에서 만났다.",
  "memo_text": "{{nature_text}}\n{{met_text}}",
  "do_what": "이 포켓몬으로 무엇을 하시겠습니까?",
  "select_move": "기술을 선택하세요.",
  "modifier_transfer": "전달할 아이템을 선택하세요. \n< 키와 > 키를 사용해 개수를 조정하세요.",
  "splice": "유전자를 병합할 다른 포켓몬을 선택하세요.",
  "goodbye_1": "안녕, {{pokemonName}}!",
  "goodbye_2": "잘가, {{pokemonName}}!",
  "goodbye_3": "그리울거야, {{pokemonName}}!",
  "goodbye_4": "다시 만날 수 있을거야, {{pokemonName}}!",
  "goodbye_5": "다시 만날 수 있을거야, {{pokemonName}}!",
  "goodbye_6": "산 사람은 살아야지, {{pokemonName}}아..",
  "goodbye_7": "나는 나보다 나약한 포켓몬은 필요 없어, {{pokemonName}}.",
  "goodbye_8": "어라, {{pokemonName}}가 망가졌네? 오래 쓰긴 했지.",
  "goodbye_9": "너로 안 정했다, {{pokemonName}}!",
  "goodbye_10": "고무적이지 못하군, {{pokemonName}}.",
} as const;
