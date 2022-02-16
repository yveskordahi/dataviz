// // Create map instance
// var chart = am4core.create("chartdiv", am4maps.MapChart);

// // Set map definition
// chart.geodata = am4geodata_worldLow;

// // Set projection
// chart.projection = new am4maps.projections.Miller();

// // Create map polygon series
// var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// // Make map load polygon (like country names) data from GeoJSON
// polygonSeries.useGeodata = true;

// // Configure series
// var polygonTemplate = polygonSeries.mapPolygons.template;
// polygonTemplate.tooltipText = "{name}";
// polygonTemplate.fill = am4core.color("#74B266");

// // Create hover state and set alternative fill color
// var hs = polygonTemplate.states.create("hover");
// hs.properties.fill = am4core.color("#367B25");

// // Remove Antarctica
// polygonSeries.include = ["PT", "ES", "FR", "DE", "BE", "NL", "IT", "AT", "IE", "CH", "LU", "LT", "LV", "CZ", "SK", "SI", "EE", "HU", "CY", "MT", "PL", "RO", "BG", "HR", "DK", "FI", "SE"];

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// /* Create map instance */
// var chart = am4core.create("chartdiv", am4maps.MapChart);

// /* Set map definition */
// chart.geodata = am4geodata_worldLow;

// /* Set projection */
// chart.projection = new am4maps.projections.Mercator();

// /* Northern Europe */
// var series1 = chart.series.push(new am4maps.MapPolygonSeries());
// series1.name = "Northern Europe";
// series1.useGeodata = true;
// series1.include = ["FI", "DK", "SE", "LT", "LV", "EE",];
// series1.mapPolygons.template.tooltipText = "{name}";
// series1.mapPolygons.template.fill = am4core.color("#96BDC6");
// series1.fill = am4core.color("#96BDC6");

// /* Central Europe */
// var series2 = chart.series.push(new am4maps.MapPolygonSeries());
// series2.name = "Central Europe";
// series2.useGeodata = true;
// series2.include = ["AT", "CZ", "DE", "HU", "PL", "SK", "SI"];
// series2.mapPolygons.template.tooltipText = "{name}";
// series2.mapPolygons.template.fill = am4core.color("#81968F");
// series2.fill = am4core.color("#81968F");

// /* Southeast Europe */
// var series4 = chart.series.push(new am4maps.MapPolygonSeries());
// series4.name = "Southeast Europe";
// series4.useGeodata = true;
// series4.include = ["BG", "HR", "RO", "GR"];
// series4.mapPolygons.template.tooltipText = "{name}";
// series4.mapPolygons.template.fill = am4core.color("#E8CCBF");
// series4.fill = am4core.color("#E8CCBF");

// /* Western Europe */
// var series5 = chart.series.push(new am4maps.MapPolygonSeries());
// series5.name = "Western Europe";
// series5.useGeodata = true;
// series5.include = ["BE", "FR", "IT", "LU", "NL", "ES", "PT"];
// series5.mapPolygons.template.tooltipText = "{name}";
// series5.mapPolygons.template.fill = am4core.color("#99C78F");
// series5.fill = am4core.color("#99C78F");

// chart.legend = new am4maps.Legend();
// chart.legend.position = "right";
// chart.legend.align = "right";

/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Data
var groupData = [
    {
      "name": "EU member before 2004",
      "data": [
        { "id": "AT", "joined": "1995"},
        { "id": "IE", "joined": "1973"},
        { "id": "DK", "joined": "1973"},
        { "id": "FI", "joined": "1995"},
        { "id": "SE", "joined": "1995"},
        { "id": "GB", "joined": "1973"},
        { "id": "IT", "joined": "1957"},
        { "id": "FR", "joined": "1957"},
        { "id": "ES", "joined": "1986"},
        { "id": "GR", "joined": "1981"},
        { "id": "DE", "joined": "1957"},
        { "id": "BE", "joined": "1957"},
        { "id": "LU", "joined": "1957"},
        { "id": "NL", "joined": "1957"},
        { "id": "PT", "joined": "1986"}
     ]
    }, {
      "name": "Joined at 2004",
      "data": [
        { "id": "LT", "joined": "2004" },
        { "id": "LV", "joined": "2004" },
        { "id": "CZ", "joined": "2004" },
        { "id": "SK", "joined": "2004" },
        { "id": "SI", "joined": "2004" },
        { "id": "EE", "joined": "2004" },
        { "id": "HU", "joined": "2004" },
        { "id": "CY", "joined": "2004" },
        { "id": "MT", "joined": "2004" },
        { "id": "PL", "joined": "2004" }
      ]
    }, {
      "name": "Joined at 2007",
      "data": [
        { "id": "RO", "joined": "2007" },
        { "id": "BG", "joined": "2007" }
      ]
    }, {
      "name": "Joined at 2013",
      "data": [
        { "id": "HR", "joined": "2013" }
      ]
    }
  ];
  
  
  // Create root and chart
  var root = am5.Root.new("chartdiv");
  
  
  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    homeZoomLevel: 3.5,
    homeGeoPoint: { longitude: 10, latitude: 52 }
  }));
  
  
  // Create world polygon series
  var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  }));
  
  worldSeries.mapPolygons.template.setAll({
    fill: am5.color(0xaaaaaa)
  });
  
  worldSeries.events.on("datavalidated", () => {
    chart.goHome();
  });
  
  
  // Add legend
  var legend = chart.children.push(am5.Legend.new(root, {
    useDefaultMarker: true,
    centerX: am5.p50,
    x: am5.p50,
    centerY: am5.p100,
    y: am5.p100,
    dy: -20,
    background: am5.RoundedRectangle.new(root, {
      fill: am5.color(0xffffff),
      fillOpacity: 0.2
    })
  }));
  
  legend.valueLabels.template.set("forceHidden", true)
  
  
  // Create series for each group
  var colors = am5.ColorSet.new(root, {
    step: 2
  });
  colors.next();
  
  am5.array.each(groupData, function(group) {
    var countries = [];
    var color = colors.next();
  
    am5.array.each(group.data, function(country) {
      countries.push(country.id)
    });
  
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      include: countries,
      name: group.name,
      fill: color
    }));
  
  
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "[bold]{name}[/]\nMember since {joined}",
      interactive: true,
      fill: color,
      strokeWidth: 2
    });
  
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.Color.brighten(color, -0.3)
    });
  
    polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
      ev.target.series.mapPolygons.each(function(polygon) {
        polygon.states.applyAnimate("hover");
      });
    });
  
    polygonSeries.mapPolygons.template.events.on("pointerout", function(ev) {
      ev.target.series.mapPolygons.each(function(polygon) {
        polygon.states.applyAnimate("default");
      });
    });
    polygonSeries.data.setAll(group.data);
  
    legend.data.push(polygonSeries);
  });