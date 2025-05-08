import "jodit/es2021/jodit.css";
import { Jodit } from "jodit/es2021/jodit";
import TableBorderAdjuster from "jodit-table-border-adjuster";
import "jodit-table-border-adjuster/table-border-adjuster.css";

Jodit.plugins.add("table-border-adjuster", TableBorderAdjuster);

const editor = Jodit.make("#editor");
editor.setEditorValue(`
<p>
  This plugin allows you to adjust the border of a table and cells in the
  <a href="https://xdsoft.net/jodit/">Jodit WYSIWYG editor</a>.
</p>
<p>
  To use this plugin, click on a table in the editor and then click the button
  with the "Set Thickness" tooltip.
</p>
<p>
  This will open a nested popup that allows you to adjust the border of the
  table.
</p>
<table>
  <tbody>
    <!-- Row 1 -->
    <tr>
      <!-- T -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- A -->
      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>

      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- B (5 cells wide) -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- L -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- E -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
    </tr>
    <!-- Row 2 -->
    <tr>
      <!-- T -->
      <td><br /></td>
      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- A -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>

      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- B (5 cells wide) -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- L -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- E -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
    </tr>
    <!-- Row 3 -->
    <tr>
      <!-- T -->
      <td><br /></td>
      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- A -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>

      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- B (5 cells wide) -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick">﻿<br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- L -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- E -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
    </tr>
    <!-- Row 4 -->
    <tr>
      <!-- T -->
      <td><br /></td>
      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- A -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>

      <td>
        <br />
        <div style="color: rgba(0, 0, 0, 0.01); width: 0; height: 0">
          &nbsp;<br />
        </div>
      </td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- B (5 cells wide) -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <td data-border-width="extra-thick">
        <br />
      </td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- L -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- E -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
    </tr>
    <!-- Row 5 -->
    <tr>
      <!-- T -->
      <td><br /></td>
      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- A -->
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>

      <td><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- B (5 cells wide) -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td><br /></td>
      <!-- Gap -->
      <td>
        <br />
      </td>
      <!-- L -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <!-- Gap -->
      <td><br /></td>
      <!-- E -->
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick"><br /></td>
      <td data-border-width="extra-thick">
        <span
          id="jodit-selection_marker_1746710636398_019997099501346538"
          style="line-height: 0; display: none"
          data-jodit-temp="true"
          data-jodit-selection_marker="start"
          >﻿</span
        ><br />
      </td>
    </tr>
  </tbody>
</table>
`);
