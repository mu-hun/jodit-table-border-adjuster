import { Plugin } from "jodit/esm/core/plugin";
import { Dom } from "jodit/esm/core/dom";
import { isJoditObject } from "jodit/esm/core/helpers";
import { UIForm, UISelect, type Table } from "jodit/esm/modules";
import type {
  IJodit,
  IControlType,
  IPluginButton,
  IToolbarButton,
  Nullable,
} from "jodit/esm/types";
import { iconURL, presetI18n } from "./assets";

export default class TableBorderAdjuster extends Plugin {
  private readonly name = "table-border-adjuster";

  afterInit: Plugin["afterInit"] = (jodit) => {
    jodit.o.i18n = {
      ...presetI18n,
      ...(jodit.o.i18n || {}),
    };

    if (!Array.isArray(jodit.o.popup.cells))
      throw new Error("options.popup.cells must be an array");

    jodit.o.popup.cells.push("\n", this.name);
    jodit.o.controls[this.name] = this.createPopup;
  };

  private createPopup: IControlType = {
    iconURL,
    popup(jodit, button) {
      if (!isJoditObject(jodit)) return false;

      const tableModule = jodit.getInstance<Table>("Table");
      const selected = tableModule.getAllSelectedCells();
      if (selected.length === 0) return false;

      const table = Dom.closest(selected[0], "table", jodit.editor);
      if (!table) return false;

      const form = new UIForm(jodit);

      const fields = [
        {
          label: jodit.i18n("tableBorderAdjusterTop"),
          value: "top",
        },
        {
          label: jodit.i18n("tableBorderAdjusterBottom"),
          value: "bottom",
        },
        {
          label: jodit.i18n("tableBorderAdjusterLeft"),
          value: "left",
        },
        {
          label: jodit.i18n("tableBorderAdjusterRight"),
          value: "right",
        },
      ] as const;

      const borderAttributes = {
        top: "data-border-top",
        bottom: "data-border-bottom",
        left: "data-border-left",
        right: "data-border-right",
      };

      const outlineSelects = fields.map(
        (field) =>
          new UISelect(jodit, {
            label: field.label,
            placeholder: jodit.i18n("tableBorderAdjusterPlaceholder"),
            options: [
              { value: "none", text: jodit.i18n("tableBorderAdjusterNone") },
              {
                value: "normal",
                text: jodit.i18n("tableBorderAdjusterNormal"),
              },
              {
                value: "medium",
                text: jodit.i18n("tableBorderAdjusterMedium"),
              },
              { value: "thick", text: jodit.i18n("tableBorderAdjusterThick") },
              {
                value: "extra-thick",
                text: jodit.i18n("tableBorderAdjusterExtraThick"),
              },
              { value: "reset", text: jodit.i18n("tableBorderAdjusterReset") },
            ],
            value: table.getAttribute(borderAttributes[field.value]) || "",
            onChange: (value) => {
              const method =
                value === "reset" ? "removeAttribute" : "setAttribute";
              table[method](borderAttributes[field.value], value);
            },
          })
      );

      const cellSelect = new UISelect(jodit, {
        label: jodit.i18n("tableBorderAdjusterSelectedCells"),
        placeholder: jodit.i18n("tableBorderAdjusterPlaceholder"),
        options: [
          { value: "none", text: jodit.i18n("tableBorderAdjusterNone") },
          { value: "normal", text: jodit.i18n("tableBorderAdjusterNormal") },
          { value: "medium", text: jodit.i18n("tableBorderAdjusterMedium") },
          { value: "thick", text: jodit.i18n("tableBorderAdjusterThick") },
          {
            value: "extra-thick",
            text: jodit.i18n("tableBorderAdjusterExtraThick"),
          },
          { value: "reset", text: jodit.i18n("tableBorderAdjusterReset") },
        ],
        onChange: (value) => {
          const method = value === "reset" ? "removeAttribute" : "setAttribute";
          selected.forEach((cell) => {
            cell[method]("data-border-width", value);
          });
        },
      });

      form.append([...outlineSelects, cellSelect]);

      return form.container;
    },
    tooltip: (jodit) => jodit.i18n("tableBorderAdjusterTitle"),
  };

  beforeDestruct: Plugin["beforeDestruct"] = (jodit) => {};
}
