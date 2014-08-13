 App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
            Backbone.on('dateTimePicker', function(params) {
                self.dateTime(params);
            });
            
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            
            var model = $('#userForm').serializeObject();
            var x, y, z;
            x = model.firstName;
            y = model.lastName;
            z = model.datetimepicker6;
            
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" \n\
          data-dismiss=\"alert\">&times</a>El usuario " + x + " " + y + " nació el " + z + "  </div>";
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        },
        dateTime:function () {
            $('#datetimepicker6').datetimepicker();
        },
    });