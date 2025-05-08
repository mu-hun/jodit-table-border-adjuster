# jodit-table-border-adjuster

This plugin allows to adjust the border of a table and cells in the [Jodit WYSIWYG editor](https://xdsoft.net/jodit/)

```typescript
import Jodit from "jodit";
import TableBorderAdjuster from "jodit-table-border-adjuster";
import "jodit-table-border-adjuster/table-border-adjuster.css"; // Import the CSS

Jodit.plugins.add("table-border-adjuster", TableBorderAdjuster);

// Initialize Jodit editor
const editor = Jodit.make("#editor");
```

## Adjusting Borders

1.  **Select a Table or Cells**: Click inside a table in the Jodit editor. You can adjust borders for the entire table or for selected cells.
2.  **Open the Popup**:
    - When a table or cells within a table are selected, a toolbar button (often within the table context popup) with the tooltip "Set Thickness" (or your localized version) will become active.
    - Click this button to open the border adjustment popup.
3.  **Adjust Borders in the Popup**:
    - **Table Outline**: The popup provides dropdown menus to set the thickness for the `Top`, `Bottom`, `Left`, and `Right` borders of the entire table.
    - **Selected Cells**: There is also a dropdown menu to set the border thickness for all currently `Selected Cells`.
    - **Thickness Options**: For each dropdown, you can choose from the following border thicknesses:
      - `None`
      - `Normal`
      - `Medium`
      - `Thick`
      - `Extra Thick`
      - `Reset` (This will remove the specific border attribute)
4.  **Apply Changes**: Selecting an option from the dropdown will immediately apply the corresponding style to the table or cells.

## Localization

This plugin supports localization for the UI elements it introduces.

English `en` and Korean `ko` are supported by default. The plugin will automatically use the language set in your Jodit editor configuration if it's one of these.

### Add Other translations

You can add translations for other languages using Jodit's `i18n` method. Add the translations before initializing the Jodit editor.

The keys for translation are:

- `tableBorderAdjusterTitle`
- `tableBorderAdjusterPlaceholder`
- `tableBorderAdjusterTop`
- `tableBorderAdjusterBottom`
- `tableBorderAdjusterLeft`
- `tableBorderAdjusterRight`
- `tableBorderAdjusterSelectedCells`
- `tableBorderAdjusterReset`
- `tableBorderAdjusterNone`
- `tableBorderAdjusterNormal`
- `tableBorderAdjusterMedium`
- `tableBorderAdjusterThick`
- `tableBorderAdjusterExtraThick`

### Example for adding Japanese translations

```typescript
import Jodit from "jodit";
import TableBorderAdjuster from "jodit-table-border-adjuster";
import "jodit-table-border-adjuster/dist/table-border-adjuster.css";

// Add Japanese translations
Jodit.lang.ja = {
  ...Jodit.lang.ja, // Preserve existing Japanese translations if any
  tableBorderAdjusterTitle: "太さ設定",
  tableBorderAdjusterPlaceholder: "太さ選択",
  tableBorderAdjusterTop: "上",
  tableBorderAdjusterBottom: "下",
  tableBorderAdjusterLeft: "左",
  tableBorderAdjusterRight: "右",
  tableBorderAdjusterSelectedCells: "選択したセル",
  tableBorderAdjusterReset: "リセット",
  tableBorderAdjusterNone: "なし",
  tableBorderAdjusterNormal: "通常",
  tableBorderAdjusterMedium: "中",
  tableBorderAdjusterThick: "太い",
  tableBorderAdjusterExtraThick: "極太",
};

Jodit.plugins.add("table-border-adjuster", TableBorderAdjuster);

// Initialize Jodit editor (ensure Jodit's language is set to 'ja')
const editor = Jodit.make("#editor", {
  language: "ja",
});
```

## How it Works

The plugin works by setting specific `data-*` attributes on the `<table>` element and `<td>` (or `<th>`) elements. You can also set these attributes directly in your HTML if needed.

- **For Table Outline**:
  - `data-border-top="<thickness>"`
  - `data-border-bottom="<thickness>"`
  - `data-border-left="<thickness>"`
  - `data-border-right="<thickness>"`
- **For Individual Cells**:
  - `data-border-width="<thickness>"`

Where `<thickness>` can be one of `none`, `normal`, `medium`, `thick`, or `extra-thick`.

The accompanying CSS file `table-border-adjuster.css` contains the styles that apply these border thicknesses based on the data attributes.
