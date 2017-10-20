// step 2 git your input references

//var worker_email = document.getElementById("worker_email");
//var worker_email_delete = document.getElementById("worker_email_delete");
//var worker_name = document.getElementById("worker_name");
//var worker_age = document.getElementById("worker_age");
//var customer_email = document.getElementById("cust_email");
//var customer_name = document.getElementById("cust_name");
//var customer_age = document.getElementById("cust_age");
//var add_customer_btn = document.getElementById("add_customer");
//var add_worker_btn = document.getElementById("add_worker");

// step 3 Adding customer data to firebase
// step 4 Adding workers data to firebase
// step 5 retrive customers from the firebase 
// step 6 retrive workers from firebase
//step 7 delete worker using the email
// step 8 delete customer using the email

//step 9 to be continued in the next tutorials




// add customers dialog
function add_customer_dialog(){
  var dialog = document.getElementById('customer');
  var closeDialog = document.querySelector('#add_customer');
  var showDialogButton = document.querySelector('#show-dialog');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showDialogButton.addEventListener('click', function() {
    dialog.showModal();
  });
  closeDialog.addEventListener('click' , function(){
    dialog.close();
  });
}


//add workers dialog
function add_worker_dialog(){

  var showDialogButton = document.querySelector('#show-dialog-worker');
  var closeDialog = document.querySelector('#add_worker');
  var dialog = document.getElementById('worker');

  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showDialogButton.addEventListener('click', function() {
    dialog.showModal();
  });
  closeDialog.addEventListener('click' , function(){
    dialog.close();
  });

}

// delete workers dialog
function delete_worker_dialog(){
  var showDialogButton = document.querySelector('#show-dialog-delete-worker');
  var closeDialog = document.querySelector('#delete_worker');
  var dialog = document.getElementById('delete_worker');

  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showDialogButton.addEventListener('click', function() {
    dialog.showModal();
  });
  closeDialog.addEventListener('click' , function(){
    dialog.close();
  });

}

