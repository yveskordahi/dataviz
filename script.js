// Data
var groupData = [
    {
      "name": "Plus de 2% du PIB",
      "data": [
        { "id": "FR", "joined": "PIB: 2.1% [/]\n Budget: 52.747 milliards $"}, 
        { "id": "GR", "joined": "PIB: 2.8% [/]\n Budget: 5.301 milliards $"},
        { "id": "EE", "joined": "PIB: 2.3% [/]\n Budget: 0.701 milliards $"},
        { "id": "LT", "joined": "PIB: 2.1% [/]\n Budget: 1.170 milliards $"},
        { "id": "LV", "joined": "PIB: 2.3% [/]\n Budget: 0.756 milliards $"},
        { "id": "RO", "joined": "PIB: 2.3% [/]\n Budget: 5.726 milliards $"},
        { "id": "PL", "joined": "PIB: 2.2% [/]\n Budget: 13.026 milliards $"},
        { "id": "PT", "joined": "PIB: 2% [/]\n Budget: 4.639 milliards $"}
     ]
    }, {
      "name": "Entre 1.5 et 2% du PIB",
      "data": [
        { "id": "IT", "joined": "PIB: 1.6% [/]\n Budget: 28.921 milliards $"},
        { "id": "BG", "joined": "PIB: 1.8% [/]\n Budget: 1.247 milliards $"},
        { "id": "HU", "joined": "PIB: 1.6% [/]\n Budget: 2.409 milliards $"},
        { "id": "SK", "joined": "PIB: 1.8% [/]\n Budget: 1.837 milliards $"},
        { "id": "FI", "joined": "PIB: 1.5% [/]\n Budget: 4.087 milliards $"},
        { "id": "CY", "joined": "PIB: 1.8% [/]\n Budget: 0.418 milliards $"},
        { "id": "HR", "joined": "PIB: 1.8% [/]\n Budget: 1.034 milliards $"}
      ]
    }, {
      "name": "Entre 1 et 1.5% du PIB",
      "data": [
        { "id": "CZ", "joined": "PIB: 1.4% [/]\n Budget: 3.252 milliards $"},
        { "id": "SI", "joined": "PIB: 1.1% [/]\n Budget: 0.574 milliards $"},
        { "id": "ES", "joined": "PIB: 1.4% [/]\n Budget: 17.431 milliards $"},
        { "id": "BE", "joined": "PIB: 1.1% [/]\n Budget: 5.461 milliards $"},
        { "id": "NL", "joined": "PIB: 1.8% [/]\n Budget: 1.247 milliards $"},
        { "id": "DE", "joined": "PIB: 1.4% [/]\n Budget: 12.578 milliards $"},
        { "id": "SE", "joined": "PIB: 1.2% [/]\n Budget: 6.453 milliards $"},
        { "id": "DK", "joined": "PIB: 1.4% [/]\n Budget: 4.953 milliards $"},
      ]
    }, {
      "name": "Moins de 1% du PIB",
      "data": [
        { "id": "LU", "joined": "PIB: 0.8% [/]\n Budget: 0.489 milliards $"},
        { "id": "IE", "joined": "PIB: 0.3% [/]\n Budget: 1.144 milliards $"},
        { "id": "MT", "joined": "PIB: 0.6% [/]\n Budget: 0.080 milliards $"},
        { "id": "AT", "joined": "PIB: 0.8% [/]\n Budget: 3.601 milliards $"}
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
      tooltipText: "[bold]{name}[/]\n {joined}",
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