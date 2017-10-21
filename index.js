// here we are getting references from fields that we are going to work with.
// check the id for the fields in <input> tag int the index.html
var worker_email = document.getElementById("worker_email");
var worker_email_delete = document.getElementById("worker_email_delete");
var worker_name = document.getElementById("worker_name");
var worker_age = document.getElementById("worker_age");
var customer_email = document.getElementById("cust_email");
var customer_name = document.getElementById("cust_name");
var customer_age = document.getElementById("cust_age");
var add_customer_btn = document.getElementById("add_customer");
var add_worker_btn = document.getElementById("add_worker");



//create a database reference to the node workers.
var workerRootRef = firebase.database().ref().child("workers");
// here we are retriving the data from the database
workerRootRef.on('child_added' , snap=>{
  var name = snap.child("name").val();
  var email = snap.child("email").val();
  var age = snap.child("age").val();
  $("#table_workers").append("<tr><td>"+email+"</td><td>"+name+"</td><td>"+age+"</td></tr>");

})

// the same thing as we did in the workers.
var customerRootRef = firebase.database().ref().child("customers");
customerRootRef.on('child_added' , snap=>{
  var name = snap.child("name").val();
  var email = snap.child("email").val();
  var age = snap.child("age").val();

  $("#table_customers").append("<tr><td>"+email+"</td><td>"+name+"</td><td>"+age+"</td></tr>");

})

//this function push the worker's data that we get from the form to the database.
function add_worker_db(){
  worker_data = {name : worker_name.value , email : worker_email.value , age : worker_age.value};

  var firebaseRef = firebase.database().ref().child("workers");
  firebaseRef.push(worker_data);

}

// the same as we did for the workers.
function add_customer_db(){
  customer_data = {name : customer_name.value , email : customer_email.value , age : customer_age.value};
  var firebaseRef = firebase.database().ref().child("customers");
  // push data to dtabase with an auto generated id.
  firebaseRef.push(customer_data);

}

// this function triggerd when you click the (plus button above the customer's table) and show the form of adding a customer.
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
// this function triggerd when you click the (plus button above the worker's table) and show the form of adding a worker.

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

// this function triggerd when you click the (delete button above the worker's table) and show the form of adding a worker.

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

// this function deletes the worker's record from the database with the email we provided.
function delete_worker_db(){
  var firebaseRefDelete = firebase.database().ref().child("workers");

  var query = firebaseRefDelete.orderByChild('email').equalTo(worker_email_delete.value);
  query.on('child_added', function(snapshot) {
      snapshot.ref.remove();
  })

}

// now do the customer record deletion and send the code to my facebook account to check it and give you help with it.

// thank you all.
