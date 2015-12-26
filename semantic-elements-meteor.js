if (Meteor.isClient) {
  // counter starts at 0
  if (Session.get('counter')) {
    var currentCount = Session.get('counter')
    if (currentCount > 99) {
      Session.set('counter', 0)
    }else{
      Session.set('counter',Session.get('counter'))
    }
  }
  Session.setDefault('counter', 0);

  Template.hello.onRendered = function() {
    var currentCount = Session.get('counter');
    $('#progressBar').progress({
      value: currentCount,
    })

  }

  Template.hello.helpers({
    counter: function() {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function() {
      var currentCount = Session.get('counter');
      if (currentCount <= 99) {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
        var currentCount = Session.get('counter');
        $('#progressBar').progress({
          value: currentCount,
        })
      } else {
        Session.set('counter', 0);
      }
    }
  });

  Template.carousel.rendered = function() {
    $('#carousel').slick({
      dots: true,
      arrows: true
    });
  }
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
