
/*
 *
 * JQuery Table Filter 1.0 
 * Version 1.0.0
 * @requires jQuery 3.5.1
 * 
 * Copyright (c) 2020 Paul Pehrson

 * License: Creative Commons 3.0 BY-SA
 * 
 */

function filterTable() {
    $("#tableFilterInput").on("keyup", function() { // input field needs id="tableFilterInput" for this to work
      var value = $(this).val().toLowerCase(); // converts text to lower-case so case won't matter for search
      $("#filteredTable tbody tr").filter(function() { // table to be filtered needs id="filteredTable" for this to work; filters individual rows
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  };
