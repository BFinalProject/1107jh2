
<template>
            <div class="content-wrapper">
                <!-- Main content -->
                <div class="content">
                    <!-- Content Header (Page header) -->
                    <div class="content-header">
                        <div class="header-icon"><i class="fa fa-calendar"></i></div>
                        <div class="header-title">
                            <h1>Calender</h1>
                            <small>Show user data in clear profile design</small>
                            <ol class="breadcrumb">
                                <li><a href="/#/main"><i class="pe-7s-home"></i> Home</a></li>
                                <li><a href="#">Calender</a></li>
                                <li class="active">Calender</li>
                            </ol>
                        </div>
                    </div> <!-- /. Content Header (Page header) -->
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <div class="panel panel-bd">
                                <div class="panel-body">
                                    <!-- calender -->
                                    <div id='calendar'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>








<script>
export default {
  data: function() {
    return {
      statList:[],
      nowMonth:"",
    };
  },
  created: function() {
  },
  mounted: function() {
  },
};
</script>
