import "jodit/es2021/jodit.css";
import { Jodit } from "jodit/es2021/jodit";
import TableBorderAdjuster from "jodit-table-border-adjuster";
import "jodit-table-border-adjuster/table-border-adjuster.css";

Jodit.plugins.add("table-border-adjuster", TableBorderAdjuster);

const editor = Jodit.make("#editor");
editor.setEditorValue(`
<p>
  This plugin allows you to adjust the border of a table in the
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
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>`);
