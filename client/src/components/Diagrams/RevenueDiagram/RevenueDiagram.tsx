import React, {ReactElement} from "react";
import {Row} from "react-bootstrap";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import Diagram from "../Diagram";

const RevenueDiagram = (): ReactElement => {
    const seriesTS = [
        {
            name: "Teachers",
            data: [45, 60, 75, 51, 42, 42, 30]
        },
        {
            name: "Students",
            color: '#FFBC53',
            data: [24, 48, 56, 32, 34, 52, 25]
        }
    ]


    const optionTS: ApexOptions = {
        chart: {
            height: 350,
            toolbar: {
                show: true
            },
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        }
    }
    return (
        <Diagram title={"Revenue"} type={'area'} series={seriesTS} options={optionTS} md={12} lg={6} />
    )
}

export default RevenueDiagram;