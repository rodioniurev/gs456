window.onload = function () {
    $('.formset_row').formset({
        addText: 'добавить продукт',
        deleteText: 'удалить',
        prefix: 'orderitems',
        removed: deleteOrderItem
    });
}

function deleteOrderItem(row) {
   var target_name= row[0].querySelector('input[type="number"]').name;
   orderitem_num = parseInt(target_name.replace('orderitems-', '').\
                                        replace('-quantity', ''));
   delta_quantity = -quantity_arr[orderitem_num];
   orderSummaryUpdate(price_arr[orderitem_num], delta_quantity);
}


$('.order_form select').change(function () {
   var target = event.target;
   console.log(target);
});
