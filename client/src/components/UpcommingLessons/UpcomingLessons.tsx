import {ReactElement} from "react";

const UpcomingLessons = (): ReactElement => {
    return (
        <div className="col-12 col-lg-8 col-xl-8 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <h5 className="card-title">Upcoming Lesson</h5>
                        </div>
                        <div className="col-6">
          <span className="float-right view-link">
            <a href="#">View All Courses</a>
          </span>
                        </div>
                    </div>
                </div>
                <div className="pt-3 pb-3">
                    <div className="table-responsive lesson">
                        <table className="table table-center">
                            <tbody>
                            <tr>
                                <td>
                                    <div className="date">
                                        <b>Aug 4, Tuesday</b>
                                        <p>2.30pm - 3.30pm (60min)</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="date">
                                        <b>Lessons 30</b>
                                        <p>3.1 Ipsuum dolor</p>
                                    </div>
                                </td>
                                <td>
                                    <a href="#">Confirmed</a>
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-info">Reschedule</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="date">
                                        <b>Aug 5, Wednesday</b>
                                        <p>3.00pm - 4.30pm (90min)</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="date">
                                        <b>Lessons 31</b>
                                        <p>3.2 Ipsuum dolor</p>
                                    </div>
                                </td>
                                <td>
                                    <a href="#">Confirmed</a>
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-info">Reschedule</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="date">
                                        <b>Aug 6, Thursday</b>
                                        <p>11.00am - 12.00pm (20min)</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="date">
                                        <b>Lessons 32</b>
                                        <p>3.3 Ipsuum dolor</p>
                                    </div>
                                </td>
                                <td>
                                    <a href="#">Confirmed</a>
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-info">Reschedule</button>
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

export default UpcomingLessons;