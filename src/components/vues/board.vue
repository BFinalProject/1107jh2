<template>
    <div>
        <NavHeader />
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet"
            id="bootstrap-css">
        <!------ Include the above in your HEAD tag ---------->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet'
            type='text/css'>

        <div class="container" style="margin-top: 150px">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">

                    <div class="panel panel-default panel-table">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col col-xs-6">
                                    <h3 class="panel-title">Panel Heading</h3>
                                </div>
                                <div class="col col-xs-6 text-right">
                                    <button type="button" class="btn btn-sm btn-primary btn-create">Create New</button>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <table class="table table-striped table-bordered table-list">
                                <thead>
                                    <tr>

                                        <th class="hidden-xs">NO.</th>
                                        <th>글제목</th>
                                        <th>날짜</th>
                                        <th>아이디</th>
                                        <th><em class="fa fa-cog"></em></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td class="hidden-xs">1</td>
                                        <td>John Doe</td>
                                        <td>johndoe@example.com</td>
                                        <td>johndoe@example.com</td>
                                        <td>johndoe@example.com</td>
                                        <td align="center">
                                            <a class="btn btn-default" style="width:35px; height:auto; margin:0;"><em
                                                    class="fa fa-pencil"></em></a>
                                            <a class="btn btn-danger" style="width:35px; height:auto; margin:0;"><em
                                                    class="fa fa-trash"></em></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col col-xs-4">Page 1 of 5
                                </div>
                                <div class="col col-xs-8">
                                    <ul class="pagination hidden-xs pull-right">
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                    </ul>
                                    <ul class="pagination visible-xs pull-right">
                                        <li><a href="#">«</a></li>
                                        <li><a href="#">»</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <button type="button" class="btn btn-sm btn-primary btn-create">Create New</button> -->
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import '../../board/board.css';

body {
    display: block;
}
</style>
<script>
import NavHeader from '../views/NavHeader.vue'
import Axios from 'axios'


export default {
    setup() {
        return {}
    },

    components: {
        NavHeader,
    },
    mounted: function () {
        let vm = this;

    },

    data() { },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            this.axios.get('/api/?????/').then(res => {
                console.log(res.data);
            });
        },
        // submitBtn() {
        //     this.$axios.post('/api/twitter/post', "this is string").then(res => {
        //         console.log(res);
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // }
    }
}
</script>