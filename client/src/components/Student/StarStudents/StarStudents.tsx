import React, {ReactElement} from "react";

const StarStudents = (): ReactElement => {
    return (
        <div className="col-md-6 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <h5 className="card-title">Star Students</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-center">
                            <thead className="thead-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th className="text-center">Marks</th>
                                <th className="text-center">Percentage</th>
                                <th className="text-right">Year</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-nowrap">
                                    <div>PRE2209</div>
                                </td>
                                <td className="text-nowrap">John Smith</td>
                                <td className="text-center">1185</td>
                                <td className="text-center">98%</td>
                                <td className="text-right">
                                    <div>2019</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-nowrap">
                                    <div>PRE1245</div>
                                </td>
                                <td className="text-nowrap">Jolie Hoskins</td>
                                <td className="text-center">1195</td>
                                <td className="text-center">99.5%</td>
                                <td className="text-right">
                                    <div>2018</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-nowrap">
                                    <div>PRE1625</div>
                                </td>
                                <td className="text-nowrap">Pennington Joy</td>
                                <td className="text-center">1196</td>
                                <td className="text-center">99.6%</td>
                                <td className="text-right">
                                    <div>2017</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-nowrap">
                                    <div>PRE2516</div>
                                </td>
                                <td className="text-nowrap">Millie Marsden</td>
                                <td className="text-center">1187</td>
                                <td className="text-center">98.2%</td>
                                <td className="text-right">
                                    <div>2016</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-nowrap">
                                    <div>PRE2209</div>
                                </td>
                                <td className="text-nowrap">John Smith</td>
                                <td className="text-center">1185</td>
                                <td className="text-center">98%</td>
                                <td className="text-right">
                                    <div>2015</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarStudents;