﻿
window.common = (function () {
    var common = {};

    common.getFragment = function getFragment() {
        if (window.location.hash.indexOf("#") === 0) {
            return parseQueryString(window.location.hash.substr(1));
        } else {
            return {};
        }
    };

    function parseQueryString(queryString) {
        var data = {},
            pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;

        if (queryString === null) {
            return data;
        }

        pairs = queryString.split("&");

        for (var i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            separatorIndex = pair.indexOf("=");

            if (separatorIndex === -1) {
                escapedKey = pair;
                escapedValue = null;
            } else {
                escapedKey = pair.substr(0, separatorIndex);
                escapedValue = pair.substr(separatorIndex + 1);
            }

            key = decodeURIComponent(escapedKey);
            value = decodeURIComponent(escapedValue);

            data[key] = value;
        }

        return data;
    }

    //function getProjects() {
    //    $.ajax({
    //        type: "GET",
    //        url: "Home/getProjects",
    //        data: { userId: 1 },
    //        contentType: "application/json;charset=utf-8",
    //        dataType: "json",
    //        success: function (result) {
    //            debugger;
    //            return result;
    //            //alert(result)
    //        },
    //        error: function (response) {
    //            debugger;
    //            alert('error');
    //        }
    //    });
    //}


    $(function () {

        $.ajax({
            type: "GET",
            url: "Home/getProjects",
            async: true, 
            data: { userId: 1 },
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                var projects = result.projects;



        var gaugeOptions = {

            chart: {
                type: 'solidgauge'
            },

            title: null,

            pane: {
                center: ['50%', '85%'],
                size: '110%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },

            tooltip: {
                enabled: false
            },

            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };
        
        //var projects = [];
        //var project1 = { projectID: 1, projectName: "Project 1", budgethours: 2000, budgetPrice: 90000, reportedHours: 100, reportedSum: 5000 };
        var project2 = { projectID: 2, projectName: "Project 2", budgethours: 6000, budgetPrice: 500000, reportedHours: 200, reportedSum: 6000, availableEmployeeProjectPlanHoursUntilDeadline: 3600, calculatedEstimatedRemainingHoursUntilDone: 3500, deadlineStatus: 1, greenstopMoney: 0.4,  yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project3 = { projectID: 3, projectName: "Project 3", budgethours: 5000, budgetPrice: 500000, reportedHours: 300, reportedSum: 7000, availableEmployeeProjectPlanHoursUntilDeadline: 3000, calculatedEstimatedRemainingHoursUntilDone: 2800, deadlineStatus: 1, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project4 = { projectID: 4, projectName: "Project 4", budgethours: 3000, budgetPrice: 500000, reportedHours: 3000, reportedSum: 80000, availableEmployeeProjectPlanHoursUntilDeadline: 1550, calculatedEstimatedRemainingHoursUntilDone: 1500, deadlineStatus: 1, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project5 = { projectID: 5, projectName: "Project 5", budgethours: 9000, budgetPrice: 500000, reportedHours: 500, reportedSum: 9000, availableEmployeeProjectPlanHoursUntilDeadline: 4000, calculatedEstimatedRemainingHoursUntilDone: 4200, deadlineStatus: 2, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project6 = { projectID: 6, projectName: "Project 6", budgethours: 11000, budgetPrice: 500000, reportedHours: 600, reportedSum: 10000, availableEmployeeProjectPlanHoursUntilDeadline: 4800, calculatedEstimatedRemainingHoursUntilDone: 5000, deadlineStatus: 3, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project7 = { projectID: 6, projectName: "Project 7", budgethours: 15000, budgetPrice: 50000, reportedHours: 700, reportedSum: 110000, availableEmployeeProjectPlanHoursUntilDeadline: 9000, calculatedEstimatedRemainingHoursUntilDone: 8000, deadlineStatus: 1, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project8 = { projectID: 6, projectName: "Project 8", budgethours: 300000, budgetPrice: 500000, reportedHours: 800, reportedSum: 12000, availableEmployeeProjectPlanHoursUntilDeadline: 120000, calculatedEstimatedRemainingHoursUntilDone: 130000, deadlineStatus: 3, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project9 = { projectID: 6, projectName: "Project 9", budgethours: 1000, budgetPrice: 500000, reportedHours: 900, reportedSum: 13000, availableEmployeeProjectPlanHoursUntilDeadline: 790, calculatedEstimatedRemainingHoursUntilDone: 750, deadlineStatus: 1, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project10 = { projectID: 6, projectName: "Project 10", budgethours: 6000, budgetPrice: 500000, reportedHours: 1000, reportedSum: 14000, availableEmployeeProjectPlanHoursUntilDeadline: 1500, calculatedEstimatedRemainingHoursUntilDone: 2000, deadlineStatus: 4, greenstopMoney: 0.4, yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };

        //projects.push(project1);
        projects.push(project2);
        projects.push(project3);
        projects.push(project4);
        projects.push(project5);
        projects.push(project6);
        projects.push(project7);
        projects.push(project8);
        projects.push(project9);
        projects.push(project10);

        var prNo = 0;
        for (var ind = 0; ind < projects.length; ind++) {
            prNo = ind + 1;
            // Title

            document.getElementById('legend' + prNo).innerHTML = projects[ind].projectName;

            var colorstring = '#ff0000';
            switch (projects[ind].deadlineStatus) {
                case 1:
                    colorstring = '#33ff00';
                    break;
                case 2:
                    colorstring = '#ffff00';
                    break;
                case 3:
                    colorstring = '#ff8800';
                    break;
                case 4:
                    colorstring = '#ff0000';
                    break;
                default:
                    colorstring = '#33ff00';
            }


            $('#container-speed'+prNo).highcharts({
                    chart: {
                        type: 'column',
                        height: 120,
                        width: 150,
                        margin: [30, 50, 5, 20], //Top, right, bottom, left
                    },
                    title: {
                        text: 'Timmar',
                        align: 'left',
                        x: 10,
                        verticalAlign: 'top',
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        type: 'category',
                        tickLength: 0,
                        showLastLabel: false,
                        showFirstLabel: false
                    },
                    yAxis: {
                        title: {
                            text: '', // text y-axel
                        },
                        tickAmount: 0,
                        endOnTick: false,
                        gridLineWidth: 0,
                        showLastLabel: false,
                        showFirstLabel: false
                    },
                    credits: {
                        enabled: false
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y:.0f}'
                            }
                        }
                    },

                    tooltip: {
                        //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        headerFormat: '<span style="font-size:11px">{point.key}</span><br>',
                        //pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                        pointFormat: '<span><b>{point.y:.0f}</b><br/><br/></span>'
                    },

                    series: [{
                        name: "Brands" + prNo,
                        colorByPoint: false,
                        data: [{
                            name: "Tillgängliga timmar", // text för kolumnen på x-axeln
                            y: projects[ind].availableEmployeeProjectPlanHoursUntilDeadline,
                            drilldown: "Tillgängliga timmar", // set to null if no drilleown
                            //color: '#33ff00'
                        }, {
                            name: "Arbete kvar",
                            y: projects[ind].calculatedEstimatedRemainingHoursUntilDone,
                            drilldown: "Arbete kvar",
                            color: colorstring,//'#ff0000' // Todo! 
                        }]
                    }],
                });


            //$('#container-speed'+prNo).highcharts(Highcharts.merge(gaugeOptions, {
            //yAxis: {
            //        min: 0,
            //        max: projects[ind].budgethours,
            //        title: {
            //            text: 'Tid'
            //        },
            //        stops: [
            //        //[0.35, '#ff0001'], // red
            //        //[0.4, '#ff8801'], // orange
            //        //[0.45, '#ffff01'], // yellow
            //        [0.5, '#33ff00'], // green
            //        [0.55, '#ffff00'], // yellow
            //        [0.6, '#ff8800'], // orange
            //        [0.65, '#ff0000'] // red
            //        ],
            //    },

            //    credits: {
            //        enabled: false
            //    },

            //    series: [{
            //        name: 'Tid',
            //        data: [projects[ind].calculatedEstimatedRemainingHoursUntilDone],
            //        dataLabels: {
            //            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
            //                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
            //                   '<span style="font-size:12px;color:silver">Deadline</span></div>'
            //        },
            //        tooltip: {
            //            valueSuffix: 'Burnrate'
            //        }
            //    }]

            //}));

            // The RPM gauge
            $('#container-rpm' + prNo).highcharts(Highcharts.merge(gaugeOptions, {
                yAxis: {
                    min: 0,
                    max: projects[ind].budgetPrice,
                    title: {
                        text: 'Kostnad'
                    },
                    stops: [
                    [projects[ind].greenstopMoney, '#55BF3B'], // green
                    [projects[ind].yellowstopMoney, '#DDDF0D'], // yellow
                    [projects[ind].orangestopMoney, '#ff8800'], // orange
                    [projects[ind].redstopMoney, '#DF5353'] // red
                    ],
                },

                credits: {
                    enabled: false
                },

                series: [{
                    name: 'Kostnad',
                    data: [projects[ind].reportedSum],
                    dataLabels: {
                        format: '<div style="text-align:center"><span style="font-size:23px; font-weight:bold;color:' +
                            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.0f}</span><br/>' +
                               '<span style="font-size:12px;color:silver">kr</span></div>'
                    },
                    tooltip: {
                        valueSuffix: ' revolutions/min'
                    }
                }]

            }));
        }
        /*
        $('#container-speed2').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm2').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));

        $('#container-speed3').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm3').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));

        $('#container-speed4').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm4').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));

        $('#container-speed5').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm5').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));
        $('#container-speed6').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm6').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));

        $('#container-speed7').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm7').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));

        $('#container-speed8').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm8').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));
        $('#container-speed9').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm9').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));
        $('#container-speed10').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2000,
                title: {
                    text: 'Tid'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Tid',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">Timmar</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Timmar'
                }
            }]

        }));

        // The RPM gauge
        $('#container-rpm10').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 500000,
                title: {
                    text: 'Kostnad'
                }
            },

            series: [{
                name: 'Kostnad',
                data: [3200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                           '<span style="font-size:12px;color:silver">kr</span></div>'
                },
                tooltip: {
                    valueSuffix: ' revolutions/min'
                }
            }]

        }));
        */
        /*
        // Bring life to the dials
        setInterval(function () {
            // Speed
            var chart = $('#container-speed').highcharts(),
                point,
                newVal,
                inc;

            if (chart) {
                point = chart.series[0].points[0];
                inc = Math.round((Math.random() - 0.5) * 100);
                newVal = point.y + inc;

                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);
            }

            // RPM
            chart = $('#container-rpm').highcharts();
            if (chart) {
                point = chart.series[0].points[0];
                inc = Math.random() - 0.5;
                newVal = point.y + inc;

                if (newVal < 0 || newVal > 5) {
                    newVal = point.y - inc;
                }

                point.update(newVal);
            }
        }, 2000);
        */

        
                //alert(result)
            },
                error: function (response) {
                //debugger;
                    //alert('error');
                    //Will get here because it is loaded too early. Ignore in prototype.
            }
        });


    });
    return common;
    }
)();