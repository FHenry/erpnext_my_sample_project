// Copyright (c) 2023, scopen and contributors
// For license information, please see license.txt

frappe.ui.form.on('My Sample Doc', {
	// refresh: function(frm) {

	// }
  setup: function(frm) {
    let batch_field = frm.get_docfield('my_sample_lines', 'my_sample_batch');
		if (batch_field) {
			batch_field.get_route_options_for_new_doc = (row) => {
        console.log(row.doc);
				return {
					'my_sample_batch_item': row.doc.my_sample_detail_items
				}
			};
		}
  }
});
