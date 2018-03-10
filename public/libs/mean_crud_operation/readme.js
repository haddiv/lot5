<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="style.css" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min.js"></script>
<script src="app.js"></script>

<span class="glyphicon glyphicon-th-list"> </span>
<span class="glyphicon glyphicon-plus"> </span>
<span class="glyphicon glyphicon-ok"> </span>
<span class="glyphicon glyphicon-edit"> </span>
<span class="glyphicon glyphicon-trash"> </span>
<span style="color:#5bc0de;" 
class="glyphicon glyphicon-list"> </span>
<span class="glyphicon glyphicon-home"> </span>
<div class="header clearfix">
	<nav>
	  <ul class="nav nav-pills pull-right">
	    <li role="presentation" class="active"><a href="#"> Home</a></li>
	    <li role="presentation"><a href="#"> About</a></li>
	  </ul>
	</nav>
	<h3 class="text-muted">Applications..</h3>
</div>

<footer class="footer well well-sm">
    <p>© 2016 Tutplus24</p>
</footer>
==================================
<div class="panel panel-default">
	<div class="panel-heading">
	  <p class="panel-title"> Title..</p>
	</div>
	<div class="panel-body">
		content.. here..		
    <div>
<div>
------------------
<table class="table table-striped">
	<thead>
	<tr>
	  <th>Name</th>
	  <th>Actions</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	  <td>Jone</td>
	  <td> 
	    <a href="#" class="btn btn-info"> Show  </a>
	    <a href="#" class="btn btn-success"> Edit  </a>
	  	<a click="" class="btn btn-danger">Delete </a>
	  </td>
	</tr>
	</tbody>
</table>
------------------
<form ng-submit="">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" ng-model="">
    </div>
    <button type="submit" class="btn btn-default">Save</button>
    <a href="#" class="btn btn-default"> Cancel</a>
</form>
------------------
<form>
	<div class="form-group">
	  	<label class="form-control">Name: John Doe</label>
	  	<label class="form-control">ID: {{ employee._id }}</label>
		<a href="" class="btn btn-default"> Cancel</a>
	</div>
</form>
