
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

    $(function () {

        var gaugeOptions = {

            chart: {
                type: 'solidgauge'
            },

            title: null,

            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '70%',
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
        
        var projects = [];
        var project1 = { projectID: 1, projectName: "Project 1", budgethours: 2000, budgetPrice: 90000, reportedHours: 100, reportedSum: 5000 };
        var project2 = { projectID: 2, projectName: "Project 2", budgethours: 6000, budgetPrice: 500000, reportedHours: 200, reportedSum: 6000 };
        var project3 = { projectID: 3, projectName: "Project 3", budgethours: 5000, budgetPrice: 500000, reportedHours: 300, reportedSum: 7000 };
        var project4 = { projectID: 4, projectName: "Project 4", budgethours: 3000, budgetPrice: 500000, reportedHours: 8000, reportedSum: 80000 };
        var project5 = { projectID: 5, projectName: "Project 5", budgethours: 9000, budgetPrice: 500000, reportedHours: 500, reportedSum: 9000 };
        var project6 = { projectID: 6, projectName: "Project 6", budgethours: 11000, budgetPrice: 500000, reportedHours: 600, reportedSum: 10000 };
        var project7 = { projectID: 6, projectName: "Project 6", budgethours: 15000, budgetPrice: 50000, reportedHours: 700, reportedSum: 110000 };
        var project8 = { projectID: 6, projectName: "Project 6", budgethours: 300000, budgetPrice: 500000, reportedHours: 800, reportedSum: 12000 };
        var project9 = { projectID: 6, projectName: "Project 6", budgethours: 1000, budgetPrice: 500000, reportedHours: 900, reportedSum: 13000 };
        var project10 = { projectID: 6, projectName: "Project 6", budgethours: 6000, budgetPrice: 500000, reportedHours: 1000, reportedSum: 14000 };

        projects.push(project1);
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
            $('#container-speed'+prNo).highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                    min: 0,
                    max: project1.budgethours,
                    title: {
                        text: 'Tid'
                    }
                },

                credits: {
                    enabled: false
                },

                series: [{
                    name: 'Tid',
                    data: [projects[ind].reportedHours],
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
            $('#container-rpm' + prNo).highcharts(Highcharts.merge(gaugeOptions, {
                yAxis: {
                    min: 0,
                    max: projects[ind].budgetPrice,
                    title: {
                        text: 'Kostnad'
                    }
                },

                series: [{
                    name: 'Kostnad',
                    data: [projects[ind].reportedSum],
                    dataLabels: {
                        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
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

    });
    return common;
})();