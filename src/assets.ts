export const iconURL =
  "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20%20%20%20d%3D%22M10%208V0H8v8H0v2h8v8h2v-8h8V8h-8ZM4%200h2v2H4V0Zm8%200h2v2h-2V0Zm4%200h2v2h-2V0Zm0%204h2v2h-2V4Zm0%208h2v2h-2v-2ZM0%204h2v2H0V4Zm0%208h2v2H0v-2ZM0%200h2v2H0V0Zm4%2016h2v2H4v-2Zm8%200h2v2h-2v-2Zm4%200h2v2h-2v-2ZM0%2016h2v2H0v-2Z%22%20%2F%3E%3C%2Fsvg%3E";

interface I18n {
  tableBorderAdjusterTitle: string;
  tableBorderAdjusterPlaceholder: string;
  tableBorderAdjusterTop: string;
  tableBorderAdjusterBottom: string;
  tableBorderAdjusterLeft: string;
  tableBorderAdjusterRight: string;
  tableBorderAdjusterSelectedCells: string;
  tableBorderAdjusterReset: string;
  tableBorderAdjusterNone: string;
  tableBorderAdjusterNormal: string;
  tableBorderAdjusterMedium: string;
  tableBorderAdjusterThick: string;
  tableBorderAdjusterExtraThick: string;
}

export const presetI18n = {
  ko: {
    tableBorderAdjusterTitle: "외곽선 굵기 설정",
    tableBorderAdjusterPlaceholder: "굵기 선택",
    tableBorderAdjusterTop: "상단 외곽선",
    tableBorderAdjusterBottom: "하단 외곽선",
    tableBorderAdjusterLeft: "좌측 외곽선",
    tableBorderAdjusterRight: "우측 외곽선",
    tableBorderAdjusterSelectedCells: "선택한 셀 전체",
    tableBorderAdjusterReset: "초기화하기",
    tableBorderAdjusterNone: "굵기 없음",
    tableBorderAdjusterNormal: "보통 굵기",
    tableBorderAdjusterMedium: "중간 굵기",
    tableBorderAdjusterThick: "두꺼운 굵기",
    tableBorderAdjusterExtraThick: "좀 더 두꺼운 굵기",
  },
  en: {
    tableBorderAdjusterTitle: "Set Thickness",
    tableBorderAdjusterPlaceholder: "Select thickness",
    tableBorderAdjusterTop: "Top",
    tableBorderAdjusterBottom: "Bottom",
    tableBorderAdjusterLeft: "Left",
    tableBorderAdjusterRight: "Right",
    tableBorderAdjusterSelectedCells: "Selected Cells",
    tableBorderAdjusterReset: "Reset",
    tableBorderAdjusterNone: "None",
    tableBorderAdjusterNormal: "Normal",
    tableBorderAdjusterMedium: "Medium",
    tableBorderAdjusterThick: "Thick",
    tableBorderAdjusterExtraThick: "Extra Thick",
  },
} as const satisfies Record<string, I18n>;
