# jodit-table-border-adjuster

[![NPM Version](https://img.shields.io/npm/v/jodit-table-border-adjuster)](https://www.npmjs.com/package/jodit-table-border-adjuster)

This plugin allows to adjust the border of a table and cells in the [Jodit WYSIWYG editor](https://xdsoft.net/jodit/)

See Demo at https://mu-hun.github.io/jodit-table-border-adjuster/

## Usage

```typescript
import Jodit from "jodit";
import TableBorderAdjuster from "jodit-table-border-adjuster";

Jodit.plugins.add("table-border-adjuster", TableBorderAdjuster);

// Initialize Jodit editor
const editor = Jodit.make("#editor");
```

### Import CSS for Border Styles

To apply default border styles to tables and cells, import the plugin’s bundled CSS file:

```typescript
import "jodit-table-border-adjuster/table-border-adjuster.css";
```

> **Note:** This file contains precompiled styles. For custom styling, you can import and modify the original SCSS source directly in your build process:  
> [`src/table-border-adjuster.scss`](https://github.com/mu-hun/jodit-table-border-adjuster/blob/main/src/table-border-adjuster.scss)

## How to Adjusting Borders

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

### Customize

You can customize localization to modify `Jodit.lang` object.

```typescript
import Jodit from "jodit";
import TableBorderAdjuster from "jodit-table-border-adjuster";
import "jodit-table-border-adjuster/dist/table-border-adjuster.css";

Jodit.lang.en = {
  ...Jodit.lang.en, // Preserve existing localization if any
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
};

Jodit.plugins.add("table-border-adjuster", TableBorderAdjuster);

// Initialize Jodit editor (ensure Jodit's language is set to 'en')
const editor = Jodit.make("#editor", {
  language: "en",
});
```
