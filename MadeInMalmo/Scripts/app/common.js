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
                size: '100%',
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
                    y: -40
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
        //var project1 = { projectID: 1, projectName: "Project 1", budgethours: 2000, budgetPrice: 90000, reportedHours: 100, reportedSum: 5000,  availableEmployeeProjectPlanHoursUntilDeadline: 3600, calculatedEstimatedRemainingHoursUntilDone: 3500, deadlineStatus: 1, greenstopMoney: 0.4,  yellowstopMoney: 0.5, orangestopMoney: 0.7, redstopMoney: 0.9 };
        var project2 = { projectID: 2, projectName: "Malmö Live", budgethours: 6000, budgetPrice: 8500, reportedHours: 200, reportedSum: 6700, availableEmployeeProjectPlanHoursUntilDeadline: 0, calculatedEstimatedRemainingHoursUntilDone: 20, deadlineStatus: 4, greenstopMoney: 0.79,  yellowstopMoney: 0.87, orangestopMoney: 0.95, redstopMoney: 1, deadline: '2015-09-01', delayed: 1 };
        var project3 = { projectID: 3, projectName: "Turning Torso", budgethours: 5000, budgetPrice: 8100, reportedHours: 300, reportedSum: 6470, availableEmployeeProjectPlanHoursUntilDeadline: 50, calculatedEstimatedRemainingHoursUntilDone: 45, deadlineStatus: 1, greenstopMoney: 0.5, yellowstopMoney: 0.55, orangestopMoney: 0.6, redstopMoney: 0.65, deadline: '2015-11-01', delayed: 0 };
        var project4 = { projectID: 4, projectName: "Citytunneln", budgethours: 3000, budgetPrice: 10500, reportedHours: 3000, reportedSum: 7245, availableEmployeeProjectPlanHoursUntilDeadline: 45, calculatedEstimatedRemainingHoursUntilDone: 50, deadlineStatus: 2, greenstopMoney: 0.57, yellowstopMoney: 0.63, orangestopMoney: 0.69, redstopMoney: 0.74, deadline: '2015-10-31', delayed: 0 };
        var project5 = { projectID: 5, projectName: "Öresundsbron", budgethours: 9000, budgetPrice: 21500, reportedHours: 500, reportedSum: 20950, availableEmployeeProjectPlanHoursUntilDeadline: 24, calculatedEstimatedRemainingHoursUntilDone: 30, deadlineStatus: 3, greenstopMoney: 0.87, yellowstopMoney: 0.96, orangestopMoney: 1, redstopMoney: 1.1, deadline: '2015-10-20', delayed: 0 };
        var project6 = { projectID: 6, projectName: "Kockums", budgethours: 11000, budgetPrice: 13700, reportedHours: 600, reportedSum: 6650, availableEmployeeProjectPlanHoursUntilDeadline: 61, calculatedEstimatedRemainingHoursUntilDone: 78, deadlineStatus: 3, greenstopMoney: 0.49, yellowstopMoney: 0.53, orangestopMoney: 0.59, redstopMoney: 0.63, deadline: '2015-12-15', delayed: 0 };
        var project7 = { projectID: 6, projectName: "Kallbadhuset", budgethours: 15000, budgetPrice: 25000, reportedHours: 700, reportedSum: 23200, availableEmployeeProjectPlanHoursUntilDeadline: 65, calculatedEstimatedRemainingHoursUntilDone: 62, deadlineStatus: 1, greenstopMoney: 0.78, yellowstopMoney: 0.85, orangestopMoney: 0.93, redstopMoney: 1, deadline: '2015-11-01', delayed: 0 };
        var project8 = { projectID: 6, projectName: "Malmö Arena", budgethours: 300000, budgetPrice: 12700, reportedHours: 800, reportedSum: 6470, availableEmployeeProjectPlanHoursUntilDeadline: 82, calculatedEstimatedRemainingHoursUntilDone: 75, deadlineStatus: 1, greenstopMoney: 0.47, yellowstopMoney: 0.51, orangestopMoney: 0.56, redstopMoney: 0.61, deadline: '2015-12-01', delayed: 0 };
        var project9 = { projectID: 6, projectName: "Emporia", budgethours: 1000, budgetPrice: 14600, reportedHours: 900, reportedSum: 7290, availableEmployeeProjectPlanHoursUntilDeadline: 69, calculatedEstimatedRemainingHoursUntilDone: 81, deadlineStatus: 2, greenstopMoney: 0.5, yellowstopMoney: 0.55, orangestopMoney: 0.6, redstopMoney: 0.65, deadline: '2015-12-01', delayed: 0 };
        var project10 = { projectID: 6, projectName: "Möllan", budgethours: 6000, budgetPrice: 18900, reportedHours: 1000, reportedSum: 9450, availableEmployeeProjectPlanHoursUntilDeadline: 125, calculatedEstimatedRemainingHoursUntilDone: 105, deadlineStatus: 1, greenstopMoney: 0.5, yellowstopMoney: 0.55, orangestopMoney: 0.6, redstopMoney: 0.65, deadline: '2015-12-31', delayed: 0 };

        //projects = [];//project1;
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
            document.getElementById('deadline' + prNo).innerHTML = projects[ind].deadline;
            if (projects[ind].delayed == '1')
            {
                document.getElementById('deadline' + prNo).style.color = '#e01b1b';
                document.getElementById('deadline' + prNo).style.fontWeight = 'bold';
            }

            var colorstring = '#ff0000';
            switch (projects[ind].deadlineStatus) {
                case 1:
                    colorstring = '#55BF3B';
                    break;
                case 2:
                    colorstring = '#f5eb36';//'#f7f734';
                    break;
                case 3:
                    colorstring = '#ff9e1f';//'#ff8800';
                    break;
                case 4:
                    colorstring = '#e01b1b';
                    break;
                default:
                    colorstring = '#55BF3B';
            }


            $('#container-speed'+prNo).highcharts({
                    chart: {
                        type: 'column',
                        height: 120,
                        width: 150,
                        margin: [30, 50, 5, 20], //Top, right, bottom, left
                    },
                    title: {
                        text: 'Hours',
                        align: 'center',
                        x: -15,
                        y: 15,
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
                            name: "Available hours", // text för kolumnen på x-axeln
                            y: projects[ind].availableEmployeeProjectPlanHoursUntilDeadline,
                            drilldown: "Available hours", // set to null if no drilleown
                            //color: '#33ff00'
                        }, {
                            name: "Work left",
                            y: projects[ind].calculatedEstimatedRemainingHoursUntilDone,
                            drilldown: "Work left",
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
                    tickInterval: projects[ind].budgetPrice,
                    title: {
                        text: '<p>Costs</p>',
                        y: -64
                    },
                    showFirstLabel: true,
                    labels: {
                        align: 'left',
                        x: -19,
                        tickPosition: "inside",
                        tickWidth: 1,
                        //overflow: 'justify',
                        style: {
                            whiteSpace: 'nowrap',
                            
                        },
                        //align: 'left',
                        //y: 0,
                        format: '{value:,.0f} €'
                        //formatter: function () {
                        //    var text = this.value,
                        //     formatted = Highcharts.numberFormat(this.value, 0) + '...';
                        //    //    formatted = text.length > 25 ? text.substring(0, 25) + '...' : text;

                        //    return '<div class="js-ellipse" style="width:150px; overflow:hidden" title="' + text + '">' + formatted + '</div>';
                        //},
                    },
                    stops: [
                    [projects[ind].greenstopMoney, '#47c229'], // green '#55BF3B'
                    [projects[ind].yellowstopMoney, '#f5eb36'], // yellow '#DDDF0D'
                    [projects[ind].orangestopMoney, '#ff9e1f'], // orange
                    [projects[ind].redstopMoney, '#e01b1b'] // red '#DF5353'
                    ],
                },

                credits: {
                    enabled: false
                },

                series: [{
                    name: 'Kostnad',
                    data: [projects[ind].reportedSum],
                    dataLabels: {
                        format: '<div style="text-align:center; padding-bottom:50px;"><span style="font-size:11px; font-weight:bold;color:' +
                            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:,.0f}</span>&nbsp' + '€' + //{y:.0f}
                               '<span style="font-size:12px;color:silver">&nbsp;</span></div>'
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