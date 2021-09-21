import React, { useState, useEffect } from 'react';
import './DataFilters.css';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Input } from '@material-ui/core';
<script src="extensions/filter-control/bootstrap-table-filter-control.js"></script>



export default function DataFilters() {
    const [data,setData] = useState([
        {
          "Client ID": 10140,
          "Client Name": "John",
          "Date": "27/06/2021",
          "Number": "GLO21000181",
          "Supplier Name": "eBay",
          "From Date": "01/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 248000,
          "Received": 0,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10140,
          "Client Name": "Doe",
          "Date": "27/06/2021",
          "Number": "GLO21000180",
          "Supplier Name": "Amazon",
          "From Date": "01/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 303000,
          "Received": 16497.37,
          "In The Factory": -16497.37,
          "On The Way": 0
        },
        {
          "Client ID": 10195,
          "Client Name": "Love",
          "Date": "27/06/2021",
          "Number": "GLO21000177",
          "Supplier Name": "BestBuy",
          "From Date": "01/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 129625.57,
          "Received": 15246.58,
          "In The Factory": -6383.29,
          "On The Way": 15246.58
        },
        {
          "Client ID": 10140,
          "Client Name": "Eat",
          "Date": "27/06/2021",
          "Number": "GLO21000176",
          "Supplier Name": "Jet",
          "From Date": "01/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 93000,
          "Received": 5270.99,
          "In The Factory": -2151.49,
          "On The Way": 1262.91
        },
        {
          "Client ID": 10140,
          "Client Name": "Something",
          "Date": "27/06/2021",
          "Number": "GLO21000175",
          "Supplier Name": "Wish",
          "From Date": "01/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 106000,
          "Received": 7708.75,
          "In The Factory": -5173.65,
          "On The Way": 2027.3
        },
        {
          "Client ID": 10188,
          "Client Name": "Black",
          "Date": "27/06/2021",
          "Number": "GLO21000173",
          "Supplier Name": "eBay",
          "From Date": "01/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 418000.02,
          "Received": 44335.25,
          "In The Factory": -22387.03,
          "On The Way": 5279.57
        },
        {
          "Client ID": 10186,
          "Client Name": "White",
          "Date": "27/06/2021",
          "Number": "GLO21000172",
          "Supplier Name": "Amazon",
          "From Date": "01/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 75000,
          "Received": 0,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10186,
          "Client Name": "Green",
          "Date": "27/06/2021",
          "Number": "GLO21000171",
          "Supplier Name": "BestBuy",
          "From Date": "01/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 41700,
          "Received": 0,
          "In The Factory": 717.37,
          "On The Way": 0
        },
        {
          "Client ID": 10186,
          "Client Name": "Orange",
          "Date": "27/06/2021",
          "Number": "GLO21000170",
          "Supplier Name": "Jet",
          "From Date": "01/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 73800,
          "Received": 0,
          "In The Factory": 140.04,
          "On The Way": 0
        },
        {
          "Client ID": 10186,
          "Client Name": "Yellow",
          "Date": "27/06/2021",
          "Number": "GLO21000169",
          "Supplier Name": "Wish",
          "From Date": "01/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 40600,
          "Received": 0,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10186,
          "Client Name": "Blue",
          "Date": "27/06/2021",
          "Number": "GLO21000168",
          "Supplier Name": "eBay",
          "From Date": "10/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 247500,
          "Received": 13866.1,
          "In The Factory": -3247.23,
          "On The Way": 13866.1
        },
        {
          "Client ID": 10186,
          "Client Name": "Silver",
          "Date": "27/06/2021",
          "Number": "GLO21000167",
          "Supplier Name": "Amazon",
          "From Date": "10/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 271000,
          "Received": 15358.56,
          "In The Factory": -3217,
          "On The Way": 15358.56
        },
        {
          "Client ID": 10248,
          "Client Name": "John",
          "Date": "27/06/2021",
          "Number": "GLO21000166",
          "Supplier Name": "BestBuy",
          "From Date": "10/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 470550,
          "Received": 35720.61,
          "In The Factory": -25894.11,
          "On The Way": 3517.61
        },
        {
          "Client ID": 10248,
          "Client Name": "Doe",
          "Date": "27/06/2021",
          "Number": "GLO21000165",
          "Supplier Name": "Jet",
          "From Date": "10/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 574900,
          "Received": 47869.85,
          "In The Factory": -40142.16,
          "On The Way": 226.31
        },
        {
          "Client ID": 10248,
          "Client Name": "Love",
          "Date": "23/06/2021",
          "Number": "GLO21000164",
          "Supplier Name": "Wish",
          "From Date": "05/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 2000,
          "Received": 728.81,
          "In The Factory": -728.81,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Eat",
          "Date": "23/06/2021",
          "Number": "GLO21000163",
          "Supplier Name": "eBay",
          "From Date": "05/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 356000,
          "Received": 45339.92,
          "In The Factory": -28544.18,
          "On The Way": 32981.99
        },
        {
          "Client ID": 10248,
          "Client Name": "Something",
          "Date": "23/06/2021",
          "Number": "GLO21000162",
          "Supplier Name": "Amazon",
          "From Date": "05/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 2000,
          "Received": 0,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Black",
          "Date": "23/06/2021",
          "Number": "GLO21000161",
          "Supplier Name": "BestBuy",
          "From Date": "10/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 356000,
          "Received": 31952.21,
          "In The Factory": -20871.6,
          "On The Way": 20224.17
        },
        {
          "Client ID": 10197,
          "Client Name": "White",
          "Date": "20/06/2021",
          "Number": "GLO21000159",
          "Supplier Name": "Jet",
          "From Date": "13/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 283112.91,
          "Received": 0,
          "In The Factory": 3670.43,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Green",
          "Date": "10/06/2021",
          "Number": "GLO21000157",
          "Supplier Name": "Wish",
          "From Date": "31/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 2000,
          "Received": 692.25,
          "In The Factory": 728.81,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Orange",
          "Date": "10/06/2021",
          "Number": "GLO21000156",
          "Supplier Name": "eBay",
          "From Date": "31/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 2000,
          "Received": 695.02,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10258,
          "Client Name": "Yellow",
          "Date": "10/06/2021",
          "Number": "GLO21000155",
          "Supplier Name": "Amazon",
          "From Date": "10/06/2021",
          "To Date": "31/08/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 20000,
          "Received": 0,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10205,
          "Client Name": "Blue",
          "Date": "10/06/2021",
          "Number": "GLO21000153",
          "Supplier Name": "BestBuy",
          "From Date": "11/06/2021",
          "To Date": "11/06/2021",
          "Status": "הצעת מחיר",
          "Quantity": 1150,
          "Received": 0,
          "In The Factory": 867.66,
          "On The Way": 0
        },
        {
          "Client ID": 10200,
          "Client Name": "Silver",
          "Date": "10/06/2021",
          "Number": "GLO21000152",
          "Supplier Name": "Jet",
          "From Date": "14/06/2021",
          "To Date": "14/07/2021",
          "Status": "הצעת מחיר",
          "Quantity": 500,
          "Received": 0,
          "In The Factory": 396.54,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "John",
          "Date": "08/06/2021",
          "Number": "GLO21000151",
          "Supplier Name": "Wish",
          "From Date": "31/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 1000,
          "Received": 0,
          "In The Factory": 299.65,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Doe",
          "Date": "03/06/2021",
          "Number": "GLO21000148",
          "Supplier Name": "eBay",
          "From Date": "07/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 25000,
          "Received": 0,
          "In The Factory": 19292.04,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Love",
          "Date": "03/06/2021",
          "Number": "GLO21000147",
          "Supplier Name": "Amazon",
          "From Date": "07/06/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 25000,
          "Received": 0,
          "In The Factory": 38305.01,
          "On The Way": 0
        },
        {
          "Client ID": 10205,
          "Client Name": "Eat",
          "Date": "31/05/2021",
          "Number": "GLO21000146",
          "Supplier Name": "BestBuy",
          "From Date": "04/06/2021",
          "To Date": "04/06/2021",
          "Status": "הצעת מחיר",
          "Quantity": 1200,
          "Received": 0,
          "In The Factory": 1311.11,
          "On The Way": 0
        },
        {
          "Client ID": 10205,
          "Client Name": "Something",
          "Date": "20/05/2021",
          "Number": "GLO21000143",
          "Supplier Name": "Jet",
          "From Date": "20/05/2021",
          "To Date": "21/05/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 2200,
          "Received": 2539.99,
          "In The Factory": 0,
          "On The Way": 2539.99
        },
        {
          "Client ID": 10248,
          "Client Name": "Black",
          "Date": "19/05/2021",
          "Number": "GLO21000142",
          "Supplier Name": "Wish",
          "From Date": "19/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 356000,
          "Received": 57520.89,
          "In The Factory": 29546.07,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "White",
          "Date": "19/05/2021",
          "Number": "GLO21000141",
          "Supplier Name": "eBay",
          "From Date": "19/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 356000,
          "Received": 59664.73,
          "In The Factory": 22698.18,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Green",
          "Date": "13/05/2021",
          "Number": "GLO21000140",
          "Supplier Name": "Amazon",
          "From Date": "19/05/2021",
          "To Date": "19/05/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 190,
          "Received": 170,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10186,
          "Client Name": "Orange",
          "Date": "13/05/2021",
          "Number": "GLO21000139",
          "Supplier Name": "BestBuy",
          "From Date": "19/05/2021",
          "To Date": "19/05/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 3350,
          "Received": 4225.13,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10195,
          "Client Name": "Yellow",
          "Date": "13/05/2021",
          "Number": "GLO21000138",
          "Supplier Name": "Jet",
          "From Date": "19/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 3165,
          "Received": 2511.44,
          "In The Factory": 1263.41,
          "On The Way": 0
        },
        {
          "Client ID": 10188,
          "Client Name": "Blue",
          "Date": "13/05/2021",
          "Number": "GLO21000137",
          "Supplier Name": "Wish",
          "From Date": "19/05/2021",
          "To Date": "19/05/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 11760,
          "Received": 13902.93,
          "In The Factory": 0,
          "On The Way": 0
        },
        {
          "Client ID": 10197,
          "Client Name": "Silver",
          "Date": "12/05/2021",
          "Number": "GLO21000130",
          "Supplier Name": "eBay",
          "From Date": "13/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 295385.66,
          "Received": 0,
          "In The Factory": 145646.55,
          "On The Way": 0
        },
        {
          "Client ID": 10201,
          "Client Name": "John",
          "Date": "10/05/2021",
          "Number": "GLO21000129",
          "Supplier Name": "Amazon",
          "From Date": "11/05/2021",
          "To Date": "10/06/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 1700,
          "Received": 0,
          "In The Factory": 1775.87,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Doe",
          "Date": "07/05/2021",
          "Number": "GLO21000128",
          "Supplier Name": "BestBuy",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 120000,
          "Received": 0,
          "In The Factory": 6449.84,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Love",
          "Date": "07/05/2021",
          "Number": "GLO21000127",
          "Supplier Name": "Jet",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 170000,
          "Received": 0,
          "In The Factory": 7187.94,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Eat",
          "Date": "07/05/2021",
          "Number": "GLO21000126",
          "Supplier Name": "Wish",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 120000,
          "Received": 0,
          "In The Factory": 4671.13,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Something",
          "Date": "07/05/2021",
          "Number": "GLO21000125",
          "Supplier Name": "eBay",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 120000,
          "Received": 0,
          "In The Factory": 6004.45,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Black",
          "Date": "07/05/2021",
          "Number": "GLO21000124",
          "Supplier Name": "Amazon",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 120000,
          "Received": 0,
          "In The Factory": 26797.75,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "White",
          "Date": "07/05/2021",
          "Number": "GLO21000122",
          "Supplier Name": "BestBuy",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 900,
          "Received": 0,
          "In The Factory": 1037.79,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Green",
          "Date": "07/05/2021",
          "Number": "GLO21000121",
          "Supplier Name": "Jet",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 6900,
          "Received": 0,
          "In The Factory": 2886.03,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Orange",
          "Date": "07/05/2021",
          "Number": "GLO21000120",
          "Supplier Name": "Wish",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 6900,
          "Received": 0,
          "In The Factory": 3747.58,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Yellow",
          "Date": "07/05/2021",
          "Number": "GLO21000119",
          "Supplier Name": "eBay",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 3000,
          "Received": 0,
          "In The Factory": 914.37,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Blue",
          "Date": "06/05/2021",
          "Number": "GLO21000118",
          "Supplier Name": "Amazon",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 650,
          "Received": 0,
          "In The Factory": 1757.35,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "Silver",
          "Date": "06/05/2021",
          "Number": "GLO21000117",
          "Supplier Name": "BestBuy",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 600,
          "Received": 0,
          "In The Factory": 3300.5,
          "On The Way": 0
        },
        {
          "Client ID": 10248,
          "Client Name": "John",
          "Date": "06/05/2021",
          "Number": "GLO21000111",
          "Supplier Name": "Jet",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 156900,
          "Received": 0,
          "In The Factory": 12291.29,
          "On The Way": 0
        },
        {
          "Client ID": 10140,
          "Client Name": "Doe",
          "Date": "06/05/2021",
          "Number": "GLO21000110",
          "Supplier Name": "Wish",
          "From Date": "10/05/2021",
          "To Date": "03/09/2021",
          "Status": "מאושרת לבצוע",
          "Quantity": 10000,
          "Received": 0,
          "In The Factory": 1952.85,
          "On The Way": 0
        }
       ]);

    useEffect(()=>{

        // alert('alert');

        // I installed 2 packages : "convert-csv-to-json" and "csvtojson"
        //This is the code tha was suppoused to help me convert the csv data to json but it did not work 
        // so i converted the data manually via https://www.convertcsv.com/csv-to-json.htm 

        let csv2Json = require('convert-csv-to-json');

        // let fileInputName = './exampledata.csv'; 
        // let fileOutputName = './myOutputFile.json';
        // csv2Json.generateJsonFileFromCsv(fileInputName,fileOutputName);


        // let jsonResponse = csv2Json.getJsonFromCsv("./exampledata.csv");
        // for(let i=0; i<jsonResponse.length;i++){
        //     console.log(jsonResponse[i]);
        // }
        // console.log(jsonResponse);

    },[]);

    return (
        <div className='dataComponent'>
            <h1>Data Filters</h1>

<BootstrapTable data={data} striped={true} hover={true} data-filter-control={true} data-searchable={true} data-search={true}>
      <TableHeaderColumn dataField="Client ID" isKey={true} dataAlign="center" dataSort={true}>Client ID</TableHeaderColumn>
      <TableHeaderColumn dataField="Client Name" dataSort={true} data-searchable={true} data-search={true} data-filter-control={Input} >Client Name</TableHeaderColumn>
      <TableHeaderColumn dataField="Date" dataSort={true} >Date</TableHeaderColumn>
      <TableHeaderColumn dataField="Number" dataSort={true} >Number</TableHeaderColumn>
      <TableHeaderColumn dataField="Supplier Name" dataSort={true} >Supplier Name</TableHeaderColumn>
      <TableHeaderColumn dataField="From Date" dataSort={true} >From Date</TableHeaderColumn>
      <TableHeaderColumn dataField="To Date" dataSort={true} >To Date</TableHeaderColumn>
      <TableHeaderColumn dataField="Status" dataSort={true} >Status</TableHeaderColumn>
      <TableHeaderColumn dataField="Quantity" dataSort={true} >Quantity</TableHeaderColumn>
      <TableHeaderColumn dataField="Received" dataSort={true} >Received</TableHeaderColumn>
      <TableHeaderColumn dataField="In The Factory" dataSort={true} >In The Factory</TableHeaderColumn>
      <TableHeaderColumn dataField="On The Way" dataSort={true} >On The Way</TableHeaderColumn>
  </BootstrapTable>

        </div>
    )
}
