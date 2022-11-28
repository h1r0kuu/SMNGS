import React, {ReactElement} from "react";
import {ApexOptions} from "apexcharts";
import Diagram from "../Diagram";

const NumOfStudents = (): ReactElement => {


    const seriesGB = [
        {
            name: "Boys",
            color: '#fdbb38',
            data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551],
        },
        {
            name: "Girls",
            color: '#19affb',
            data: [336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456],
        }
    ]

    const optionsGB: ApexOptions = {
        chart: {
            height: 350,
            width: '100%',
            stacked: true,
            toolbar: {
                show: true
            },
        },

        title: {
            text: '',
            align: 'left',
            style: {
                fontSize: '18px'
            }
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: '#777'
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
            }
        },
        labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],

    }

    return (
        <Diagram title={"Number of Students"} type={'bar'} series={seriesGB} options={optionsGB} md={12} lg={6}/>
    )
}

export default NumOfStudents;