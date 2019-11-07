import React from "react";
import "./Table-form.scss"
const TableForm = () => {
    return (
        <div className="marpage">
            <div>
                <label className="text">ปี 1</label>
                <table>
                    <caption >ปี 1 เทอม 1</caption>
                    {/*head row*/}
                    <tr>
                        <th>รหัสวิชา</th>
                        <th>ชื่อวิชา</th>
                        <th>หน่วยกิต</th>
                        <th>เกรด</th>
                    </tr>
                    {/*row 1*/}
                    <tr>
                        <td>202113</td>
                        <td>Physics I</td>
                        <td>3</td>
                        <td>D</td>
                    </tr>
                    {/*row 2*/}
                    <tr>
                        <td>202113</td>
                        <td>Physics I</td>
                        <td>3</td>
                        <td>D</td>
                    </tr>
                    {/*row 3*/}
                    <tr>
                        <td>202113</td>
                        <td>Physics I</td>
                        <td>3</td>
                        <td>D</td>
                    </tr>
                    {/*row 4*/}
                    <tr>
                        <td>202113</td>
                        <td>Physics I</td>
                        <td>3</td>
                        <td>D</td>
                    </tr>
                    {/*row 5*/}
                    <tr>
                        <td>202113</td>
                        <td>Physics I</td>
                        <td>3</td>
                        <td>D</td>
                    </tr>
                    {/*row 6*/}
                    <tr>
                        <td>202113</td>
                        <td>Physics I</td>
                        <td>3</td>
                        <td>D</td>
                    </tr>
                </table>
            </div>

            {/* <label>ปี 2</label>
            <label>ปี 3</label>
            <label>ปี 4</label> */}



        </div >
    );
};
export default TableForm;