import React from "react";

export default function DemoAPI_Hook() {
  return (
    <div className="container p-5">
      <h4 className="mb-5">To do list app</h4>
      <table className="table w-50">
        <tbody>
          <tr>
            <td>Ăn</td>
            <td>
              <span className="badge badge-warning">In progress</span>
            </td>
            <td>
              <button className="btn btn-success">Xong</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Ngủ</td>
            <td>
              <span className="badge badge-success">Complete</span>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
