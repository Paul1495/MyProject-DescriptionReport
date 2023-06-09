
import {
    description_data,
    columns_data,
    summary_data,
} from './data.js';

var grid = $('#grid').dxDataGrid({
    dataSource: description_data,
    keyExpr: 'ID',
    columns: columns_data,
    showBorders: true,
    selection: {
        mode: 'single',
    }, 
    summary: {
        groupItems: summary_data
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#FFBF9B');
        e.rowElement.css('height', 50);
        return;
    }

    if(e.rowType == "group") {
       // e.rowElement.css('background', '#FFD966');
       e.rowElement.hide();
       return;
    }

};
// yyyy-MM-dd HH:mm:ss
grid.option('onRowPrepared', onRowPrepared);

const onCellPrepared = function (e) {
    console.log(e);
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
    if (e.rowType == "header") {
        e.cellElement.css('color', '#000000');
        e.cellElement.css('font-weight', 'bold');
        if(e.column.dataField === "ProductOrder"){
            e.cellElement.css({'background':'yellow'});
        }
        return;
    } 
    
    if(e.rowType === "groupFooter"){
        e.cellElement.css({'background':'#FFD966'});
    }
    // if (e.rowType == "data" || e.rowType == "header") {
    //     e.cellElement.css('border-color', '#000000');   
    //     return
    // }
    };

grid.option('onCellPrepared', onCellPrepared);

